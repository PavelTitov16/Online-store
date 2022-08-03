export interface CarResponse {
    name: string;
    color: string;
    id: number
}

export interface CreateCar {
    name: string;
    color: string
}

export interface UpdateCar {
    name: string;
    color: string
}

export interface GarageController {
    carsArray: Array<CarResponse>;

    getCars(): Promise<void>;
    getCar(id: number): CarResponse;
    createCar(): Promise<void>;
    updateCar(id: number): Promise<void>;
    deleteCar(id: number): Promise<void>;
}