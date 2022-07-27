import { GoodModel } from '../models/goods.model';
import { State } from './state';


export class Cart {
    public limitMaxNumber = 20;
    public limitMinNumber = 0;
    public slider: HTMLDivElement;
    public cartNum = document.getElementById('goods-counter') as HTMLSpanElement;
    public cashNum = document.getElementById('money-counter') as HTMLSpanElement;
    public state: State;
    public goods: GoodModel[];

    constructor(items: GoodModel[]) {
        this.slider = document.getElementsByClassName('goods-slider')[0] as HTMLDivElement;
        this.state = new State();
        this.goods = items;
    }

    public updatePaymentInfo(): void {
        this.cartNum.innerHTML = `${this.state.getCart().length} to buy`;
        this.cashNum.innerHTML = `${this.state.getPrice(this.goods)}£ to pay`;
    }

    public addToCart(name: string): void {
        this.state.updateCart([...this.state.getCart(), name]);
        this.updatePaymentInfo();
    }

    public removeFromCart(name: string): void {
        const currentGoodsCount: number = this.state.getCart().length;
        if (currentGoodsCount > this.limitMinNumber) {
            const currentGoods = this.state.getCart();
            const newCart = currentGoods.filter((item: string) => item !== name);
            this.state.updateCart(newCart);
            this.updatePaymentInfo();
        }
    }

    public subscribeOnUserActions(): void {
        this.slider.addEventListener('click', (event: MouseEvent) => {
            const targetElem = event.target as HTMLButtonElement;
            const buttonDiv = targetElem.parentNode as HTMLDivElement;
            const frontSection = buttonDiv.parentNode as HTMLElement;
            const goodCard = frontSection.parentNode as HTMLDivElement;
            const backSection = goodCard.lastElementChild as HTMLElement;
            const frontVIew = goodCard.firstElementChild as HTMLElement;
        
            if (targetElem.classList.contains('goods-btn')) {
                const currentGoodsCount = this.state.getCart().length;
                if (currentGoodsCount < this.limitMaxNumber) {
                    frontSection.classList.add('active');
                    goodCard.classList.add('active');
                    backSection.classList.add('active');
                    this.addToCart(goodCard.id);
                } else alert('Sorry, your chest is full');
            }

            if (targetElem.classList.contains('back-btn')) {
                goodCard.classList.remove('active');
                frontVIew.classList.remove('active');
                backSection.classList.remove('active');
                this.removeFromCart(goodCard.id);
            }
        });
    }
}