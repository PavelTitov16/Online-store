import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { searchData } from '../src/components/search';

test('search data', () => {
    const filteredgoods = searchData();
    expect(filteredgoods.length).toEqual(0);
});

