import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { generateGoods, slider } from '../src/components/generate';

test('test full goods container', () => {
    generateGoods();
    expect(slider.children).toBeTruthy;
});
