import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { updatePaymentInfo, cartNum } from '../src/components/cart';

test('test goods count value', () => {
    updatePaymentInfo();
    expect(cartNum).toBeVisible;
});

