import * as Const from './var.js'
export default function scrollHeader() {
    window.addEventListener('scroll',function(e) {
        let scrollHeight = document.documentElement.scrollTop;
        if(scrollHeight>Const.headerMain.clientHeight) {
            // Const.headerMain.style = `left: ${menuOptionWidth}px`;
            Const.headerMain.classList.add('fixed');
        }else {
            // Const.headerMain.style = ``;
            Const.headerMain.classList.remove('fixed');   
        }
    })
}