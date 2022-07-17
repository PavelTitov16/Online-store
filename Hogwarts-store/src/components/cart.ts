import { localStorageService } from './localStorage';
import { slider } from './generate';
import { Goods } from '../modules/goods.model';

const cartNum = document.getElementById('goods-counter') as HTMLSpanElement;
const cashNum = document.getElementById('money-counter') as HTMLSpanElement;

updatePaymentInfo();

export function updatePaymentInfo() {
    cartNum.innerHTML = `${localStorageService.getCart().length} to buy`;
    cashNum.innerHTML = `${localStorageService.getPrice()}£ to pay`;
}

export function addToCart(name: string) {
    localStorageService.updateCart([...localStorageService.getCart(), name]);
    updatePaymentInfo();
}

export function removeFromCart(name: string) {
    const currentGoodsCount = localStorageService.getCart().length;
    if (currentGoodsCount > 0) {
        const currentGoods = localStorageService.getCart();
        const newCart = currentGoods.filter((item: string) => item !== name);
        localStorageService.updateCart(newCart);
        updatePaymentInfo();
    }
}

slider.addEventListener('click', (event) => {
    const targetElem = event.target as HTMLButtonElement;
    const buttonDiv = targetElem.parentNode as HTMLDivElement;
    const frontSection = buttonDiv.parentNode as HTMLElement;
    const goodCard = frontSection.parentNode as HTMLDivElement;
    const backSection = goodCard.lastElementChild as HTMLElement;
    const frontVIew = goodCard.firstElementChild as HTMLElement;

    if (targetElem.classList.contains('goods-btn')) {
        const currentGoodsCount = localStorageService.getCart().length;
        if (currentGoodsCount < 20) {
            frontSection.classList.add('active');
            goodCard.classList.add('active');
            backSection.classList.add('active');
            addToCart(goodCard.id);
        } else alert('Sorry, your chest is full');
    }

    if (targetElem.classList.contains('back-btn')) {
        goodCard.classList.remove('active');
        frontVIew.classList.remove('active');
        backSection.classList.remove('active');
        removeFromCart(goodCard.id);
    }
});