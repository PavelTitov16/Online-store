import { goodsArray } from './appload';
import { generateGoods, slider, updateGoods } from './generate';

const search = document.querySelector('.header-search__bar') as HTMLInputElement;
const searchBtn = document.querySelector('.header-search__btn') as HTMLButtonElement;
const searchLink = document.querySelector('#catalogue');


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

export function isSearchDataExist() {
    const input: string = <string>search.value.toLowerCase();
    return Boolean(input);
}

searchBtn.addEventListener('click', () => {
    searchLink?.scrollIntoView();
    console.log(searchData());
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
/*
export function searchData(query: string) {
    console.log('search');
    const foundGoods = goodsArray.filter(good => good.name.toLowerCase().includes(query.toLowerCase()));
    generateGoods(foundGoods);
    console.log('search1');
}

(document.getElementById('search-form') as HTMLElement).addEventListener('input', (event:Event) => {
  event.preventDefault();
  const value: string = (event.target as HTMLFormElement).value as string;
  if (value) {
      searchData(value);
  }
});*/

/*
если нет совпадения последовательности букв в поисковом запросе с названием товара, выводится уведомление в 
человекочитаемом формате, например "Извините, совпадений не обнаружено" +2
при вводе поискового запроса на странице остаются только те товары, в которых есть указанные в поиске буквы в 
указанном порядке. При этом не обязательно, чтобы буквы были в начале слова. Регистр символов при поиске не учитывается +10

Поиск ведётся только среди товаров, которые в данный момент отображаются на странице.
если очистить поле поиска, на странице отображаются товары, соответствующие всем выбранным фильтрам и настройкам 
сортировки +10
*/
