import * as Const from './var.js';
let appMv = {
    mvList : [
        {
            id: 1,
            path: './asset/video/1.mp4',
            title: 'IDOL',
            singer: 'BTS',
            img: './asset/img/bts.jpg',
            poster: './asset/img/33.jpg'
        },
        {
            id: 2,
            path: './asset/video/2.mp4',
            title: 'Fake Love',
            singer: 'BTS',
            img: './asset/img/bts.jpg',
            poster: './asset/img/70.jpg'

        },
        {
            id: 3,
            path: './asset/video/3.mp4',
            title: 'All Fall Down',
            singer: 'Alan Walker',
            img: './asset/img/alan.jpg',
            poster: './asset/img/71.jpg'

        },
        {
            id: 4,
            path: './asset/video/4.mp4',
            title: 'Muộn Rồi Mà Sao Còn',
            singer: 'Sơn Tùng',
            img: './asset/img/46.jpg',
            poster: './asset/img/72.jpg'

        }
    ],
    index : 0,
    loadMv() {
        let {id,path,title,singer,img,poster} = this.mvList[this.index];
        Const.videoContainer.innerHTML = `<header class="video-container__header">
        <div class="video-container__header-wrap">
            <div class="video-container__header-photo">
                <img src="${img}" alt="video">
            </div>
            <div class="video-container__header-content">
                <h3>${title}</h3>
                <h4>${singer}</h4>
            </div>
            <div class="video-container__header-icons">
                <i class="bi bi-heart-fill icon-video-header"></i>
                <i class="bi bi-music-note-beamed icon-video-header"></i>
                <i class="bi bi-three-dots icon-video-header"></i>
            </div>
        </div>
        <div class="video-container__header-close">
            <i class="bi bi-x-lg icon-video-header"></i>
        </div>
    </header>
    <div class="video-main " >
        <video class="video-main__mv video-js vjs-theme-fantasy" data-setup="{}" controls poster=${poster}>
            <source src="${path}" type="video/mp4">
        </video>
    </div>`
        Const.bgVideo.style = `background: url(${poster}) no-repeat center /cover`;
    },
    handleEventMv() {
        let _this = this;
        Const.personalMvList.forEach((mv) => {
            mv.onclick = function(e) {
                audio.pause();
                Const.personalMvList.forEach((item) => {
                    item.querySelector('.personal-mv__img-icon').innerHTML = `<i class="bi bi-play-circle icon-play"></i>
                    <i class="bi bi-x icon-close"></i>`;
                })
                e.currentTarget.querySelector('.personal-mv__img-icon').innerHTML = `<h3>Đang Phát</h3>`;
                let id = +e.currentTarget.dataset.mv - 1;
                _this.index = id;
                _this.loadMv();

                Const.bgVideo.classList.add('shown');
                Const.videoContainer.classList.add('shown');

                document.documentElement.scrollTop = 0;
            }
        })
        Const.videoContainer.addEventListener('click',function(e) {
            if(e.target.closest('.video-container__header-close')) {
                Const.bgVideo.classList.remove('shown');
                Const.videoContainer.classList.remove('shown');
                Const.videoContainer.innerHTML = '';
                Const.personalMvList.forEach((item) => {
                    item.querySelector('.personal-mv__img-icon').innerHTML = `<i class="bi bi-play-circle icon-play"></i>
                    <i class="bi bi-x icon-close"></i>`;
                })
            }
        })
    },
    startMv() {
        this.handleEventMv();
    }
}
export default function letMv() {
    appMv.startMv();
}