import { IResponseArticles } from "./article.models";
import { Callback } from "./callback.models";
import { IResponseSources } from "./source.models";

export interface ILoader {
    baseLink: string;
    options: {[key: string]: string};

    getResp({ endpoint, options = {} }: { endpoint: string; options?: { [key: string]: string } }, callback: Callback<IResponseArticles>): void;
    errorHandler(res: Response): Response | Error;
    makeUrl(options: any, endpoint: string): string;
    load(method: string, endpoint: string, callback: Callback<IResponseSources>, options: { [key: string]: string }): void;
}