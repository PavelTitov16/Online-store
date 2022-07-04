import { ILoader } from '../../models/loader.models';
import { Callback} from '../../models/callback.models';
import { Options } from '../../models/loader.models';
import { ResponseStatuses } from '../../models/loader.models';

class Loader implements ILoader  {
    private baseLink: string;
    private options: Options;

    constructor(baseLink: string, options: { [apiKey: string]: string}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>({ endpoint, options}: { endpoint: string; options?: { [apiKey: string]: string} }, 
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
        const urlOptions: { [key: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: (data: T) => void, options:Partial<Options> = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;


