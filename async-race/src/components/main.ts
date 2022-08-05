import { MainModel } from '../models/main.model';
import { state } from '../app/state';
import '../assets/images/sprite_car.svg';
import { AppController } from '../app/appController';
import { ControllerModel } from '../models/controller.model';
import { generateCars } from './carsGeneration';

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
                    <button id="addCars-btn" class="header__btn button">
                        Add cars
                    </button>
                    <button id="race-btn" class="header__btn button">
                        Let's race!
                    </button>
                    <button id="reset-btn" class="header__btn button">
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
                    <div class="track-btns id="${id}">
                        <button id="select-btn" class="track-btn current-car">
                            Select
                        </button>
                        <button id="remove-btn" class="track-btn">
                            Remove
                        </button>
                        <button id="drive-btn" class="track-btn">
                            Drive
                        </button>
                        <button id="back-btn" class="track-btn">
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

  public subscribeCreateCar(render: () => void): void {
    const createBtn = document.getElementById('create-btn');
    createBtn?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const createInput = document.getElementById('create-input') as HTMLInputElement;
      const createColor = document.getElementById('create-color') as HTMLInputElement;
      await this.controller.createCar({ name: createInput.value, color: createColor.value });
      render();
    });
  }

  public subscribeSelectCar(): void {
    const selectBtn = document.getElementById('select-btn');
    selectBtn?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const selectedCar = selectBtn.parentNode as HTMLDivElement;
      state.setSelectedCar(Number(selectedCar.id));
    });
  }

  public subscribeUpdateCar(render: () => void): void {
    const updateBtn = document.getElementById('update-btn');
    const selectedCar: number | null = state.getSelectedCar();
    updateBtn?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const updateInput = document.getElementById('update-input') as HTMLInputElement;
      const updateColor = document.getElementById('update-color') as HTMLInputElement;
      if (typeof (selectedCar) === 'number') {
        await this.controller.updateCar(
          selectedCar,
          { name: updateInput.value, color: updateColor.value }
        );
        render();
      }
    });
  }

  public subscribeDeleteCar(render: () => void): void {
    const deleteBtn = document.getElementById('delete-btn');
    deleteBtn?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const selectedCar = state.getSelectedCar();
      if (typeof (selectedCar) === 'number') {
        await this.controller.deleteCar(selectedCar);
        render();
      }
    });
  }

  public subscribeAddCars(render: () => void): void {
    const addCarsBtn = document.getElementById('addCars-btn');
    addCarsBtn?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      for (let i = 0; i < 100; i += 1) {
        this.controller.createCar(generateCars());
      }
      render();
    });
  }
}
