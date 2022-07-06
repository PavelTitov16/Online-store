import { IResponseArticles } from "./article.models";
import { Callback } from "./callback.models";
import { IResponseSources } from "./source.models";

export interface IAppController {
    getSources(callback: Callback<IResponseSources>): void; 
    getNews(event: MouseEvent, callback: Callback<IResponseArticles>): void;
}

export const enum Endpoints {
    Sources = 'sources',
    Everything = 'everything'
}