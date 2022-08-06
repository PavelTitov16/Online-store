import { apiProvider } from '../api/apiProvider';
import { CarStatuses, ResponseStatuses } from '../api/statuses';
import { EngineResponse, EngineStatus } from '../models/car.model';
import { Paths } from '../api/paths';
import { Methods } from '../api/methods';
import { state } from './state';
// import { animateCar, stopAnimateCar, resetCar } from './animation';

export class CarController {
  public animateCar(id: number) {
    let animateId: number = id;
    const track = document.getElementById('track') as HTMLDivElement;
    const car = document.getElementById(`car-${id}`) as unknown as SVGSVGElement;
    const chars = state.getCharsByCarId(id);
    const duration = chars.distance / chars.velocity;
    const distance = track.clientWidth - car.clientWidth - 28;
    console.log(track.clientWidth);
    console.log(car.clientWidth);
    const start = performance.now();
    function draw(progress: number): void {
      car.style.transform = `translateX(${progress * distance}px)`;
    }
    const timing = (timeFraction: number) => timeFraction;
    const animate = (time: number): void => {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      const progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        animateId = requestAnimationFrame(animate);
      }
    };
    animateId = requestAnimationFrame(animate);
    console.log(animateId);
  }

  public stopAnimateCar(carId: number) {
    console.log(carId);
    cancelAnimationFrame(carId);
  }

  public resetCar(id: number) {
    const car = document.getElementById(`car-${id}`) as unknown as SVGSVGElement;
    car.style.transform = 'translateX(0px)';
  }

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
    this.stopAnimateCar(id);
    const data: EngineResponse = await response.json();
    state.deleteCarChars(id);
    this.resetCar(id);
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
      console.log(id);
      this.animateCar(id);
      return this.driveCar(id);
    }).then((response: EngineStatus) => {
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
