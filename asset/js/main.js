import * as Const from './module/var.js';
import slider3D from './module/slider3D.js'
import slidePrevious from './module/sliderPrevious.js'
import sliderSinger, {handleSliderSinger,addClass,sliderSingerFollow,handleSliderSingerFollow} from './module/sliderSinger.js'
import {hanldeMusicForYou,hanldeMusicForYou2} from './module/hanldeMusicForYou.js'
import clickSliderPerson from './module/sliderOverview.js'
import playMusic from './module/handlemusicplayer.js';
import modal from './module/modal.js';
import scrollHeader from './module/scrollheader.js';
import menuOption from './module/menuOptions.js';
import handleNavClick from './module/personalOptions.js'
import hanldMv from './module/handleMv.js';
import loadArtist from './module/loadArtist.js';
let slideIndex=0;

//hiện scroll ở song list
Const.songList.addEventListener('mouseover',function(e) {
    if(!Const.songList.classList.contains('active')) {
        Const.songList.classList.add('active');
    }
})
Const.songList.addEventListener('mouseleave',function(e) {
    if(Const.songList.classList.contains('active')) {
        Const.songList.classList.remove('active');
    }
})


//hanlde slider discover 3D
function changeIndex() {
    slider3D(Const.sliderItem,slideIndex);
    slideIndex++;
    if(slideIndex>Const.sliderItem.length-1) {
        slideIndex=0;
    }
}
Const.sliderLeft.addEventListener('click',function(e) {
    handleClickSlider(-1);
})
Const.sliderRight.addEventListener('click',function(e) {
    handleClickSlider(1);
})
function handleClickSlider(condition) {
    if(condition===-1) {
        slidePrevious(Const.sliderItem,slideIndex);
        slideIndex--;
        if(slideIndex<0) {
            slideIndex=Const.sliderItem.length-1;
        }
    }else if(condition===1) {
        slider3D(Const.sliderItem,slideIndex);
        slideIndex++;
        if(slideIndex>Const.sliderItem.length-1) {
            slideIndex=0;
        }
    }
}
setInterval(function() {
    changeIndex();
},5000)


// slider singer
setInterval(function() {
    sliderSinger();
},5000);
setInterval(function() {
    sliderSingerFollow();
},4000);
[...Const.sliderSingerIcon].forEach((item) => {
    item.addEventListener('click',handleSliderSinger);
});
[...Const.sliderSingerIconFollow].forEach((item) => {
    item.addEventListener('click',handleSliderSingerFollow);
})

// handle scroll header main
scrollHeader();
// hanlde music for you img

setInterval(hanldeMusicForYou,5000);
setInterval(hanldeMusicForYou2,4000);

// menu Options
menuOption();

// vip
Const.menuBtnVip.addEventListener('click',function(e) {
    this.nextElementSibling.classList.toggle('shown')
})

// personal options
handleNavClick(Const.navPersonalOption,'actived');

//navPersonalOption
// click slider person overview
clickSliderPerson();

//phát nhạc
playMusic();

// toggle playlist
Const.togglePlaylistBtn.onclick = function(e) {
    Const.menuSong.classList.toggle('shown');
    this.classList.toggle('actived');
}



// Mv Handle
hanldMv();



//trend btn
let isTrendBtn = false;
Const.trendBtn.addEventListener('click',function(e) {
    if(!isTrendBtn) {
        Const.trendList.style.height = 'auto';
        this.firstElementChild.textContent = 'Thu Gọn';
        this.lastElementChild.classList.replace('bi-chevron-down','bi-chevron-up');
        isTrendBtn = true;
    }else {
        this.firstElementChild.textContent = 'Xem Thêm';
        this.lastElementChild.classList.replace('bi-chevron-up','bi-chevron-down');
        isTrendBtn = false;
        Const.trendList.style = '';

    }
})

// icon heart
let isHeart = false;
Const.iconHearts.forEach((icon) => {
    icon.onclick = function(e) {
        e.target.classList.toggle('active');
        if(e.target.nextElementSibling.matches('.follow-post__item-action-num')) {
            let num ;
            if(!isHeart) {
                num = +e.target.nextElementSibling.textContent + 1;
                isHeart = true;
            }else {
                num = +e.target.nextElementSibling.textContent - 1;
                isHeart = false;
            }
            e.target.nextElementSibling.textContent = num;
        }
    }
})

//dashboard res
document.querySelector('.icon-shown').onclick = function() {
    Const.menuOption.classList.toggle('click');
};
// load hình nền nghệ sĩ
loadArtist();
//modal
modal();
// click setting
document.documentElement.onclick = function(e) {
    if(e.target.matches('.setting-btn')) {
        Const.settingBtn.lastElementChild.classList.toggle('shown')
    }else {
        Const.settingBtn.lastElementChild.classList.remove('shown')
    }
}