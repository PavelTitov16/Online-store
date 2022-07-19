import { noContext } from './context_inner';
document.body.innerHTML = noContext;
import { isSearchDataExist} from '../src/components/search';

test('search input exist', () => {
    expect(isSearchDataExist()).toBeFalsy;
});
