import { PaginationModel } from '../models/pagination.model';
import { state } from '../app/state';
import { CARS_LIMIT_PER_PAGE } from '../app/consts';
import { AppController } from '../app/appController';

export class Pagination implements PaginationModel {
  public template: string;

  public controller: AppController;

  constructor() {
    this.controller = new AppController();
  }

  public async init(): Promise<string> {
    this.template = `
        <div class="main-container__buttons" id="main-container__buttons">
            <button class="main-container__button ${this.isPrevActive() ? '' : 'inactive'}" id="swipeL">
                <img src="./assets/images/swipe-left.svg" alt="swipe left">
            </button>
            <button class="main-container__button ${this.isPrevActive() ? '' : 'inactive'}" id="leftB">
                <img src="./assets/images/icon-left.svg" alt="arrow left">
            </button>
            <button class="main-container__button ${this.isNextActive() ? '' : 'inactive'}" id="rightB">
                <img src="./assets/images/icon-right.svg" alt="arrow right">
            </button>
            <button class="main-container__button ${this.isNextActive() ? '' : 'inactive'}" id="swipeR">
                <img src="./assets/images/swipe-right.svg" alt="swipe right">
            </button>
        </div> `;
    return this.template;
  }

  public async render(): Promise<string> {
    await this.init();
    return this.template;
  }

  public isNextActive(): boolean {
    const isMorePages = state.getCarsAmount() > CARS_LIMIT_PER_PAGE;
    const isNotLastPage = state.getPage() * CARS_LIMIT_PER_PAGE < state.getCarsAmount();
    console.log(isMorePages);
    console.log(isNotLastPage);
    console.log(state.getCarsAmount());
    return isMorePages && isNotLastPage;
  }

  public isPrevActive(): boolean {
    const isMorePages = state.getCarsAmount() > CARS_LIMIT_PER_PAGE;
    const isNotFirstPage = state.getPage() * CARS_LIMIT_PER_PAGE > CARS_LIMIT_PER_PAGE;
    return isMorePages && isNotFirstPage;
  }

  public async updatePagination(): Promise<void> {
    const paginationBtns = document.getElementById('main-container__buttons') as HTMLDivElement;
    paginationBtns.innerHTML = `
      ${await this.init()}
    `;
  }

  public subscribeOnNext(render: () => void) {
    const nextBtn = document.getElementById('rightB');
    nextBtn?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const currentPage = state.getPage() + 1;
      await this.controller.getCars(currentPage);
      state.setPage(currentPage);
      render();
    });
  }

  public subscribeOnPrev(render: () => void) {
    const prevBtn = document.getElementById('leftB');
    prevBtn?.addEventListener('click', async (event: MouseEvent) => {
      console.log(prevBtn);
      event.preventDefault();
      const currentPage = state.getPage() - 1;
      await this.controller.getCars(currentPage);
      state.setPage(currentPage);
      render();
    });
  }
}
