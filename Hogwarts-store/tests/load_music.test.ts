import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { loadMusic, audio } from '../src/components/player';

test('audio loaded', () => {
    loadMusic(1);
    expect(audio.src).toBe(String);
});
