import { localStorageService } from './localStorage';
import { slider } from './generate';

const cartNum = document.getElementById('goods-counter') as HTMLSpanElement;
const cashNum = document.getElementById('money-counter') as HTMLSpanElement;
const accio = document.querySelector('.goods-btn') as HTMLButtonElement;
const depulso = document.querySelector('.back-btn') as HTMLButtonElement;
const frontCard = document.querySelector('.front') as HTMLDivElement;
const backCard = document.querySelector('.back') as HTMLDivElement;
const goodsCard = document.querySelector('.goods-slider__card') as HTMLDivElement;


let goodsCount = 0;
let moneyCount = 0; // local suda

export function addToCart(good) {
    goodsCount++;
    moneyCount += good.price; // upd local
}

export function removeToCart(good) {
    goodsCount--;
    moneyCount -= good.price; // upd local
}

slider.addEventListener('click', (event) => {
    const targetElem = event.target as HTMLDivElement;
    const currentElem = event.currentTarget as HTMLDivElement;
    if (currentElem.classList.contains('.goods-slider__card')) {
        currentElem.classList.toggle('active');
    }
    if (targetElem.classList.contains('.goods-btn') ) {
        /*console.log(targetElem);
        goodsCard.classList.toggle('active');
        frontCard.classList.toggle('active');
        backCard.classList.toggle('active');*/
        /*addToCart(good);
        cartNum.textContent = goodsCount;
        cashNum.textContent = moneyCount;*/
    } 
//parent link
    if (targetElem.classList.contains('back-btn') ) {
        goodsCard.classList.remove('active');
        frontCard.classList.remove('active');
        backCard.classList.remove('active');
        /* removeToCart(good)
        cartNum.textContent = goodsCount;
        cashNum.textContent = moneyCount;*/
    }
});





/* на странице отображается количество добавленных в корзину товаров. При попытке добавить в корзину больше 20 товаров, 
выводится всплывающее уведомление с текстом "Извините, все слоты заполнены" +10 */