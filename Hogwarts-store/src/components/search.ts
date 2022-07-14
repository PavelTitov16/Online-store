import { goodsArray } from './appload';
import { generateGoods } from './generate';
import { mapJsonToProducts } from './appload';



const form = document.getElementById('form') as HTMLFormElement;
const search = document.querySelector('.header-search__bar') as HTMLInputElement;
const searchBtn = document.querySelector('.header-search__btn') as HTMLButtonElement;

export function searchData (query) => {

  const regexp = /`${query}/gi;
  const foundGoods = goodsArray.filter(good => good.name.match(regexp) );
  generateGoods(foundGoods);
};

searchBtn.addEventListener('click', () => {
  if (search.value) {
    searchData(search.value);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (search.value) {
    searchData(search.value);
  }
});


если нет совпадения последовательности букв в поисковом запросе с названием товара, выводится уведомление в 
человекочитаемом формате, например "Извините, совпадений не обнаружено" +2
при вводе поискового запроса на странице остаются только те товары, в которых есть указанные в поиске буквы в 
указанном порядке. При этом не обязательно, чтобы буквы были в начале слова. Регистр символов при поиске не учитывается +10

Поиск ведётся только среди товаров, которые в данный момент отображаются на странице.
если очистить поле поиска, на странице отображаются товары, соответствующие всем выбранным фильтрам и настройкам 
сортировки +10
*/