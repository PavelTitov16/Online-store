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