import { GoodsGenerator } from './goods-generator';
import { AppModel } from '../models/app.model';
import { GoodJSONModel, GoodModel } from '../models/goods.model';
import * as goods from '../goods.json';
import { GoodsGeneratorModel } from '../models/goods-generator.model';
import { RenderModel } from '../models/render.model';
import { Render } from './render';
import { State } from './state';
import { Cart } from './cart';

export class App implements AppModel {
    public goodsGenerator: GoodsGeneratorModel;
    public render: RenderModel;
    public state: State;
    public goodsInCart: string[];
    public cart: Cart;
    public goodsList: GoodModel[];

    constructor() {
        this.goodsGenerator = new GoodsGenerator();
        this.render = new Render();
        this.state = new State();
        this.goodsInCart = this.state.getCart();
        
        //this.localStorageService = new LocalStorageService();
        //this.searchForm = new SearchForm();
        //this.sortProducts = new SortProducts();
        this.goodsList = this.goodsGenerator.mapJsonToProducts(<GoodJSONModel[]>goods, this.goodsInCart);
        this.cart = new Cart(this.goodsList);
    }

    public init(): void {
        this.render.renderItems(this.goodsList);
        this.cart.updatePaymentInfo();
        this.cart.subscribeOnUserActions();
    }
}
