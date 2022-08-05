export default function slidePrevious(sliderArr,slideIndex) {
    let index=0;
    sliderArr.forEach((item) => {
        if(slideIndex===index) {
            sliderArr[index].classList.replace('slider-item--first','slider-item--second');
            sliderArr[index+1].classList.replace('slider-item--second','slider-item--third');
            sliderArr[index+2].classList.replace('slider-item--third','slider-item--four');
            sliderArr[index+3].classList.replace('slider-item--four','slider-item--first');
        }else if(slideIndex===index+3) {
            sliderArr[index].classList.replace('slider-item--second','slider-item--third');
            sliderArr[index+1].classList.replace('slider-item--third','slider-item--four');
            sliderArr[index+2].classList.replace('slider-item--four','slider-item--first');
            sliderArr[index+3].classList.replace('slider-item--first','slider-item--second');
        }else if(slideIndex===index+2) {
            sliderArr[index].classList.replace('slider-item--third','slider-item--four');
            sliderArr[index+1].classList.replace('slider-item--four','slider-item--first');
            sliderArr[index+2].classList.replace('slider-item--first','slider-item--second');
            sliderArr[index+3].classList.replace('slider-item--second','slider-item--third');
        }else if(slideIndex===index+1) {
            sliderArr[index].classList.replace('slider-item--four','slider-item--first');
            sliderArr[index+1].classList.replace('slider-item--first','slider-item--second');
            sliderArr[index+2].classList.replace('slider-item--second','slider-item--third');
            sliderArr[index+3].classList.replace('slider-item--third','slider-item--four');
        }
    })
}