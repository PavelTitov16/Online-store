class LocalStorage {
    public sortKey = 'sortKey';
    public filtersKey = 'filtersKey';
    public cartKey = 'cartKey';

    public setFilters(filters: {key: string; values: string | Array<string>}) {
        const currentFilters = localStorage.getItem(this.filtersKey);

        if (currentFilters) {
            const parsedCurrentFIlters = JSON.parse(currentFilters);
            const filtersValue = JSON.stringify({...parsedCurrentFIlters, [filters.key]: filters.values});
            localStorage.setItem(this.filtersKey, filtersValue);
        } else {
            localStorage.setItem(this.filtersKey, JSON.stringify({[filters.key]: filters.values}));
        }
    }

    public setSort(sorters: {key: string; values: string}) {
        const currentSorters = localStorage.getItem(this.sortKey);
        if (currentSorters) {
            const parsedCurrentSorters = JSON.parse(currentSorters);
            const sortValue = JSON.stringify({...parsedCurrentSorters, sorters});
            localStorage.setItem(this.sortKey, sortValue);
        } else {
            localStorage.setItem(this.sortKey, JSON.stringify(sorters));
        }
    }

    public getFilters() {
        const filters = localStorage.getItem(this.filtersKey);
        return filters ? JSON.parse(filters) : {};
    }

    public getSorters() {
        const sorters = localStorage.getItem(this.sortKey);
        return sorters ? JSON.parse(sorters) : {};
    }

/* public updateCart() {

    }*/
}

export const localStorageService = new LocalStorage();