import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { Player } from '../src/app/player';

test('audio play', () => {
    const player = new Player();
    player.playMusic();
    expect(player.playBtn.classList.contains).toBe('paused');
});