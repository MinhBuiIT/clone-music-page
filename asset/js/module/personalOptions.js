import * as Const from './var.js';

export default function handleNavClick(arrs,classAdd) {
    [...arrs].forEach((arr) => {
        arr.addEventListener('click',function(e) {
            removeClassList(arrs,classAdd);
            e.target.classList.add(classAdd);
            let id = Number(e.currentTarget.dataset.id);
            removeClassList(Const.personalItems,'shown');
            Const.personalItems[id].classList.add('shown')
        })
    })
}
function removeClassList(arr,className) {
    [...arr].forEach((item) => {
        item.classList.remove(className);
    })
}