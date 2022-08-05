import * as Const from './var.js'
export default function sliderSinger() {
    Const.sliderSinger.classList.toggle('change');
    [...Const.sliderSingerIcon].forEach((item) => {
        if(Const.sliderSinger.classList.contains('change') && item.classList.contains('slider-singer__icon--right')) {
            addClass(Const.sliderSingerIcon,'slider-singer__icon--light');
            item.classList.remove('slider-singer__icon--light');
        }else if(!Const.sliderSinger.classList.contains('change') && item.classList.contains('slider-singer__icon--left')) {
            addClass(Const.sliderSingerIcon,'slider-singer__icon--light');
            item.classList.remove('slider-singer__icon--light');
        }
    })
}
export function handleSliderSinger(e) {
    if(e.currentTarget.classList.contains('slider-singer__icon--right')) {
        Const.sliderSinger.classList.add('change');
        addClass(Const.sliderSingerIcon,'slider-singer__icon--light');
        e.currentTarget.classList.remove('slider-singer__icon--light');
    }else if(e.currentTarget.classList.contains('slider-singer__icon--left')){
        Const.sliderSinger.classList.remove('change');
        addClass(Const.sliderSingerIcon,'slider-singer__icon--light');
        e.currentTarget.classList.remove('slider-singer__icon--light');
    }
} 


export function sliderSingerFollow() {
    Const.sliderSingerFollow.classList.toggle('change');
    [...Const.sliderSingerIconFollow].forEach((item) => {
        if(Const.sliderSingerFollow.classList.contains('change') && item.classList.contains('slider-singer__icon--right')) {
            addClass(Const.sliderSingerIconFollow,'slider-singer__icon--light');
            item.classList.remove('slider-singer__icon--light');
        }else if(!Const.sliderSingerFollow.classList.contains('change') && item.classList.contains('slider-singer__icon--left')) {
            addClass(Const.sliderSingerIconFollow,'slider-singer__icon--light');
            item.classList.remove('slider-singer__icon--light');
        }
    })
}
export function handleSliderSingerFollow(e) {
    if(e.currentTarget.classList.contains('slider-singer__icon--right')) {
        Const.sliderSingerFollow.classList.add('change');
        addClass(Const.sliderSingerIconFollow,'slider-singer__icon--light');
        e.currentTarget.classList.remove('slider-singer__icon--light');
    }else if(e.currentTarget.classList.contains('slider-singer__icon--left')){
        Const.sliderSingerFollow.classList.remove('change');
        addClass(Const.sliderSingerIconFollow,'slider-singer__icon--light');
        e.currentTarget.classList.remove('slider-singer__icon--light');
    }
} 
export function addClass(arr,nameClass) {
    [...arr].forEach((item) => {
        item.classList.add(nameClass);
    })
}