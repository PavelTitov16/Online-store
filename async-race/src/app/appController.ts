import { apiProvider } from '../api/apiProvider';
import { Paths } from '../api/paths';
import { GarageController, CarResponse } from '../models/garage.model';

class AppController implements GarageController {
    public carsArray: Array<CarResponse> = [];

    public async getCars(): Promise<void> {
      const response = await fetch(`${apiProvider}${Paths.Garage}`, {
        method: 'GET',
      });

      const data = await response.json();
      this.carsArray = data;
    }

    public async getCar(id: number): Promise<CarResponse> {
      const response = await fetch(`${apiProvider}${Paths.Garage}/${id}`);
      const data = await response.json();
      return data;
    }

    public async createCar(): Promise<void> {
      const response = await fetch(`${apiProvider}${Paths.Garage}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const data = await response.json();
      this.carsArray.push(data);
    }

    public async updateCar(id: number): Promise<void> {
      const response = await fetch(`${apiProvider}${Paths.Garage}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const data = await response.json();
      this.carsArray = this.carsArray.map((car) => (car.id === data.id) ? (car = data) : car)
    }

    public async deleteCar(id: number): Promise<void> {
      const response = await fetch(`${apiProvider}${Paths.Garage}/${id}`, {
        method: 'DELETE',
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

export const garage = new AppController();


          