export interface CarResponse {
    name: string;
    color: string;
    id: number
}

export interface CarRequest {
    name: string;
    color: string
}

export interface CreateCar {
    name: string;
    color: string
}

export interface UpdateCar {
    name: string;
    color: string
}

export interface ControllerModel {
    carsArray: Array<CarResponse>;

    getCars(): Promise<void>;
    getCar(id: number): Promise<CarResponse>;
    createCar(body: CarRequest): Promise<void>;
    updateCar(id: number, body: CarRequest): Promise<void>;
    deleteCar(id: number): Promise<void>
}