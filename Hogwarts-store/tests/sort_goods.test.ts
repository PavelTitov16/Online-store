import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { goodsArray } from '../src/components/appload';
import { Sorting } from '../src/app/sorting';


test('test wrong arguments to sort goods', () => {
    const sorting = new Sorting();
    expect(sorting.sortGoods('slytherinRUlez', goodsArray)).toThrowError;
});

//array