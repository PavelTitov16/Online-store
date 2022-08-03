export interface EngineResponse {
    velocity: number;
    distance: number;
}

export interface SwitchEngine {
    success: boolean;
}

export interface GetWinners {
    id: number;
    wins: number;
    time: number
}

export interface CreateWinner {
    id: number,
    wins: number,
    time: number
}

export interface UpdateWinner {
    wins: number,
    time: number
}