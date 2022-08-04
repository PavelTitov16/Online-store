import { AppController } from '../app/appController';
import { MainModel } from '../models/main.model';

export class Main implements MainModel {
  public template: string;

  public controller: AppController;

  constructor() {
    this.controller = new AppController();
  }

  public async init(): Promise<string> {
    this.template = `
        <main class="main-container">
        <div class="garage-page">
            <h2 class="main-container__title" id="main-title">
                Garage
            </h2>
            <div class="main-container__panel">
                <div class="garage-btns">
                    <button id="garage-btn" class="header__btn button">
                        Add cars
                    </button>
                    <button id="garage-btn" class="header__btn button">
                        Let's race!
                    </button>
                    <button id="garage-btn" class="header__btn button">
                        Reset race
                    </button>
                </div>
                <div class="main-container__inputs">
                    <div class="garage-input">
                        <form action="" class="create-car">
                            <input type="text" class="garage-input__item" placeholder="Fill the name" />
                            <input type="color" name="color-panel" id="color-changer" value="#000000">
                            <button id="garage-btn" class="header__btn button">
                                Add car
                            </button>
                        </form>
                    </div>
                    <div class="garage-input">
                        <form action="" class="update-car">
                            <input type="text" class="garage-input__item" placeholder="Fill the name" />
                            <input type="color" name="color-panel" id="color-changer" value="#000000">
                            <button id="garage-btn" class="header__btn button">
                                Update car
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="main-container__tracks">
                ${await this.trackInit()}
            </div>
        </div>
        </main>`;
    return this.template;
  }

  public async trackInit(): Promise<string> {
    await this.controller.getCars();
    console.log(this.controller.getCars());
    return `${ this.controller
      .getCarsArray()
      .map(
        ({ name, color, id }) => `
                <div class="main-container__track" id="${id}">
                    <div class="track-btns">
                        <button id="garage-btn" class="track-btn current-car" id="${id}">
                            Select
                        </button>
                        <button id="garage-btn" class="track-btn">
                            Remove
                        </button>
                        <button id="garage-btn" class="track-btn">
                            Drive
                        </button>
                        <button id="garage-btn" class="track-btn">
                            Back
                        </button>
                    </div>
                    <div class="track">
                        <hr class="line">
                        <div class="track-items">
                            <div class="car-items">
                                <div class="car">
                                </div>
                                <h2 class="car-title">${name}</h2>
                            </div>
                            <div class="finish"></div>
                        </div>
                        <hr class="line">
                    </div>
                </div>`
      )
      .join('')}`;
  }

  public async render(): Promise<string> {
    await this.init();
    return this.template;
  }
}
