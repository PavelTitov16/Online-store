import { goodsArray } from './appload';

const slider = document.querySelector('.goods-slider') as HTMLDivElement;
/*const cardsAmount = 100;*/

export function createPage() {
    goodsArray.sort( () => Math.random() - 0.5).forEach((good) => {
        const cardSet = `<div class="goods-slider__card" id="${good.id}">
        <img class="goods-slider__image" src="${good.img}" alt="${good.name}">
        <p class="goods-name">
            "${good.name}"
        </p>
        <div class="goods-slider__buy">
            <span class="price">"${good.price}"</span>
            <div class="favourite"></div>
            <button class="goods-btn">Accio</button>
         </div>
    </div>`;
        slider.insertAdjacentHTML('beforeend', cardSet);
    });   
}
createPage();

