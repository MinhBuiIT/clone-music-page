import * as Const from './var.js';
let positionPlaylist = 0;
let positionAlbum = 0;
let positionMv = 0;
let positionArtist = 0;
let standard = 0;

let lengthPlaylistItem = Const.playlistItem.length/5;
let lengthAlbumItem = Const.albumListItem.length/5;
let lengthMvItem = Const.mvListItem.length/3;
let lengthArtistItem = Const.artistListItem.length/5;
if(window.matchMedia("(max-width: 1279px)").matches) {
    lengthArtistItem = Math.floor(Const.artistListItem.length/5);
    lengthPlaylistItem = Math.floor(Const.playlistItem.length/4);
    lengthAlbumItem = Math.floor(Const.albumListItem.length/4);
}
 function hanldeSliderOverviewPerson(e,length,listSlider) {
    let number = 0 - (listSlider.offsetWidth);
    if(e.matches('.icon-right--2') || e.matches('.icon-left--2')) {
        standard = positionAlbum;
        number-=10
    }else if(e.matches('.icon-right--3') || e.matches('.icon-left--3')) {
        standard = positionMv;
    }else if(e.matches('.icon-right--4') || e.matches('.icon-left--4')) {
        standard = positionArtist;
        number-=25
    }else {
        standard = positionPlaylist;
    }
    if(e.matches('.bi-chevron-right')) {
        standard++;
        e.previousElementSibling.classList.add('active');
        if(standard >= length-1) {
            e.classList.remove('active');
        }
        if(standard >= length) {
            standard = length-1;
        }
        listSlider.style = `transform:translateX(${number * standard}px)`;
    }else if(e.matches('.bi-chevron-left')) {
        standard--;
        e.nextElementSibling.classList.add('active');
        if(standard === 0) {
            e.classList.remove('active');
        }
        if(standard < 0) {
            standard = 0;
        }
        listSlider.style = `transform: translateX(${number * standard}px)`  
    }
    if(e.matches('.icon-right--2') || e.matches('.icon-left--2')) {
        positionAlbum = standard;
    }else if(e.matches('.icon-right--3') || e.matches('.icon-left--3')){
        positionMv= standard;
    }else if(e.matches('.icon-right--4') || e.matches('.icon-left--4')) {
         positionArtist = standard;
    }else {
        positionPlaylist= standard;
    }
}
export default function clickSliderPerson() {
    // let num = -1200;
    // let num2 = -1200;
    // let num3 = -1200;
    // if(window.matchMedia("(max-width: 1279px) and (min-width: 1024px)").matches) {
    //     num = -887;
    //     num2 = -903;
    //     num3=-460;
    // }
    // slider playlist item -1195px
    Const.iconRight.onclick = function (e) {
        hanldeSliderOverviewPerson(e.target,lengthPlaylistItem,Const.playlistSlider);
    }
    Const.iconLeft.onclick = function (e) {
        hanldeSliderOverviewPerson(e.target,lengthPlaylistItem,Const.playlistSlider);
    }
    // slider playlist item -1200px
    Const.iconRight2.onclick = function(e) {
        hanldeSliderOverviewPerson(e.target,lengthAlbumItem,Const.albumSlider);
        }
    Const.iconLeft2.onclick = function(e) {
        hanldeSliderOverviewPerson(e.target,lengthAlbumItem,Const.albumSlider);
    }
    // slider mv item -1200px
    Const.iconRight3.onclick = function(e) {
        hanldeSliderOverviewPerson(e.target,lengthMvItem,Const.mvSlider);
        }
    Const.iconLeft3.onclick = function(e) {
        hanldeSliderOverviewPerson(e.target,lengthMvItem,Const.mvSlider);
    }
    // slider artist item -1200px
    Const.iconRight4.onclick = function(e) {
        hanldeSliderOverviewPerson(e.target,lengthArtistItem,Const.artistSlider);
        }
    Const.iconLeft4.onclick = function(e) {
        hanldeSliderOverviewPerson(e.target,lengthArtistItem,Const.artistSlider);
    }
}