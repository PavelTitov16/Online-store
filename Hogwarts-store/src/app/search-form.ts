import { GoodModel } from '../models/goods.model';
import { SearchFormModel } from '../models/search-form.model';


export class SearchForm implements SearchFormModel {
    public search = document.querySelector('.header-search__bar') as HTMLInputElement;
    public searchBtn = document.querySelector('.header-search__btn') as HTMLButtonElement;
    public searchLink = document.querySelector('#catalogue') as HTMLLinkElement;

    public searchData(data: GoodModel[]): GoodModel[] {
        const input: string = <string>this.search.value.toLowerCase();
        const foundGoods = data.filter((good: GoodModel) => {
            const currName = good.name.trim().toLowerCase();
    
            if (currName.includes(input)) {
                return good;
            }   
        });
        return foundGoods;
    }

    public isSearchDataExist(): boolean {
        const input: string = <string>this.search.value.toLowerCase();
        return Boolean(input);
    }

    public subscribeSearchButton(callback: () => void): void {
        this.searchBtn.addEventListener('click', () => {
            this.searchLink.scrollIntoView();
            callback();
        });
    }

    public subscribeSearchInput(callback: () => void): void {
        this.search.addEventListener('input', () => {
            callback();
        });
    }
    
    public subscribeSearchKeydown(): void {
        this.search.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.searchLink.scrollIntoView();
            }
        });
    }

    public init(callback: () => void): void {
        this.subscribeSearchButton(callback);
        this.subscribeSearchInput(callback);
        this.subscribeSearchKeydown();
    }
}