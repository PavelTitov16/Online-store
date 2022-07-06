import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IAppView } from '../../models/view.models';
import { IApp } from '../../models/app.models';
import { IResponseArticles } from '../../models/article.models';
import { IResponseSources } from '../../models/source.models';

class App implements IApp {
    public view: IAppView;
    private controller: AppController;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sources: HTMLElement = document.querySelector('.sources') as HTMLElement;
       
        sources.addEventListener('click', (event: MouseEvent) => this.controller.getNews(event, (data: IResponseArticles) => 
                this.view.drawNews(data)));
        this.controller.getSources((data: IResponseSources) => this.view.drawSources(data));
    }
}

export default App;