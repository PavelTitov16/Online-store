import { Callback } from "./callback.models";


export type Options = {
    [key: string]: string
}

export const enum ResponseStatuses {
    Ok = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound = 404
}

export interface ILoader {
    getResp<T>({ endpoint, options}: { endpoint: string; options?: Partial<Options>}, callback: Callback<T>): void;
    errorHandler(res: Response): Response;
    makeUrl(options: Partial<Options>, endpoint: string): string;
    load<T>(method: string, endpoint: string, callback: Callback<T>, options: Partial<Options>): void;
}

