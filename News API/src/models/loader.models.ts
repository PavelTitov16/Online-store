import { IResponseArticles } from "./article.models";
import { Callback } from "./callback.models";
import { IResponseSources } from "./source.models";

export type Options = {
    readonly apiKey?: string;
    readonly sources?: string;
}

export interface ILoader {
    getResp({ endpoint, options}: { endpoint: string; options?: { [apiKey: string]: string} }, callback: Callback<IResponseArticles>): void;
    errorHandler(res: Response): Response;
    makeUrl(options: Partial<Options>, endpoint: string): string;
    load(method: string, endpoint: string, callback: Callback<IResponseSources>, options: Partial<Options>): void;
}

