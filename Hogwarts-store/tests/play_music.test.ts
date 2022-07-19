import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { playMusic, playBtn } from '../src/components/player';

test('audio play', () => {
    playMusic();
    expect(playBtn.classList.contains).toBe('paused');
});