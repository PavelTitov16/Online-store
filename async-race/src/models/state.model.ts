import { CarResponse } from './controller.model';

export interface StateModel {
    cars: Array<CarResponse>;
    carsAmount: number;
    selectedCarId: number | null;
    page: number;
}
