import { Callback } from "./callback.models";

export interface IAppController {
    getSources(callback: (data: <T>) => void): void; 
    getNews(event: Event, callback: (data: <T>) => void): EventTarget;
}