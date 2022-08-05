import { MainModel } from '../models/main.model';
import { state } from '../app/state';
import '../assets/images/sprite_car.svg';
import { AppController } from '../app/appController';
import { ControllerModel } from '../models/controller.model';

export class Main implements MainModel {
  public template: string;

  public controller: ControllerModel;

  constructor() {
    this.controller = new AppController();
  }

  public async init(): Promise<string> {
    this.template = `
        
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
                            <input type="text" id="create-input" class="garage-input__item" placeholder="Fill the name" />
                            <input type="color" name="color-panel" id="create-color" value="#000000">
                            <button id="create-btn" class="header__btn button garage-btn">
                                Add car
                            </button>
                        </form>
                    </div>
                    <div class="garage-input">
                        <form action="" class="update-car">
                            <input type="text" id="update-input" class="garage-input__item" placeholder="Fill the name" />
                            <input type="color" name="color-panel" id="update-color" value="#000000">
                            <button id="update-btn" class="header__btn button garage-btn">
                                Update car
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="main-container__tracks" id="main-container__tracks">
                ${await this.trackInit()}
            </div>
        </div>`;
    return this.template;
  }

  public async updateTrack(): Promise<void> {
    const mainTracks = document.getElementById('main-container__tracks') as HTMLDivElement;
    mainTracks.innerHTML = `
      ${await this.trackInit()}
    `;
  }

  public async trackInit(): Promise<string> {
    console.log(state.getCars());
    return `${ state
      .getCars()
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
                                <div class="car" style="fill: ${color}">
                                    <svg class="car">
                                        <use xlink:href="../assets/images/sprite_car.svg#car"></use>
                                    </svg>
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

  public subscribeCreateCar(render: () => void) {
    const createButton = document.getElementById('create-btn');
    createButton?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const createInput = document.getElementById('create-input') as HTMLInputElement;
      const createColor = document.getElementById('create-color') as HTMLInputElement;
      console.log(createInput);
      console.log(createColor);
      await this.controller.createCar({ name: createInput.value, color: createColor.value });
      render();
    });
    console.log(createButton);
  }
}
