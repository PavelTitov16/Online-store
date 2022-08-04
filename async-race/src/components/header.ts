import { HeaderModel } from "../models/header.model";

export class Header implements HeaderModel {
    public template: string;

    public async init(): Promise<string> {
        return this.template = `
        <header class="header-wrapper">
            <div class="header-container">
                <h1 class="header-container__title" id="app-title">
                    Async Race
                </h1>
                <nav class="header-nav">
                    <div class="header-nav__item">
                        <button id="garage-btn" class="header__btn button">
                            Garage
                        </button>
                    </div>
                    <div class="header-nav__item">
                        <button id="garage-btn" class="header__btn button">
                            Winners
                        </button>
                    </div>
                </nav>
            </div>
        </header>`;
    }

    public async render(): Promise<string> {
        await this.init();
        return this.template;
    }
}

