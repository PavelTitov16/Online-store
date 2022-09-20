export interface FiltersModel {
    selectHouse(value: string): void;
    subscribeHouseFilters(callback: () => void): void;
    addCategory(value: string): void;
    deleteCategory(value: string): void;
    subscribeCategories(callback: () => void): void;
    resetFilters(callback: () => void): void;
    resetLocalStorage(): void;
}
