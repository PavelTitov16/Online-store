import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { Player } from '../src/app/player';


test('audio muted', () => {
    const player = new Player();
    player.pressMute();
    expect(player.audio.muted).toBeFalsy;
});