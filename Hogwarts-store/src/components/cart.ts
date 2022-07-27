import { localStorageService } from './localStorage';
import { slider } from './generate';

export const cartNum = document.getElementById('goods-counter') as HTMLSpanElement;
export const cashNum = document.getElementById('money-counter') as HTMLSpanElement;
const magicNumber = 20;
const limitNumber = 0;
updatePaymentInfo();
//старт
export function updatePaymentInfo(): void {
    cartNum.innerHTML = `${localStorageService.getCart().length} to buy`;
    cashNum.innerHTML = `${localStorageService.getPrice()}£ to pay`;
}

export function addToCart(name: string): void {
    localStorageService.updateCart([...localStorageService.getCart(), name]);
    updatePaymentInfo();
}

export function removeFromCart(name: string): void {
    const currentGoodsCount: number = localStorageService.getCart().length;
    if (currentGoodsCount > limitNumber) {
        const currentGoods = localStorageService.getCart();
        const newCart = currentGoods.filter((item: string) => item !== name);
        localStorageService.updateCart(newCart);
        updatePaymentInfo();
    }
}
//эксопрт функции в старт
slider.addEventListener('click', (event: MouseEvent) => {
    const targetElem = event.target as HTMLButtonElement;
    const buttonDiv = targetElem.parentNode as HTMLDivElement;
    const frontSection = buttonDiv.parentNode as HTMLElement;
    const goodCard = frontSection.parentNode as HTMLDivElement;
    const backSection = goodCard.lastElementChild as HTMLElement;
    const frontVIew = goodCard.firstElementChild as HTMLElement;

    if (targetElem.classList.contains('goods-btn')) {
        const currentGoodsCount = localStorageService.getCart().length;
        if (currentGoodsCount < magicNumber) {
            frontSection.classList.add('active');
            goodCard.classList.add('active');
            backSection.classList.add('active');
            addToCart(goodCard.id);
        } else alert('Sorry, your chest is full');
    }
    //число 20 в конст
    if (targetElem.classList.contains('back-btn')) {
        goodCard.classList.remove('active');
        frontVIew.classList.remove('active');
        backSection.classList.remove('active');
        removeFromCart(goodCard.id);
    }
});