import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { Filters} from '../src/app/filters';

test('test input on selected house', () => {
    const filters = new Filters();
    const houseBtns = Array.from(document.querySelectorAll('.house-btn')) as HTMLInputElement[];
    filters.selectHouse('gryffindor');
    houseBtns.forEach(btn => {
        expect(btn.dataset['gryffindor']).toBeChecked;
    });
});
