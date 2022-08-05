import * as Const from './var.js'
export default function handleMenuOption() {
    [...Const.menuOptionItems].forEach((item) => {
        item.onclick = function(e) {
            let clickItem = e.currentTarget;
            removeClassList(Const.menuOptionItems,'active');
            e.currentTarget.classList.add('active')
            removeClassList(Const.mainWraps,'shown-item');
            let textSpan = clickItem.lastElementChild.textContent.toLowerCase();
            [...Const.mainWraps].forEach((mainWrap) => {
                if(mainWrap.firstElementChild.className.toLowerCase() === textSpan) {
                    mainWrap.classList.add('shown-item');
                }
            })
        }
    });
    [...Const.menuOptionItemsMD].forEach((item) => {
        item.onclick = function(e) {
            let clickItem = e.currentTarget;
            removeClassList(Const.menuOptionItemsMD,'active');
            e.currentTarget.classList.add('active')
            removeClassList(Const.mainWraps,'shown-item');
            let textSpan = clickItem.lastElementChild.textContent.toLowerCase();
            [...Const.mainWraps].forEach((mainWrap) => {
                if(mainWrap.firstElementChild.className.toLowerCase() === textSpan) {
                    mainWrap.classList.add('shown-item');
                }
            })
        }
    })
}


function removeClassList(arr,className) {
    [...arr].forEach((item) => {
        item.classList.remove(className);
    })
}