import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { filterMagic } from '../src/components/filters';
import { slider } from '../src/components/generate';

test('test animation effect', () => {
    filterMagic();
    expect(slider.classList).toContain('filter');
});


