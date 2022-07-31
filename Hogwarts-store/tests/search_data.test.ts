import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { SearchForm } from '../src/app/search-form';

test('search data', () => {
    const search = new SearchForm();
    const filteredgoods = search.searchData();
    expect(filteredgoods.length).toEqual(0);
});

//array of goods