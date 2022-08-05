import { CarStatuses, ResponseStatuses } from '../api/statuses';

export class CarController {
    public async startCar() {
        
    }

    public async getCars(page = 1, limit = 7): Promise<void> {
        const response = await fetch(`${apiProvider}${Paths.Garage}?` + new URLSearchParams({
          _page: page.toString(),
          _limit: limit.toString()
        }), {
          method: Methods.Get
        });
        if (response.status === ResponseStatuses.Ok) {
          const data: CarResponse[] = await response.json();
          state.setCars(data);
          state.setCarsAmount(Number(response.headers.get('X-Total-Count')));
        }
      }
}