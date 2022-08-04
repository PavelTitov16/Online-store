import { AppModel } from '../models/app.model';
import { AppController } from './appController';
import { AppView } from './appView';

class App implements AppModel {
    public view: AppView;
    private controller: AppController;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        this.controller.getCars();
        this.view.render();
    }
}

export default App;