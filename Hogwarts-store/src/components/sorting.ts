import { localStorageService } from './localStorage';
import { updateGoods } from './generate';
import { Goods } from '../modules/goods.model';
import { goodsArray } from './appload';

const likedGoods = [];

const sortFilters = document.querySelector('.sorting-btns') as HTMLDivElement;

sortFilters.addEventListener('click', (event) => {
    const selectedSortElement = event.target as HTMLInputElement;
    const selectedSort = selectedSortElement.value as string; // local stor
    sortGoods(selectedSort);
    updateGoods();
});


export function sortGoods(value: string) {
    let callback;
    let sortedArray;
    
    switch(value) {
    case 'name_up':
        callback = (a, b) =>  {
            if (a.name < b.name) {
                return -1;
            }              
            if (a.name >  b.name) {
                return 1;
            }
            else return 0;
        };
        break;
    case 'name_down':
        callback = (a, b) =>  {
            if (a.name < b.name) {
                return 1;
            }              
            if (a.name >  b.name) {
                return -1;
            }
            else return 0;
        };
        break;
    case 'price_down':
        callback = (a, b) =>  {
            return b.price-a.price;
        };
        break;
    default:
        callback = (a, b) =>  {
            return a.price-b.price;
        };
    }
    if (value === 'like') {
        return sortedArray = likedGoods;
    } else return sortedArray = goodsArray.sort(callback);
}




/*
        export function mapJsonToProducts(jsonResponse: IGoods[]) {
            return jsonResponse.map((jsonObject: IGoods) => {
                return {
                    [Goods.name]: jsonObject[GoodsJSON.name],
                    [Goods.img]: jsonObject[GoodsJSON.img],
                    [Goods.house]: jsonObject[GoodsJSON.house],
                    [Goods.categories]: jsonObject[GoodsJSON.categories],
                    [Goods.price]: jsonObject[GoodsJSON.price],
                    [Goods.id]: jsonObject[GoodsJSON.id],
                };
            });
        }
        */