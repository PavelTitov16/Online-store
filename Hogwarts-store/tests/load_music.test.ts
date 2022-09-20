import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { Player } from '../src/app/player';


test('audio loaded', () => {
    const player = new Player();
    player.loadMusic(1);
    expect(player.audio.src).toBe(String);
});
