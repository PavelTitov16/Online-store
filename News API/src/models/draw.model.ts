export interface DrawModel<T> {
    draw(data: T[] | []): void;
}