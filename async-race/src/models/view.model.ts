export interface ViewModel {
    init(): Promise<string>;
    render(): Promise<void>;
}

