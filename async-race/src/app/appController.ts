import { apiProvider } from '../api/apiProvider';
import { Paths } from '../api/paths';
import { CarResponse, ControllerModel, CarRequest } from '../models/controller.model';
import { Methods } from '../api/methods';

export class AppController implements ControllerModel {
    public carsArray: Array<CarResponse> = [];

    public async getCars(): Promise<void> {
      const response = await fetch(`${apiProvider}${Paths.Garage}`, {
        method: Methods.Get,
      });

      const data = await response.json();
      this.carsArray = data;
    }

    public async getCar(id: number): Promise<CarResponse> {
      const response = await fetch(`${apiProvider}${Paths.Garage}/${id}`);
      const data = await response.json();
      return data;
    }

    public async createCar(body: CarRequest): Promise<void> {
      const response = await fetch(`${apiProvider}${Paths.Garage}`, {
        method: Methods.Post,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      this.carsArray.push(data);
    }

    public async updateCar(id: number, body: CarRequest): Promise<void> {
      const response = await fetch(`${apiProvider}${Paths.Garage}/${id}`, {
        method: Methods.Put,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      this.carsArray = this.carsArray.map((car) => (car.id === data.id) ? (car = data) : car)
    }

    public async deleteCar(id: number): Promise<void> {
      const response = await fetch(`${apiProvider}${Paths.Garage}/${id}`, {
        method: Methods.Delete,
      });
      const data = await response.json();
      this.carsArray = this.carsArray.filter((car) => car.id !== data.id);
    }

    public getCarsArray(): Array<CarResponse> {
      return this.carsArray;
    }

    public clearList(): void {
      this.carsArray = [];
    }
} 