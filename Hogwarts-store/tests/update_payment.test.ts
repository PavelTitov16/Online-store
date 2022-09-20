import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { Cart } from '../src/app/cart';

test('test goods count value', () => {
    const cart = new Cart();
    cart.updatePaymentInfo();
    expect(cart.cartNum).toBeVisible;
});
//array of goods