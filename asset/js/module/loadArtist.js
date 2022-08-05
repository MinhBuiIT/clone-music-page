import * as Const from './var.js';
const inforArtist = [
    {
        id: 1,
        bg:'background: url(./asset/img/104.jpg) center /cover no-repeat;',
        artist: 'Sơn Tùng M_TP',
        amountCare: '2.3M',
    }, 
    {
        id: 2,
        bg:'background: url(./asset/img/105.jpg) center /cover no-repeat;',
        artist: 'Karik',
        amountCare: '493K',
    }, 
    {
        id: 3,
        bg:'background: url(./asset/img/106.jpg) center /cover no-repeat;',
        artist: 'Soobin',
        amountCare: '497K',
    }, 
    {
        id: 4,
        bg:'background: url(./asset/img/107.jpg) center /cover no-repeat;',
        artist: 'AMEE',
        amountCare: '381K',
    }, 
    {
        id: 5,
        bg:'background: url(./asset/img/108.jpg) center /cover no-repeat;',
        artist: 'Miu Lê',
        amountCare: '415K',
    }, 
    {
        id: 6,
        bg:'background: url(./asset/img/109.jpg) center /cover no-repeat;',
        artist: 'Chi Pu',
        amountCare: '158K',
    }, 
    {
        id: 7,
        bg:'background: url(./asset/img/110.jpg) center /cover no-repeat;',
        artist: 'Soobin',
        amountCare: '326K',
    }, 
    {
        id: 8,
        bg:'background: url(./asset/img/111.jpg) center /cover no-repeat;',
        artist: 'Erik',
        amountCare: '427K',
    }, 
    {
        id: 9,
        bg:'background: url(./asset/img/112.jpg) center /cover no-repeat;',
        artist: 'Hương Ly',
        amountCare: '666K',
    }, 
    {
        id: 10,
        bg:'background: url(./asset/img/113.jpg) center /cover no-repeat;',
        artist: 'Binz',
        amountCare: '389K',
    }, 
    {
        id: 11,
        bg:'background: url(./asset/img/114.jpg) center /cover no-repeat;',
        artist: 'Hương Giang',
        amountCare: '175K',
    }, 
    {
        id: 12,
        bg:'background: url(./asset/img/115.jpg) center /cover no-repeat;',
        artist: 'Orange',
        amountCare: '67K',
    }
    

]

export default function startLoadArtist() {
    Const.artistListItem.forEach((item,index) => {
        let {bg,artist,amountCare} = inforArtist[index];
        let template = `<div class="personal-artist__img" style="${bg}">
        </div>
        <div class="personal-artist__infor">
            <a href="#" class="personal-artist__title">
                ${artist}
                <i class="bi bi-star-fill"></i>
            </a>
            <p class="personal-artist__care">
                ${amountCare} quan tâm
            </p>
            <button class="personal-artist__btn">
                <i class="bi bi-check-lg"></i>
                Đã Quan Tâm
            </button>
        </div>`
        item.innerHTML = '';
        item.insertAdjacentHTML('beforeend',template);
    });
    
    Const.artistListTabImg.forEach((item,index) => {
        let {bg,artist,amountCare} = inforArtist[index];
        let template = `<div class="personal-artist__img" style="${bg}">                          
        </div>
        <div class="personal-artist__infor">
            <a href="#" class="personal-artist__title">
                ${artist}
                <i class="bi bi-star-fill"></i>
            </a>
            <p class="personal-artist__care">
                ${amountCare} quan tâm
            </p>
            <button class="personal-artist__btn">
                <i class="bi bi-check-lg"></i>
                Đã Quan Tâm
            </button>
        </div>`
        item.innerHTML = '';
        item.insertAdjacentHTML('beforeend',template);
    });
}