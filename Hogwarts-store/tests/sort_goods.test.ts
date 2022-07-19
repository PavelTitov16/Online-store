import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { goodsArray } from '../src/components/appload';
import { sortGoods } from '../src/components/sorting';


test('test wrong arguments to sort goods', () => {
    expect(sortGoods('slytherinRUlez', goodsArray)).toThrowError;
});

