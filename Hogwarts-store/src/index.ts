import './icons/hogwarts.ico';
import './style.css';
import { App } from './app/app';
import { AppModel } from './models/app.model';
/*import './components/appload';
import './components/generate';
import './components/filters';
import { updateGoods } from './components/generate';
import './components/cart';
import './components/search';
import './components/sorting';
import './components/player';
import './components/updateFiltersStatus';

updateGoods();*/

const app: AppModel = new App();
app.init();