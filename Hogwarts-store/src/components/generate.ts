import { Goods } from '../modules/goods.model';
import { goodsArray } from './appload';
import { localStorageService } from './localStorage';
import { Houses } from '../modules/goods.model';
import { sortGoods } from './sorting';
import { isSearchDataExist, searchData } from './search';

export const slider = document.querySelector('.goods-slider') as HTMLDivElement;

export function generateGoods(goods = goodsArray) {
    goods.forEach((good) => {
        const goodsList = `
        <div class="goods-slider__card" id="${good.id}" data-h="${good.house}">
            <section class="front">
                <img class="goods-slider__image" src="${good.img}" alt="${good.name}">
                <p class="goods-name">
                    "${good.name}"
                </p>
                <div class="goods-slider__buy">
                    <span class="price">"£${good.price}"</span>
                    <button class="goods-btn" id="${good.id}">Accio</button>
                </div>
            </section>
            <section class="back">
                <img class="goods-slider__image" src="${good.img}" alt="${good.name}">
                <p class="goods-name">
                    In cart
                </p>
                <div class="goods-slider__buy">
                    <span class="price">"£${good.price}"</span>
                    <button class="back-btn" id="${good.id}">Depulso</button>
                </div>
            </section>   
        </div>`;
        slider.insertAdjacentHTML('beforeend', goodsList);
    });
}

/*export function showGoods(goodsList: string) {
    
}*/

export function updateGoods() {
    const sortValue = localStorageService.getSorters();
    const filters = localStorageService.getFilters();
    const filtersKeys = Object.keys(filters);
    let updatedGoods = [...goodsArray];

    if (isSearchDataExist()) {
        updatedGoods = searchData();
    }
    if (filtersKeys) {
        if (filtersKeys.includes(Goods.house) ) {
            if (filters[Goods.house] !== Houses.All) {
                updatedGoods = updatedGoods.filter(good => {
                    return good.house === filters[Goods.house];

                });
            } 
        }
        if (filtersKeys.includes(Goods.categories) ) {
            if (filters[Goods.categories].length !== 0) {
                updatedGoods = updatedGoods.filter(filteredGood => {
                    if (Array.isArray(filteredGood.categories) ) {
                        return filteredGood.categories.some(item => filters[Goods.categories].includes(item) );
                    } else {
                        return filters[Goods.categories].includes(filteredGood.categories);
                    } 
                });
            }
        }
    }
    if (sortValue?.sort) {
        updatedGoods = sortGoods(sortValue.sort, updatedGoods);
    } else {
        updatedGoods = sortGoods('default', updatedGoods);
    }
    deleteGoods();
    generateGoods(updatedGoods);
}

export function deleteGoods() {
    slider.innerHTML = '';
}

/*  
корзина с локал хранилищем
фильтрация чекбоксы
цена с локал хранилищем И РЕЙНДЖИ
*/

//expect with methods through dot
//suggest to test JS functions