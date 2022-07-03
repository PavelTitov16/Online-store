import { ILoader } from '../../models/loader.models';
import { Callback} from '../../models/callback.models'
import { IResponseArticles } from '../../models/article.models';
import { IResponseSources } from '../../models/source.models';

class Loader implements ILoader  {
    public baseLink: string;
    public options: { [key: string]: string};

    constructor(baseLink: string, options: { [key: string]: string}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp({ endpoint, options = {} }: { endpoint: string; options?: { [key: string]: string } }, 
        callback: Callback<IResponseArticles>): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response | Error {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: any, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }
 
    load(method: string, endpoint: string, callback: Callback<IResponseSources>, options: { [key: string]: string }): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;


