import { IAppView } from "./view.models";

export interface IApp {
    view: IAppView;

    start(): void;
}
