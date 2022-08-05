import * as Const from './var.js';
// modal
const bgData = [
    {
        id: 0,
        'name': 'Tối',
        'color1': '#111727',
        'color2': 'rgb(11, 19, 32)',
        'colorPri':'#36e2ec',
    }, {
        id: 1,
        'name': 'Tím',
        'color1': 'rgb(23, 15, 35)',
        'color2': 'rgb(35, 27, 46)',
        'colorPri':'#7200a1',
    }, {
        id: 2,
        'name': 'Xanh Đậm',
        'color1': 'rgb(16, 31, 63)',
        'color2': 'rgb(28, 42, 73)',
        'colorPri':'#3460f5',
    }, {
        id: 3,
        'name': 'Xanh Biển',
        'color1': 'rgb(29, 55, 90)',
        'color2': 'rgb(41, 65, 98)',
        'colorPri':'#3460f5',

    }, {
        id: 4,
        'name': 'Xanh Lá',
        'color1': 'rgb(18, 69, 52)',
        'color2': 'rgb(30, 78, 62)',
        'colorPri':'#309785',

    }, {
        id: 5,
        'name': 'Nâu',
        'color1': 'rgb(87, 64, 59)',
        'color2': 'rgb(96, 74, 69)',
        'colorPri':'#986d5c',

    }, {
        id: 6,
        'name': 'Hồng',
        'color1': 'rgb(126, 0, 100)',
        'color2': 'rgb(134, 13, 108)',
        'colorPri':'#d820b0',

    }, {
        id: 7,
        'name': 'Đỏ',
        'color1': 'rgb(115, 23, 23)',
        'color2': 'rgb(122, 35, 35)',
        'colorPri':'#aa1c1c'
    }
];
let indexClicked = JSON.parse(localStorage.getItem('bgDataIndex')) || 0;
function handleBg() {
    localStorage.setItem('bgDataIndex',JSON.stringify(indexClicked));
    Const.bgImg.forEach((item,index) => {
        item.onclick = function(e) {
            console.log(e.target.closest('.bg-item'));
            if(e.target.closest('.bg-item') && !e.target.matches('.btn--see')) {
                indexClicked = index;
                loadBg(indexClicked);
                localStorage.setItem('bgDataIndex',JSON.stringify(indexClicked));
            }
            if(e.target.matches('.btn--see')) {
                loadBg(index);
            }
        }
    })
}
function loadBg(index) {
    let data = bgData[index];
    document.documentElement.style = `--color-dark: ${data.color1};--color-dark-2: ${data.color2};--color-primary: ${data.colorPri};--color-purple: ${data.colorPri}`;
}

Const.modal.addEventListener('click',function(e) {
    if(e.target.matches('.modal-close') || e.target.matches('.modal-bg__overlay')) {
        this.classList.remove('shown');
        loadBg(indexClicked);
    }
    if(e.target.closest('.bg-item') && !e.target.matches('.btn--see')) {
        this.classList.remove('shown');
    }
})
Const.setBg.addEventListener('click',function(e) {
    Const.modal.classList.add('shown')
})
export default function startModal() {
    loadBg(indexClicked);
    handleBg();
}
