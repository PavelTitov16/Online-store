import { goodsArray } from './appload';
import { updateGoods } from './generate';

export const search = document.querySelector('.header-search__bar') as HTMLInputElement;
const searchBtn = document.querySelector('.header-search__btn') as HTMLButtonElement;
const searchLink = document.querySelector('#catalogue') as HTMLLinkElement;

export function searchData() {
    const input: string = <string>search.value.toLowerCase();
    const foundGoods = goodsArray.filter((good) => {
        const currName = good.name.trim().toLowerCase();

        if (currName.includes(input)) {
            return good;
        }   
    });
    return foundGoods;
}

export function isSearchDataExist(): boolean {
    const input: string = <string>search.value.toLowerCase();
    return Boolean(input);
}

searchBtn.addEventListener('click', () => {
    searchLink?.scrollIntoView();
    updateGoods();
});

search.addEventListener('input', () => {
    updateGoods();
});

search.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchLink?.scrollIntoView();
    }
});
