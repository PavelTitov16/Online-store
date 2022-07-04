import './news.css';
import { IArticle } from '../../../models/article.models';
import { DrawModel } from '../../../models/draw.model';

class News implements DrawModel<IArticle> {
    draw(data: IArticle[] | []): void {
        
        const news: IArticle[] = data.length >= 10 ? data.filter((_item: IArticle, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: IArticle, idx: number) => {
            const newsClone: HTMLElement = newsItemTemp.content.cloneNode(true) as HTMLElement;
           
            if (idx % 2) (newsClone.querySelector('.news__item') as HTMLDivElement).classList.add('alt');
            
            (newsClone.querySelector('.news__meta-photo') as HTMLDivElement).style.backgroundImage = `url(${
                item.urlToImage || require('../../../img/news_placeholder.jpg')
            })`;
            (newsClone.querySelector('.news__meta-author') as HTMLUListElement).textContent = item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLUListElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLTitleElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLTitleElement).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLParagraphElement).textContent = item.description;
            (newsClone.querySelector('.news__read-more a') as HTMLParagraphElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLDivElement).innerHTML = '';
        (document.querySelector('.news') as HTMLDivElement).appendChild(fragment);
    }
}

export default News;