import { ILoader } from '../../models/loader.models';
import { Callback } from '../../models/callback.models';
import { Options } from '../../models/loader.models';
import { ResponseStatuses } from '../../models/loader.models';

class Loader implements ILoader  {
    private baseLink: string;
    private options: Options;

    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>({ endpoint, options}: { endpoint: string; options?: Partial<Options>}, 
        callback: Callback<T> = () => {
            console.error('No callback for GET response');
        }): void {
            this.load<T>('GET', endpoint, callback, options);
        }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === ResponseStatuses.BadRequest || res.status === ResponseStatuses.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Partial<Options>, endpoint: string): string {
        const urlOptions: Partial<Options> = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: (data: T) => void, options: Partial<Options> = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: T) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;