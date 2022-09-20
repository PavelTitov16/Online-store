import { GoodsGenerator } from './goods-generator';
import { AppModel } from '../models/app.model';
import { GoodJSONModel, GoodModel, Good, Houses } from '../models/goods.model';
import * as goods from '../goods.json';
import { GoodsGeneratorModel } from '../models/goods-generator.model';
import { RenderModel } from '../models/render.model';
import { Render } from './render';
import { State } from './state';
import { Cart } from './cart';
import { Filters } from './filters';
import { UpdatePageStatus } from './updatePageStatus';
import { Sorting } from './sorting';
import { SearchForm } from './search-form';
import { Player } from './player';
import { FiltersState, SortState } from '../models/state.model';


export const slider = document.querySelector('.goods-slider') as HTMLDivElement;

export class App implements AppModel {
    public goodsGenerator: GoodsGeneratorModel;
    public render: RenderModel;
    public state: State;
    public goodsInCart: string[];
    public cart: Cart;
    public goodsList: GoodModel[];
    public filters: Filters;
    public updatePageStatus: UpdatePageStatus;
    public sorting: Sorting;
    public searchForm: SearchForm;
    public player: Player;
    public generateNumber = 300;

    constructor() {
        this.goodsGenerator = new GoodsGenerator();
        this.render = new Render();
        this.state = new State();
        this.goodsInCart = this.state.getCart();
        this.filters = new Filters();
        this.updatePageStatus = new UpdatePageStatus();
        this.sorting = new Sorting();
        this.player = new Player();
        this.searchForm = new SearchForm();
        this.goodsList = this.goodsGenerator.mapJsonToProducts(<GoodJSONModel[]>goods, this.goodsInCart);
        this.cart = new Cart(this.goodsList);
    }

    public init(): void {
        this.parseGoodsList();
        this.cart.updatePaymentInfo();
        this.cart.subscribeOnUserActions();
        this.filters.subscribeHouseFilters(this.animateFilters.bind(this));
        this.filters.subscribeCategories(this.animateFilters.bind(this));
        this.updatePageStatus.init();
        this.sorting.subscribeOnSort(this.animateFilters.bind(this));
        this.filters.resetFilters(this.animateFilters.bind(this));
        this.filters.resetLocalStorage();
        this.player.init();
        this.searchForm.init(this.parseGoodsList.bind(this));
    }

    public parseGoodsList(): void {
        const filters: FiltersState = this.state.getFilters();
        const sortValue: SortState = this.state.getSorters();
        const filtersKeys: string[] = Object.keys(filters);
        let updatedGoods: GoodModel[] = [...this.goodsGenerator.mapJsonToProducts(<GoodJSONModel[]>goods, this.state.getCart())];
        
        if (this.searchForm.isSearchDataExist()) {
            updatedGoods = this.searchForm.searchData(updatedGoods);
        }

        if (filtersKeys) {
            if (filtersKeys.includes(Good.House) ) {
                if (filters[Good.House] !== Houses.All) {
                    updatedGoods = updatedGoods.filter(good => {
                        return good.house === filters[Good.House];
                    });
                } 
            }
            if (filtersKeys.includes(Good.Categories) ) {
                if (filters[Good.Categories].length !== 0) {
                    updatedGoods = updatedGoods.filter(filteredGood => {
                        if (Array.isArray(filteredGood.categories) ) {
                            return filteredGood.categories.some(item => filters[Good.Categories].includes(item) );
                        } else {
                            return filters[Good.Categories].includes(filteredGood.categories);
                        } 
                    });
                }
            }
        }
        if (sortValue.sort) {
            updatedGoods = this.sorting.sortGoods(sortValue.sort, updatedGoods);
        } else {
            updatedGoods = this.sorting.sortGoods('default', updatedGoods);
        }
        deleteGoods();
        this.render.renderItems(updatedGoods);
    }

    public animateFilters(): void {
        slider.classList.add('filter');
        setTimeout(this.parseGoodsList.bind(this), this.generateNumber);
        slider.addEventListener('animationend', () => {
            slider.classList.remove('filter');
        });
    }
}

export function deleteGoods(): void {
    slider.innerHTML = '';
}