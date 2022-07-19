import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { updateGoods, deleteGoods } from '../src/components/generate';

test('test to call inner function', () => {
    updateGoods();
    expect(deleteGoods).toBeCalled;
});