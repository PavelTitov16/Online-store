import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { updatePaymentInfo, addToCart } from '../src/components/cart';

test('test update payment by adding to cart', () => {
    addToCart('1');
    expect(updatePaymentInfo).toBeCalled;
});