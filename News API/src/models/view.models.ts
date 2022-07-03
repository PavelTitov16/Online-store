/*import News from '../components/view/news/news';
import Sources from '../components/view/sources/sources';*/
import { IArticle } from './article.models';
import { ISourceData } from './source.models';
import { DrawModel } from './draw.model';

export interface IAppView {
    news: DrawModel<IArticle>;
    sources: DrawModel<ISourceData>;

    drawNews(data: IArticle[]): void;
    drawSources(data: ISourceData[]): void;
}
