import { localStorageService } from './localStorage';
import { slider } from './generate';

const cartNum = document.getElementById('goods-counter') as HTMLSpanElement;
const cashNum = document.getElementById('money-counter') as HTMLSpanElement;
/*const accio = document.querySelector('.goods-btn') as HTMLButtonElement;
const depulso = document.querySelector('.back-btn') as HTMLButtonElement;*/

//export function workCart() {
/*
let goodsCount = 0;
let moneyCount = 0; // local suda

export function addToCart(good) {
    if (goodsCount < 20) {
        goodsCount++;
        moneyCount += good.price; // upd local
    } else alert('Sorry, your chest is full');
    
}

export function removeToCart(good) {
    goodsCount--;
    moneyCount -= good.price; // upd local
}*/

slider.addEventListener('click', (event) => {
    //let target = event.target.closest('div');
    const targetElem = event.target as HTMLButtonElement;
    const buttonDiv = targetElem.parentNode as HTMLDivElement;
    const frontSection = buttonDiv.parentNode as HTMLElement;
    const goodCard = frontSection.parentNode as HTMLDivElement;
    const backSection = goodCard.lastElementChild as HTMLElement;
    const frontVIew = goodCard.firstElementChild as HTMLElement;

    if (targetElem.classList.contains('goods-btn')) {
        frontSection.classList.add('active');
        goodCard.classList.toggle('active');
        backSection.classList.toggle('active');
    }

    if (targetElem.classList.contains('back-btn')) {
        frontVIew.classList.remove('active');
        backSection.classList.remove('active');
    }
});
//}
//const currentElem = event.currentTarget as HTMLButtonElement;

/* if (currentElem.classList.contains('goods-btn')) {
        targetElem.classList.toggle('active');*/
//targetElem.parent('goods-slider__card').addClass('active');
    
/*if (targetElem.classList.contains('goods-btn') ) {
        console.log(targetElem);
        goodsCard.classList.toggle('active');
        frontCard.classList.toggle('active');
        backCard.classList.toggle('active');*/
/*addToCart(good);
        cartNum.textContent = goodsCount;
        cashNum.textContent = moneyCount;
    } */

/*if (targetElem.classList.contains('back-btn') ) {
        goodsCard.classList.remove('active');
        frontCard.classList.remove('active');
        backCard.classList.remove('active');
         removeToCart(good)
        cartNum.textContent = goodsCount;
        cashNum.textContent = moneyCount;
    }*/






/* на странице отображается количество добавленных в корзину товаров. При попытке добавить в корзину больше 20 товаров, 
выводится всплывающее уведомление с текстом "Извините, все слоты заполнены" +10 */