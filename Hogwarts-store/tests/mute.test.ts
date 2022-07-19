import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { pressMute, audio } from '../src/components/player';

test('audio muted', () => {
    pressMute();
    expect(audio.muted).toBeFalsy;
});