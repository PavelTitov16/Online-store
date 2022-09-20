import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { Cart } from '../src/app/cart';
import { GoodsGenerator } from '../src/app/goods-generator';


const goodsGenerator = new GoodsGenerator();

const cart = new Cart(goodsGenerator);

test('test update payment by adding to cart', () => {
    cart.addToCart('1');
    expect(cart.updatePaymentInfo).toBeCalled;
});

//can't get array of goods