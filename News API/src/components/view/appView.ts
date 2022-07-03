import News from './news/news';
import Sources from './sources/sources';
import { IAppView } from '../../models/view.models';
import { ISourceData } from '../../models/source.models';
import { IArticle } from '../../models/article.models';
import { DrawModel } from '../../models/draw.model';

export class AppView implements IAppView {
    public news: DrawModel<IArticle>;
    public sources: DrawModel<ISourceData>;
    
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IArticle[]): void {
        const values: IArticle[] | [] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISourceData[]): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;