import { apiProvider } from '../api/apiProvider';
import { CarStatuses, ResponseStatuses } from '../api/statuses';
import { EngineResponse, EngineStatus } from '../models/car.model';
import { Paths } from '../api/paths';
import { Methods } from '../api/methods';
import { state } from './state';

export class CarController {
  public async startCar(id: number): Promise<EngineResponse> {
    const response = await fetch(`${apiProvider}${Paths.Engine}?id=${id}&status=${CarStatuses.Started}`, {
      method: Methods.Patch
    });
    const data: EngineResponse = await response.json();
    return data;
  }

  public async stopCar(id: number): Promise<EngineResponse> {
    const response = await fetch(`${apiProvider}${Paths.Engine}?id=${id}&status=${CarStatuses.Stopped}`, {
      method: Methods.Patch
    });
    const data: EngineResponse = await response.json();
    state.deleteCarChars(id);
    return data;
  }

  public async driveCar(id: number): Promise<EngineStatus> {
    const response = await fetch(`${apiProvider}${Paths.Engine}?id=${id}&status=${CarStatuses.Drive}`, {
      method: Methods.Patch
    });
    const data = await response.json();

    return data;
  }

  public async raceCar(id: number): Promise<EngineStatus> {
    return this.startCar(id).then(async (response: EngineResponse) => {
      state.setCarChars(id, response);
      return this.driveCar(id);
    }).then((response: EngineStatus) => {
      console.log(response, 'drive');
      return response;
    });
  }

  public async raceCars(ids: number[]): Promise<EngineStatus> {
    return Promise.any(ids.map((id) => this.raceCar(id))).then((response: EngineStatus) => {
      console.log(response, 'race');
      return response;
    });
  }

  public async resetCars(ids: number[]): Promise<EngineResponse[]> {
    return Promise.all(ids.map((id) => this.stopCar(id)));
  }
}
