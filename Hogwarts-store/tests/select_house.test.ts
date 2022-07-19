import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { selectHouse } from '../src/components/filters';

test('test input on selected house', () => {
    const houseBtns = Array.from(document.querySelectorAll('.house-btn')) as HTMLInputElement[];
    selectHouse('gryffindor');
    houseBtns.forEach(btn => {
        expect(btn.dataset['gryffindor']).toBeChecked;
    });
});
