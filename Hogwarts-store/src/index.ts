import './icons/hogwarts.ico';
import './style.css';
import { App } from './app/app';
import { AppModel } from './models/app.model';

const app: AppModel = new App();
app.init();