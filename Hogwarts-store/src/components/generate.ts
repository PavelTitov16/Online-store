import { Goods } from '../modules/goods.model';
import { goodsArray } from './appload';
import { localStorageService } from './localStorage';
import { Houses } from '../modules/goods.model';

export const slider = document.querySelector('.goods-slider') as HTMLDivElement;

export function generateGoods(goods = goodsArray) {
    goods.sort( () => Math.random() - 0.5).forEach((good) => {
        const goodsList = `
        <div class="goods-slider__card" id="${good.id}" data-h="${good.house}">
            <section class="front">
                <img class="goods-slider__image" src="${good.img}" alt="${good.name}">
                <p class="goods-name">
                    "${good.name}"
                </p>
                <div class="goods-slider__buy">
                    <span class="price">"${good.price}"</span>
                    <div class="favourite"></div>
                    <button class="goods-btn">Accio</button>
                </div>
            </section>
            <section class="back">
                <img class="goods-slider__image" src="${good.img}" alt="${good.name}">
                <p class="goods-name">
                    In cart
                </p>
                <div class="goods-slider__buy">
                    <span class="price">"${good.price}"</span>
                    <button class="goods-btn back-btn">Depulso</button>
                </div>
            </section>   
        </div>`;
        slider.insertAdjacentHTML('beforeend', goodsList);
    });
}







/*export function showGoods(goodsList: string) {
    
}*/

export function updateGoods() {
    const filters = localStorageService.getFilters();
    const filtersKeys = Object.keys(filters);
    let updatedGoods = [...goodsArray];
    // search + regxp */
    console.log(updatedGoods);
    console.log(filtersKeys);
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
    console.log(updatedGoods);
    deleteGoods();
    generateGoods(updatedGoods);
}

export function deleteGoods() {
    slider.innerHTML = '';
}

/* сортировка по убыванию-возрастанию по цене
сортировка по алфавиту убыванию-возрастанию  
фавориты с локал хранилищем
фильтрация чекбоксы
цена с локал хранилищем И РЕЙНДЖИ
обновление фильтрации по дому



Если товаров, соответствующих всем выбранным фильтрам нет, на странице выводится уведомление в человекочитаемом формате, 
например, "Извините, совпадений не обнаружено"
Сброс фильтров +20
есть кнопка reset для сброса фильтров +10
Кнопка reset сбрасывает только фильтры, не влияя на порядок сортировки или товары, добавленные в избранное.
После использования кнопки reset фильтры остаются работоспособными
при сбросе фильтров кнопкой reset, ползунки range slider сдвигаются к краям, значения ползунков возвращаются к 
первоначальным, range slider закрашивается одним цветом +10
*/