import AppLoader from './appLoader';
import { IAppController } from '../../models/controller.models';
import { Callback } from '../../models/callback.models'
import { IResponseArticles } from '../../models/article.models';
import { IResponseSources } from '../../models/source.models';
import { Endpoints } from '../../models/controller.models';

class AppController extends AppLoader implements IAppController {
    getSources( callback: Callback<IResponseSources>): void {
        super.getResp(
            {
                endpoint: Endpoints.Sources,
            },
            callback
        );
    }

    getNews(event: MouseEvent, callback: Callback<IResponseArticles>): void {
        let target: HTMLElement = event.target as HTMLElement;
        const newsContainer: HTMLElement = event.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = <string>target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoints.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
