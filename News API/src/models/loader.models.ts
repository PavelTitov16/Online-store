import { Callback } from "./callback.models";

export interface ILoader {
    baseLink: string;
    options: string;

    getResp({ endpoint: string, options: IResponseSources }, callback: (data: <T>) => void): void;
    errorHandler(res: Response): Response | Error;
    makeUrl(options: any, endpoint: string): string;
    load(method: string, endpoint: string, callback: (data: <T>) => void, options: IResponseArticles): void;
}