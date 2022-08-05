import * as Const from './var.js'
let indexMusicYou = 1;
let indexMusicYou2 = 1;
export function hanldeMusicForYou() {
    if(indexMusicYou>3) {
        indexMusicYou = 0;
    }
    Const.musicYouImg.forEach((item) => item.classList.remove('music-you__img--shown'));
    Const.musicYouImg[indexMusicYou].classList.add('music-you__img--shown');
    indexMusicYou++;
}
export function hanldeMusicForYou2() {
    if(indexMusicYou2>3) {
        indexMusicYou2 = 0;
    }
    Const.musicYouImg2.forEach((item) => item.classList.remove('music-you__img--shown'));
    Const.musicYouImg2[indexMusicYou2].classList.add('music-you__img--shown');
    indexMusicYou2++;
}