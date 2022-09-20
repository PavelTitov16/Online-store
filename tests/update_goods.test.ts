import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { App, deleteGoods } from '../src/app/app';

test('test to call inner function', () => {
    const app = new App();
    app.parseGoodsList();
    expect(deleteGoods).toBeCalled;
});