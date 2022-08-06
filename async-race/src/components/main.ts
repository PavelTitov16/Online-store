import { MainModel } from '../models/main.model';
import { state } from '../app/state';
import '../assets/images/sprite_car.svg';
import { AppController } from '../app/appController';
import { ControllerModel } from '../models/controller.model';
import { generateCars } from './carsGeneration';
import { CARS_LIMIT_PER_PAGE } from '../app/consts';
import { CarController } from '../app/carController';

export class Main implements MainModel {
  public template: string;

  public controller: ControllerModel;

  public carController: CarController;

  constructor() {
    this.controller = new AppController();
    this.carController = new CarController();
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
                            <input type="color" name="color-panel" id="create-color" class="garage-input__item palette" value="#000000">
                            <button id="create-btn" class="header__btn button garage-btn">
                                Add car
                            </button>
                        </form>
                    </div>
                    <div class="garage-input">
                        <form action="" class="update-car">
                            <input type="text" id="update-input" class="garage-input__item" placeholder="Fill the name" />
                            <input type="color" name="color-panel" id="update-color" class="garage-input__item palette" value="#000000">
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
    return `${ state
      .getCars()
      .map(
        ({ name, color, id }) => `
                <div class="main-container__track" id="${id}">
                    <div class="track-btns">
                        <button id="select-btn-${id}" class="track-btn">
                            Select
                        </button>
                        <button id="remove-btn-${id}" class="track-btn">
                            Remove
                        </button>
                        <button id="drive-btn-${id}" class="track-btn">
                            Drive
                        </button>
                        <button id="back-btn-${id}" class="track-btn">
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

  public updatePanelStatus() {
    const selectedId = state.getSelectedCar();
    const updateInput = document.getElementById('update-input') as HTMLInputElement;
    const updateColor = document.getElementById('update-color') as HTMLInputElement;
    const updateBtn = document.getElementById('update-btn') as HTMLButtonElement;
    if (selectedId) {
      const selectedCar = state.getCars().find((car) => car.id === selectedId);
      if (selectedCar) {
        updateInput.disabled = false;
        updateColor.disabled = false;
        updateBtn.disabled = false;
        updateInput.value = selectedCar.name;
        updateColor.value = selectedCar.color;
      }
    } else {
      updateInput.disabled = true;
      updateColor.disabled = true;
      updateBtn.disabled = true;
    }
  }

  public subscribeSelectCar(): void {
    const carsContainer = document.getElementById('main-container__tracks');
    carsContainer?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const selectBtn = event.target as HTMLButtonElement;
      if (selectBtn.id.includes('select-btn')) {
        const selectedId = Number(selectBtn.id.split('-').pop());
        state.setSelectedCar(selectedId);
        this.updatePanelStatus();
      }
    });
  }

  public subscribeUpdateCar(render: () => void): void {
    const updateBtn = document.getElementById('update-btn') as HTMLButtonElement;
    updateBtn?.addEventListener('click', async (event: MouseEvent) => {
      const selectedId = state.getSelectedCar();
      event.preventDefault();
      const updateInput = document.getElementById('update-input') as HTMLInputElement;
      const updateColor = document.getElementById('update-color') as HTMLInputElement;
      if (selectedId) {
        await this.controller.updateCar(
          selectedId,
          { name: updateInput.value, color: updateColor.value }
        );
        render();
      }
    });
  }

  public subscribeDeleteCar(render: () => void): void {
    const carsContainer = document.getElementById('main-container__tracks');
    carsContainer?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const deleteBtn = event.target as HTMLButtonElement;
      if (deleteBtn.id.includes('remove-btn')) {
        const selectedId = Number(deleteBtn.id.split('-').pop());
        await this.controller.deleteCar(selectedId);
        await this.controller.getCars(state.getPage(), CARS_LIMIT_PER_PAGE);
        render();
      }
    });
  }

  public subscribeAddCars(render: () => void): void {
    const addCarsBtn = document.getElementById('addCars-btn');
    addCarsBtn?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const arrayForCars = [];

      for (let i = 0; i < 100; i += 1) {
        arrayForCars.push(generateCars());
      }

      await Promise.all(arrayForCars.map(async (item) => {
        await this.controller.createCar(item);
      }));
      render();
    });
  }

  public async subscribeOnStart() {
    const carsContainer = document.getElementById('main-container__tracks');
    carsContainer?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const driveBtn = event.target as HTMLButtonElement;
      if (driveBtn.id.includes('drive-btn')) {
        const drivenCarId = Number(driveBtn.id.split('-').pop());
        await this.carController.raceCar(drivenCarId);
      }
    });
  }

  public async subscribeOnStop() {
    const carsContainer = document.getElementById('main-container__tracks');
    carsContainer?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const stopBtn = event.target as HTMLButtonElement;
      if (stopBtn.id.includes('back-btn')) {
        const stoppedCarId = Number(stopBtn.id.split('-').pop());
        await this.carController.stopCar(stoppedCarId);
      }
    });
  }

  public async subscribeOnAsyncRace() {
    const raceBtn = document.getElementById('race-btn');
    raceBtn?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const carsIds = state.getCars().map((car) => car.id);
      await this.carController.raceCars(carsIds);
    });
  }

  public async subscribeOnResetRace() {
    const resetBtn = document.getElementById('reset-btn');
    resetBtn?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const carsIds = state.getCars().map((car) => car.id);
      await this.carController.resetCars(carsIds);
    });
  }
}
