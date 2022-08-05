import { CarResponse } from './controller.model';
import { EngineResponse } from './car.model';

export interface StateModel {
    cars: Array<CarResponse>;
    carsAmount: number;
    selectedCarId: number | null;
    page: number;
    carsChars: {[id: number]: EngineResponse }
}
