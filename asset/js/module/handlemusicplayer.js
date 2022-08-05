const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const audio = $('#audio');
const playBtn = $('.icon-music-player');
const PreBtn = $('.icon-pre');
const nextBtn = $('.icon-next');
const music = $('.music');
const musicPhoto = $('.music-photo img');
const musicRange = $('#music-range');
const musicRangeMb = $('#music-range-mb');
const volumeRange = $('#music-range-vl');
const songList = $('.song-list');

const personalList = $('.personal__main-song-list'); 
const personalPhotoLeft = $('.personal__main-song-left-photo');
const personalPhotoLeftImg = personalPhotoLeft.firstElementChild;
const personalTitleLeft = $('.personal__main-song-left-title');
const personalBtnLeft = $('.personal__main-song-left-btn');

const btnReplay = $('.menu-icon-replay');
const btnRandom = $('.menu-icon-random');

const personalSongOver = $('.personal-song__list');
/**
 * đưa list nhạc lên -> OK
 * đưa bài hát đầu tiên vào phát nhạc -> OK
 * chơi nhạc khi nhấn play -> OK
 * làm hiệu ứng khi chơi nhạc -> OK
 * làm currentTime và endTime -> OK
 * làm bar process -> OK
 * làm bar volume -> OK
 * active vào link nhạc -> OK
 * nhạc play khi nhấn vào -> OK
 * scroll đến khi active -> OK
 * active vào link nhạc ở personal -> OK
 * nhạc play khi nhấn vào ở personal-> OK
 * scroll đến khi active ở personal-> OK
 * load nhạc đầu tiên vào img left ở personal -> OK
 * thumb ở personal left quay -> OK
 * xử lý button ở personal left -> OK
 * khi end nhạc next bài tiếp theo -> OK
 * quay lại bài nhạc khi click vào nút back -> OK
 * random bài hát -> OK
 */
let app = {
    songs: [
        {
            id: 1,
            song: 'Muộn Rồi Mà Sao Còn',
            singer:'Sơn Tùng MTP',
            img: './asset/img/img-music/1.jpg',
            path: './asset/audio/1.mp3',
            album: 'Muộn Rồi Mà Sao Còn',
            duration: '04:35',
        },
        {
            id: 2,
            song: 'Về Bên Anh',
            singer:'Jack',
            img: './asset/img/img-music/2.jpg',
            path: './asset/audio/2.mp3',
            album: 'Về Bên Anh',
            duration: '04:07'

        },
        {
            id: 3,
            song: 'Fake Love',
            singer:'BTS',
            img: './asset/img/img-music/3.jpg',
            path: './asset/audio/3.mp3',
            album: 'Love Yourself: Tear',
            duration: '04:00'
        },
        {
            id: 4,
            song: 'Rồi Tới Luôn',
            singer:'Nal',
            img: './asset/img/img-music/4.jpg',
            path: './asset/audio/4.mp3',
            album: 'Rồi Tới Luôn',
            duration: '04:02'
        },
        {
            id: 5,
            song: 'Hoa Tàn Tình Tan',
            singer:'Giang Jolee',
            img: './asset/img/img-music/5.jpg',
            path: './asset/audio/5.mp3',
            album: 'Hoa Tàn Tình Tan',
            duration: '03:39'
        },
        {
            id: 6,
            song: 'Gu',
            singer:'Seachains, Cukak, Freaky',
            img: './asset/img/img-music/6.jpg',
            path: './asset/audio/6.mp3',
            album: 'Gu',
            duration: '02:52'
        },
        {
            id: 7,
            song: 'Way Back Home',
            singer:'Shaun',
            img: './asset/img/img-music/7.jpg',
            path: './asset/audio/7.mp3',
            album: 'Take',
            duration: '03:12'
        },
        {
            id: 8,
            song: 'Reality',
            singer:'Lost Frequencies',
            img: './asset/img/img-music/8.jpg',
            path: './asset/audio/8.mp3',
            album: 'Reality',
            duration: '02:38'
        },
        {
            id: 9,
            song: 'Unity',
            singer:'Alan Walker',
            img: './asset/img/img-music/9.jpg',
            path: './asset/audio/9.mp3',
            album: 'Unity',
            duration: '03:23'
        },
        {
            id: 10,
            song: 'Nevada',
            singer:'Vicetone',
            img: './asset/img/img-music/10.jpg',
            path: './asset/audio/10.mp3',
            album: 'Nevada',
            duration: '03:28'
        },
        {
            id: 11,
            song: 'Nơi Này Có Anh',
            singer:'Sơn Tùng MTP',
            img: './asset/img/img-music/11.jpg',
            path: './asset/audio/11.mp3',
            album: 'Nơi Này Có Anh',
            duration: '04:20'
        }
    ],
    currentIndex: JSON.parse(localStorage.getItem('indexSong')) || 0,
    isPlay: false,
    isReplay: false,
    isRandom: false,
    setLocal(value) {
        localStorage.setItem('indexSong',JSON.stringify(value));
    },
    defineProperties() {
        Object.defineProperty(this,'currentSong',{
            get : function() {
                return this.songs[this.currentIndex];
            }
        })
    },
    circleThumb: musicPhoto.animate([
        {transform: 'rotate(360deg)'}
    ], {
        duration: 4000,
        iterations: Infinity
    }) ,
    circleThumb2: personalPhotoLeftImg.animate([
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(360deg)'}
    ], {
        duration: 3000,
        iterations: Infinity
    }) ,
    //load list nhạc
    loadItemPlaylist() {
        let htmls = this.songs.map((song) => {
            return `<li class="song-list__item" data-id=${song.id}>
            <span class="song-list__item--num">${song.id>=10 ? song.id : ('0'+song.id)}</span>
            <div class="song-list__song">
                <div class="song-list__song-wrap">
                    <img src="${song.img}" alt="song">
                    <i class="song-list__item-wave"></i>
                </div>
                <div class="song-list__song--details">
                    <span class="title">${song.song}</span>
                    <span class="author">${song.singer}</span>
                </div>
                </div>
                <i class="bi bi-play-circle song-list__item-play"></i>
        </li>`
        }).join('');
        songList.innerHTML = htmls;
    },
    //load personal list
    loadPersonalList() {
        let htmls = this.songs.map((song) => {
            return `<div class="personal__main-song-item">
            <div class="personal__main-song-item-infor">
                <i class="bi bi-music-note-beamed"></i>
                <div class="personal__main-song-item-infor__img" >
                    <img src="${song.img}" alt="Photo" data-id=${song.id}>
                    <div class="personal__main-song-item-infor__img-play">
                        <i class="bi bi-play-fill"></i>
                    </div>
                </div>
                <div class="personal__main-song-item-infor__des">
                    <h3>${song.song}</h3>
                    <div class="personal__main-song-item-infor__des-author">
                        <a href="#">${song.singer.split(',')[0]}</a> <a href="#">${!song.singer.split(',')[1] ? '' : ' ,'+song.singer.split(',')[1]}</a> 
                    </div>
                </div>
            </div>
            <a href="#" class="personal__main-song-item-album">${song.album}</a>
            <div class="personal__main-song-item-last">
                <span class="personal__main-song-item-last__time">${song.duration}</span>
                <div class="personal__main-song-item-last-icons ">
                    <i class="bi bi-camera-video hidden-576"></i>
                    <i class="bi bi-mic hidden-576"></i>
                    <i class="bi bi-suit-heart-fill icon-trans icon-trans"></i>
                    <i class="bi bi-three-dots"></i>
                </div>
            </div>
        </div>`;
        })
        personalList.innerHTML = htmls.join('');
    },
    //load list song on overview
    loadSongOver() {
        let htmls = this.songs.map((song) => {
            return `    <div class="personal-song__item" data-itemId = ${song.id}>
            <div class="personal-song__item-main">
                <span>${song.id<10 ? '0'+song.id : song.id}</span>
                <div class="personal-song__item-music">
                    <div class="personal-song__item-music-photo">
                        <img src="${song.img}" alt="Photo">
                    </div>
                    <div class="personal-song__item-music-title">
                        <h3>${song.song}</h3>
                        <h4>${song.singer}</h4>
                    </div>
                </div>
            </div>
            <div class="personal-song__item-infor">
                <div class="personal-song__item-infor-album hidden-576">${song.singer}</div>
                <div class="personal-song__item-infor-time hidden-576">${song.duration}</div>
                <!-- <i class="bi bi-heart"></i> -->
                <i class="bi bi-heart-fill"></i>
            </div>
        </div>`
        })
        personalSongOver.innerHTML = htmls.join('');
    },
    
    //load bài hát theo current
    loadSongCurIndex() {
        let {img,song,singer,path} = this.currentSong;
        $('.music-photo img').src = img;
        $('.music-details .title').textContent = song;
        $('.music-details .author').textContent = singer;
        audio.src = path;
        
    },
    //load img and title ở personal left
    loadInforInPersonalLeft() {
        let {img,song} = this.currentSong;
        personalPhotoLeftImg.src = img;
        personalTitleLeft.textContent = song;
    },
    hanldeTime(time) {
        let minutes = parseInt(time/60);
        let seconds = parseInt(time%60);
        return `${minutes<10 ? '0' + minutes : minutes}:${seconds<10 ? '0' + seconds : seconds}`;
    },
    scrollIntoView(node,block = 'center') {
        node.scrollIntoView({
            behavior: 'smooth',
            block: block
        })
    },
    handleEvent() {
        let _this = this;
        const songListItems = $$('.song-list__item');
        const songPersonalList = $$('.personal__main-song-item');
        const songListOver = $$('.personal-song__item');
        playBtn.addEventListener('click',function(e) {
            if(!_this.isPlay) {
                audio.play();
                
            }else {
                audio.pause();
            }
        })
        personalBtnLeft.addEventListener('click',function(e) {
            if(!_this.isPlay) {
                audio.play();
                
            }else {
                audio.pause();
            }
        })
        audio.addEventListener('play',function(e) {
            _this.removeClassinList(songListItems,'active');

            // localStorage
            _this.setLocal(_this.currentIndex);
            //list song bar
            songListItems[_this.currentIndex].classList.add('active');
            $$('.song-list__item-wave')[_this.currentIndex].style.opacity = 1;
            $$('.song-list .bi')[_this.currentIndex].classList.add('bi-pause-circle');
            $$('.song-list .bi')[_this.currentIndex].classList.remove('bi-play-circle');
            //list song personal main
            songPersonalList[_this.currentIndex].classList.add('active');
            $$('.personal__main-song-item-infor__img-play i')[_this.currentIndex].className = 'song-list__item-wave';
            //personal left
            personalPhotoLeft.classList.add('playing');
            setTimeout(function() {
                _this.circleThumb2.play();
            },1000)
            //button ở personal left
            personalBtnLeft.lastElementChild.textContent = 'Tạm dừng';
            personalBtnLeft.firstElementChild.classList.replace('bi-play-fill','bi-pause-fill');
            _this.loadInforInPersonalLeft();
            // overview
            songListOver[_this.currentIndex].classList.add('active');
            //chỗ phát nhạc
            playBtn.classList.remove('bi-play-fill');
            playBtn.classList.add('bi-pause-fill');
            music.classList.add('playing');
            _this.circleThumb.play();
            _this.isPlay = true;

        }) 

        audio.addEventListener('pause',function(e) {
            //list song bar
            $$('.song-list__item-wave')[_this.currentIndex].style.opacity = 0;
            $$('.song-list .bi')[_this.currentIndex].classList.remove('bi-pause-circle');
            $$('.song-list .bi')[_this.currentIndex].classList.add('bi-play-circle');
            //list song personal main
            $$('.personal__main-song-item-infor__img-play i')[_this.currentIndex].className = 'bi bi-play-fill';

            //personal left
            _this.circleThumb2.cancel();
            personalPhotoLeft.classList.remove('playing');
            //button ở personal left
            personalBtnLeft.lastElementChild.textContent = 'tiếp tục phát';
            personalBtnLeft.firstElementChild.classList.replace('bi-pause-fill','bi-play-fill');
            // overview
            //chỗ phát nhạc
            playBtn.classList.add('bi-play-fill');
            playBtn.classList.remove('bi-pause-fill');
            music.classList.remove('playing');
            _this.circleThumb.pause();
            _this.isPlay = false;
        })

        // next bài hát
        let arr = [];
        nextBtn.onclick =async function(e) {
            _this.removeClassinList(songPersonalList,'active')
            $$('.personal__main-song-item-infor__img-play i')[_this.currentIndex].className = 'bi bi-play-fill';
            if(_this.isRandom) {
                let arr2 = Array.from(new Set(arr));
                if(arr2.length >= _this.songs.length) {
                    arr = [];
                }
                while(arr.includes(_this.currentIndex)) {
                    _this.currentIndex = _this.randomNumberFollowSongs();
                }
                arr.push(_this.currentIndex);
            }else {
                _this.currentIndex++;
                if(_this.currentIndex > _this.songs.length-1) {
                    _this.currentIndex = 0;
                }
            }
            _this.loadSongCurIndex();
            setTimeout(function(e) {
                audio.play();
            },200);
            songListItems[_this.currentIndex].click();
            songPersonalList[_this.currentIndex].click();
            songListOver[_this.currentIndex].click();
            setTimeout(function(e) {
                _this.scrollIntoView(songPersonalList[_this.currentIndex]);
            },300)
            _this.scrollIntoView(songListItems[_this.currentIndex]);
            setTimeout(function() {
                _this.scrollIntoView(songListOver[_this.currentIndex],'nearest');
            },350)
            _this.loadInforInPersonalLeft();
        }
        // pre bài hát
        PreBtn.onclick = function(e) {
            _this.removeClassinList(songPersonalList,'active')
            $$('.personal__main-song-item-infor__img-play i')[_this.currentIndex].className = 'bi bi-play-fill';
            if(_this.isRandom) {
                if(arr.length >= _this.songs.length) {
                    arr = [];
                }
                while(arr.includes(_this.currentIndex)) {
                    _this.currentIndex = _this.randomNumberFollowSongs();
                }
                arr.push(_this.currentIndex);
            }else {
                _this.currentIndex--;
                if(_this.currentIndex < 0) {
                    _this.currentIndex = _this.songs.length-1;
                }
            }
            _this.loadSongCurIndex();
            setTimeout(function(e) {
                audio.play();
            },200)
            songListItems[_this.currentIndex].click();
            songPersonalList[_this.currentIndex].click();
            songListOver[_this.currentIndex].click();


            setTimeout(function(e) {
                _this.scrollIntoView(songPersonalList[_this.currentIndex]);
            },400)
            setTimeout(function() {
                _this.scrollIntoView(songListOver[_this.currentIndex],'nearest');
            },350)
            _this.scrollIntoView(songListItems[_this.currentIndex]);

            _this.loadInforInPersonalLeft();
        }
        // khi nhạc end
        audio.addEventListener('ended',function(e) {
            if(!_this.isReplay) {
                nextBtn.click();
            }else {
                audio.play();
            }
        })
        //process music 
        audio.addEventListener('timeupdate',function(e) {
            $('.current-time').textContent = _this.hanldeTime(audio.currentTime);
            if(app.hanldeTime(audio.duration) === 'NaN:NaN') {
                $('.duration-time').textContent = '00:00';
            }else {
                $('.duration-time').textContent = app.hanldeTime(audio.duration);
            }

            let ratio = audio.currentTime/audio.duration * 100;
            musicRange.value = ratio;
            musicRangeMb.value = ratio;
            $('.input-wrap .bar2').style = `width: ${ratio}%`;
            $('.input-wrap-mb .bar2-mb').style = `width: ${ratio}%`;
            $('.input-wrap .dot').style = `left: ${ratio}%`;
        })
        musicRange.addEventListener('change',function(e) {
            audio.currentTime = this.value*audio.duration/100;
            $('.input-wrap .bar2').style = `width: ${this.value}%`;
            $('.input-wrap .dot').style = `left: ${this.value}%`;
        });
        musicRangeMb.addEventListener('change',function(e) {
            audio.currentTime = this.value*audio.duration/100;
            $('.input-wrap-mb .bar2-mb').style = `width: ${this.value}%`;
        })
        //music volume
        volumeRange.addEventListener('change',function(e) {
            audio.volume = this.value/100;
            $('.input-wrap-vl .bar2').style = `width: ${this.value}%`;
            $('.input-wrap-vl .dot').style = `left: ${this.value}%`;
            if(this.value<1) {
                $('.vol-music i').classList.remove('bi-volume-up-fill');
                $('.vol-music i').classList.add('bi-volume-mute-fill');
            }else {
                $('.vol-music i').classList.add('bi-volume-up-fill');
                $('.vol-music i').classList.remove('bi-volume-mute-fill');
            }
        })


        let personalItemOver2;
        personalSongOver.addEventListener('click',function(e) {
            let personalItemOver = e.target.closest('.personal-song__item');
            if(personalItemOver) {
                let id = +personalItemOver.dataset.itemid - 1;
                _this.currentIndex = id;
                arr.push(_this.currentIndex);
                _this.scrollIntoView(personalItemOver,'nearest');
                if(personalItemOver2!==personalItemOver) {
                    _this.loadSongCurIndex();
                    _this.removeClassinList(songPersonalList,'active')
                    _this.removeClassinList(songListOver,'active');
                    _this.removeClassinList(songListItems,'active');
                    _this.removeClassinList($$('.song-list__item-play'),'bi-pause-circle');
                    _this.addClassinList($$('.song-list__item-play'),'bi-play-circle');
                    setTimeout(function() {
                        _this.scrollIntoView(songListItems[_this.currentIndex])
                    },300)
                    setTimeout(function() {
                        audio.play();
                    },200)
                }else {
                    if(!_this.isPlay) {
                        setTimeout(function() {
                            audio.play();
                        },200)
                    }else {
                        audio.pause();
                    }
                }
            }
            personalItemOver2 = personalItemOver;
        })



        //nhấn vào list nhạc
        let songListItem2;
        songList.addEventListener('click',function(e) {
            let songListItem = e.target.closest('.song-list__item');
            if(songListItem) {
                _this.removeClassinList(songListItems,'active');
                songListItem.classList.add('active');
                _this.currentIndex = Number(songListItem.dataset.id) - 1;
                arr.push(_this.currentIndex);
                _this.scrollIntoView(songListItem);
                if(songListItem2!==songListItem) {
                    _this.loadInforInPersonalLeft();
                    _this.loadSongCurIndex();
                    _this.addClassinList($$('.song-list .bi'),'bi-play-circle');
                    _this.removeClassinList(songPersonalList,'active');
                    _this.removeClassinList(songListOver,'active');
                    
                    _this.fixedClassinList($$('.personal__main-song-item-infor__img-play i'),'bi bi-play-fill')
                    setTimeout(function() {
                        _this.scrollIntoView(songPersonalList[_this.currentIndex])
                    },300);
                    setTimeout(function() {
                        _this.scrollIntoView(songListOver[_this.currentIndex],'nearest');
                    },350)
                    setTimeout(function() {
                        audio.play();
                    },200)
                }else {
                    if(!_this.isPlay) {
                        setTimeout(function() {
                            audio.play();
                        },200)
                    }else {
                        audio.pause();
                    }
                }
                songListItem2 = songListItem;
            }
        });

        //nhấn vào list nhạc ở personal
        let songPersonalImg2;
        let currentIndex2;
        personalList.addEventListener('click',function(e) {
            if(e.target.matches('.personal__main-song-item-infor__img img')) {
                let songPersonalImg = e.target;
                let personalSongItem = songPersonalImg.closest('.personal__main-song-item');
                _this.removeClassinList(songPersonalList,'active');
                personalSongItem.classList.add('active');
                let id = +e.target.dataset.id - 1;
                _this.currentIndex = id;
                arr.push(_this.currentIndex);
                setTimeout(function() {
                    _this.scrollIntoView(songPersonalImg);
                },300)
                
                if(songPersonalImg2!==songPersonalImg) {
                    _this.loadInforInPersonalLeft();
                    _this.loadSongCurIndex();
                    _this.removeClassinList(songListOver,'active');
                    _this.fixedClassinList($$('.personal__main-song-item-infor__img-play i'),'bi bi-play-fill');
                    if(currentIndex2!==undefined) {
                        _this.removeClassinList(songListItems,'active');
                        $$('.song-list__item-wave')[currentIndex2].style.opacity = 0;
                        $$('.song-list__item .bi')[currentIndex2].classList.remove('bi-pause-circle');
                        $$('.song-list__item .bi')[currentIndex2].classList.add('bi-play-circle');
                    }
                    _this.scrollIntoView(songListItems[_this.currentIndex]);
                    setTimeout(function() {
                        _this.scrollIntoView(songListOver[_this.currentIndex],'nearest');
                    },350)
                    setTimeout(function() {
                        audio.play();
                    },200)
                }else {
                    if(!_this.isPlay) {
                        setTimeout(function() {
                            audio.play();
                        },200)
                    }else {
                        audio.pause();
                    }
                }

                currentIndex2 = _this.currentIndex;
                songPersonalImg2 = songPersonalImg;
            }
        })
        //click vào thumb
        personalPhotoLeft.onclick = function(e) {
            if(!_this.isPlay) {
                audio.play();
            }else {
                audio.pause();
            }
        }
        //replay music
        btnReplay.addEventListener('click',function(e) {
            _this.isReplay = !_this.isReplay;
            e.target.classList.toggle('active',_this.isReplay);
        })
        //random music
        btnRandom.addEventListener('click',function(e) {
            _this.isRandom = !_this.isRandom;
            e.target.classList.toggle('active',_this.isRandom);
        })
    },
    randomNumberFollowSongs() {
        let songsLength = this.songs.length;
        return Math.floor(Math.random()*songsLength);
    },
    removeClassinList(list,className) {
        list.forEach((item) => {
            item.classList.remove(className);
        })
    },
    addClassinList(list,className) {
        list.forEach((item) => {
            item.classList.add(className);
        })
    },
    fixedClassinList(list,className) {
        list.forEach((item) => {
            item.className = className;
        })
    },
    start() {
        this.circleThumb.pause();
        this.circleThumb2.pause();
        //đưa list nhạc lên 
        this.loadItemPlaylist();
        //đưa list nhạc lên personal
        this.loadPersonalList();
        //đưa list nhạc lên personal overview 
        this.loadSongOver();
        //định nghĩa properties
        this.defineProperties();
        //load Infor Left
        this.loadInforInPersonalLeft();
        //load bài hát vào phát nhạc
        this.loadSongCurIndex();
        //event
        this.handleEvent();
        
    }
}
export default function letStart() {
    app.start();
}