import { EngineResponse } from '../models/car.model';
import { CarResponse } from '../models/controller.model';
import { StateModel } from '../models/state.model';
import { CARS_LIMIT_PER_PAGE } from './consts';

class State {
  public state: StateModel;

  constructor() {
    this.state = this.getEmptyState();
  }

  public getEmptyState(): StateModel {
    return {
      cars: [],
      carsAmount: 0,
      selectedCarId: null,
      page: 1,
      carsChars: {}
    };
  }

  public setCars(cars: CarResponse[]): void {
    this.state = { ...this.state, cars };
  }

  public setCarsAmount(amount: number): void {
    this.state = { ...this.state, carsAmount: amount };
  }

  public setSelectedCar(id: number): void {
    this.state = { ...this.state, selectedCarId: id };
  }

  public setPage(page: number): void {
    this.state = { ...this.state, page };
  }

  public addCar(car: CarResponse): void {
    if (this.state.cars.length < CARS_LIMIT_PER_PAGE) {
      this.state = {
        ...this.state,
        cars: [...this.state.cars, car],
        carsAmount: this.state.carsAmount + 1
      };
    } else {
      this.state = {
        ...this.state,
        carsAmount: this.state.carsAmount + 1
      };
    }
  }

  public updateCar(updatedCar: CarResponse): void {
    this.state = {
      ...this.state,
      cars: this.state.cars.map((car: CarResponse) => {
        return car.id === updatedCar.id ? updatedCar : car;
      })
    };
  }

  public getCars(): CarResponse[] {
    return this.state.cars;
  }

  public getCarsAmount(): number {
    return this.state.carsAmount;
  }

  public getPage(): number {
    return this.state.page;
  }

  public getSelectedCar(): number | null {
    return this.state.selectedCarId;
  }

  public setCarChars(id: number, chars: EngineResponse) {
    this.state.carsChars[id] = chars;
  }

  public deleteCarChars(id: number) {
    delete this.state.carsChars[id];
  }

  public getCharsByCarId(id: number) {
    return this.state.carsChars[id];
  }
}

export const state = new State();
