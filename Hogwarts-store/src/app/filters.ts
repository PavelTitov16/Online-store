import { State } from './state';
import { Good } from '../models/goods.model';
import { keys } from '../models/render.model';
import { FiltersModel } from '../models/filters.model';


export class Filters implements FiltersModel {
    public housesContainer = document.querySelector('.faculty-container__items') as HTMLDivElement;
    public filtersContainer = document.querySelector('.filtres-categories') as HTMLDivElement;
    public houseFilters = document.querySelector('.filters-btns') as HTMLDivElement;
    public resetFiltersBtn = document.querySelector('.reset-category__btn') as HTMLButtonElement;
    public resetLocalBtn = document.querySelector('.reset-btn') as HTMLButtonElement;
    public filterAllHouses = 'all';
    public state: State;

    constructor() {
        this.state = new State();
    }

    public selectHouse(value: string): void {
        const houseBtns = Array.from(document.querySelectorAll('.house-btn')) as HTMLInputElement[];
        houseBtns.forEach(btn => {
            if (btn.dataset[keys.House] === value) {
                btn.checked = true;
            } 
        });
    } 

    public subscribeHouseFilters(callback: () => void): void {
        this.housesContainer.addEventListener('click', (event: MouseEvent) => {
            const selectedHouseElement = event.target as HTMLDivElement;
            const selectedHouse = selectedHouseElement.dataset[keys.House] as string;
            this.state.setFilters({key: Good.House, values: selectedHouse} );
            this.selectHouse(selectedHouse);
            callback();
        });

        this.houseFilters.addEventListener('click', (event: MouseEvent) => {
            const selectedHouseElement = event.target as HTMLInputElement;
            if (selectedHouseElement.tagName === 'INPUT') {
                const selectedHouse = selectedHouseElement.dataset[keys.House] as string;
                this.state.setFilters({key: Good.House, values: selectedHouse} );
                callback();
            }
        });
    }

    public addCategory(value: string): void {
        const activeCategories = this.state.getFilters()[Good.Categories] as string[];

        if (!activeCategories) {
            this.state.setFilters( {key: Good.Categories, values: [value] } );
        } else {
            this.state.setFilters( {key: Good.Categories, values: [...activeCategories, value] } );
        }
    }

    public deleteCategory(value: string): void {
        const activeCategories = this.state.getFilters()[Good.Categories] as string[];
        const newCategories = activeCategories.filter((category: string) => category !== value);
    
        this.state.setFilters( {key: Good.Categories, values: newCategories } );
    }

    public subscribeCategories(callback: () => void): void {
        this.filtersContainer.addEventListener('click', (event: MouseEvent) => {
            const selectedItem = event.target as HTMLInputElement;
        
            if (selectedItem.tagName === 'INPUT') {
                if (selectedItem.checked) {
                    this.addCategory(selectedItem.value);
                } else this.deleteCategory(selectedItem.value);
            }
            callback();
        });
    }

    public resetFilters(callback: () => void): void {
        this.resetFiltersBtn.addEventListener('click', () => {
            const activeCategories = this.state.getFilters()[Good.Categories];
            const categoryInputs = Array.from(this.filtersContainer.querySelectorAll('input'));
           
            categoryInputs.forEach(input => {
                if (activeCategories.includes(input.id)) {
                    input.checked = false;
                    this.deleteCategory(input.id);
                }
            });
            this.selectHouse(this.filterAllHouses);
            this.state.setFilters({key: Good.House, values: this.filterAllHouses} );
            callback();
        });
    }

    public resetLocalStorage(): void {
        this.resetLocalBtn.addEventListener('click', () => {
            localStorage.clear();
            location.reload();
        });
    }
}
