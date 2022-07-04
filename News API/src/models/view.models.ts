/*import News from '../components/view/news/news';
import Sources from '../components/view/sources/sources';*/
import { IArticle, IResponseArticles } from './article.models';
import { IResponseSources, ISourceData } from './source.models';
import { DrawModel } from './draw.model';

export interface IAppView {
    news: DrawModel<IArticle>;
    sources: DrawModel<ISourceData>;

    drawNews(data: IResponseArticles): void;
    drawSources(data:IResponseSources): void;
}
