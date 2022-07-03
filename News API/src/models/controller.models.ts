export interface IAppController {
    getSources(callback: () => void): void; 
    getNews(event: Event, callback: () => void): EventTarget;
}