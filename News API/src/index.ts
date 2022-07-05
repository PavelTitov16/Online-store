import App from './components/app/app';
import './global.css';
import { IApp } from './models/app.models';

const app: IApp = new App();
app.start();
