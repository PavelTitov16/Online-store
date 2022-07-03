import { IResponseArticles } from "./article.models";
import { Callback } from "./callback.models";
import { IResponseSources } from "./source.models";

export interface IAppController {
    getSources(callback: Callback<IResponseArticles>): void; 
    getNews(event: Event, callback: Callback<IResponseSources>): void;
}