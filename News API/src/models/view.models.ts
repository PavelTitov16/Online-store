import { IArticle, IResponseArticles } from './article.models';
import { IResponseSources, ISourceData } from './source.models';
import { DrawModel } from './draw.model';

export interface IAppView {
    news: DrawModel<IArticle>;
    sources: DrawModel<ISourceData>;

    drawNews(data: IResponseArticles): void;
    drawSources(data: IResponseSources): void;
}
