import { State } from './state';
import { FiltersState, SortState } from '../models/state.model';
import { Good } from '../models/goods.model';
import { keys } from '../models/render.model';
import { UpdatePageStatusModel } from '../models/updatePageStatus.model';


export class UpdatePageStatus implements UpdatePageStatusModel {
    public state: State;
    public houseFilters = document.querySelector('.filters-btns') as HTMLDivElement;
    public filtersContainer = document.querySelector('.filtres-categories') as HTMLDivElement;
    public sortFilters = document.querySelector('.sorting-btns') as HTMLDivElement;
    public filtersActive: FiltersState; 
    public sortersActive: SortState;
    public goodsInCart: string[]; 

    constructor() {
        this.state = new State();
        this.filtersActive = this.state.getFilters();
        this.sortersActive =  this.state.getSorters();
        this.goodsInCart = this.state.getCart();
    }

    public updateFiltersStatus(): void {
        if (this.filtersActive[Good.House]) {
            const activeHouse: string | string[] = this.filtersActive[Good.House];
            const houseInputs = Array.from(this.houseFilters.querySelectorAll('input')) as HTMLInputElement[];
            houseInputs.forEach(input => {
                if (input.dataset[keys.House] === activeHouse) {
                    input.checked = true;
                }
            });
        }
    }

    public updateSorterStatus(): void {
        const sortInputs = Array.from(this.sortFilters.querySelectorAll('input')) as HTMLInputElement[];
        sortInputs.forEach(input => {
            if (input.dataset[keys.Sort] === this.sortersActive.sort) {
                input.checked = true;
            }
        });
    }

    public updateCategoriesStatus(): void {
        if (this.filtersActive[Good.Categories]) {
            const activeCategory: string | string[] = this.filtersActive[Good.Categories];
            const categoryInputs = Array.from(this.filtersContainer.querySelectorAll('input')) as HTMLInputElement[];
    
            categoryInputs.forEach(input => {
                if (activeCategory.includes(input.id)) {
                    input.checked = true;
                }
            });
        }
    }

    public updateCartStatus(): void {
        const goodsToCheck = Array.from(document.querySelectorAll('.goods-slider__card')) as HTMLDivElement[];
        goodsToCheck.forEach(good => {
    
            for (let i = 0; i < this.goodsInCart.length; i++) {
    
                if (good.id === this.goodsInCart[i]) {
                    (<HTMLDivElement>good).classList.add('active');
                    (<HTMLElement>good.firstElementChild).classList.add('active');
                    (<HTMLElement>good.lastElementChild).classList.add('active');
                }
            } 
        });
    }

    public init(): void {
        this.updateFiltersStatus();
        this.updateSorterStatus();
        this.updateCategoriesStatus();
        this.updateCartStatus();
    }
}

