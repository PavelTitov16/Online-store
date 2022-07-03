import { ISourceData } from './source.models';

export interface IArticle {
    source: ISourceData;
    author: string;
    title: string;
    description: string;
    url: string; 
    urlToImage: string; 
    publishedAt: string; 
}

export interface IResponseArticles {
    status: string,
    totalResults: number,
    articles: IArticle[]
}