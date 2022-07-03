export interface ILoader {
    baseLink: string;
    options: string;

    getResp({ endpoint: string, options = {} }, callback = (): void): void;
    errorHandler(res: any): any | error;
    makeUrl(options: any, endpoint: any): any;
    load(method: any, endpoint: string, callback = (): void, options = {}): void;
}