import './style.css';
import './api/apiProvider';
import './api/paths';
import './app/app';
import './app/appController';

import App from './app/app';
import './style.css';
import { AppModel } from './models/app.model';

const app: AppModel = new App();
app.start();
