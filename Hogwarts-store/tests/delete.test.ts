import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { slider, deleteGoods } from '../src/components/generate';

test('test empty goods container', () => {
    deleteGoods();
    expect(slider.innerHTML).toEqual('');
});

