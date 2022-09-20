import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { SearchForm } from '../src/app/search-form';

test('search input exist', () => {
    const search = new SearchForm();
    expect(search.isSearchDataExist()).toBeFalsy;
});
