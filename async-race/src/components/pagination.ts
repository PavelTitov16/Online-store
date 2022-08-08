import { PaginationModel } from '../models/pagination.model';
import { state } from '../app/state';
import { CARS_LIMIT_PER_PAGE } from '../app/consts';
import { AppController } from '../app/appController';
import { CarController } from '../app/carController';

export class Pagination implements PaginationModel {
  public template: string;

  public controller: AppController;

  public carController: CarController;

  constructor() {
    this.controller = new AppController();
    this.carController = new CarController();
  }

  public async init(): Promise<string> {
    this.template = `
        <div class="main-container__buttons" id="main-container__buttons">
            <button class="pag-btn main-container__button ${this.isPrevActive() ? '' : 'inactive'}" id="swipeL">
                <img src="./assets/images/swipe-left.svg" alt="swipe left">
            </button>
            <button class="pag-btn main-container__button ${this.isPrevActive() ? '' : 'inactive'}" id="leftB">
                <img src="./assets/images/icon-left.svg" alt="arrow left">
            </button>
            <button class="main-container__button inactive" id="page-holder">
              ${await state.getPage()}
            </button>
            <button class="pag-btn main-container__button ${this.isNextActive() ? '' : 'inactive'}" id="rightB">
                <img src="./assets/images/icon-right.svg" alt="arrow right">
            </button>
            <button class="pag-btn main-container__button ${this.isNextActive() ? '' : 'inactive'}" id="swipeR">
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
    let currentPage = state.getPage();
    const carsPerPage = 7;
    const carsAmount: number = state.getCarsAmount();
    const pageLimit = Math.ceil(carsAmount / carsPerPage);
    nextBtn?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      if (currentPage < pageLimit) {
        const animateCarIds = state.getAnimateCarIds();
        if (Object.keys(animateCarIds).length !== 0) {
          this.carController.cancelAllCarsAnimation();
          state.pauseAnimationPage();
          this.carController.resetCars(Object.keys(animateCarIds).map((id) => Number(id)));
        }
        currentPage += 1;
        await this.controller.getCars(currentPage);
        state.setPage(currentPage);
        render();
        // TODO: implement animation state
        if (state.isAnimationOnPagePaused()) {
          state.startAnimationPage();
          this.carController.runAllCarsAnimation();
        }
      }
    });
  }

  public subscribeOnPrev(render: () => void) {
    const prevBtn = document.getElementById('leftB');
    prevBtn?.addEventListener('click', async (event: MouseEvent) => {
      let currentPage = state.getPage();
      event.preventDefault();
      if (currentPage > 1) {
        const animateCarIds = state.getAnimateCarIds();
        if (Object.keys(animateCarIds).length !== 0) {
          this.carController.cancelAllCarsAnimation();
          state.pauseAnimationPage();
          this.carController.resetCars(Object.keys(animateCarIds).map((id) => Number(id)));
        }
        currentPage = state.getPage() - 1;
        await this.controller.getCars(currentPage);
        state.setPage(currentPage);
        render();
        // TODO: implement animation state
        if (state.isAnimationOnPagePaused()) {
          state.startAnimationPage();
          this.carController.runAllCarsAnimation();
        }
      }
    });
  }

  public subscribeOnStart(render: () => void) {
    const swipeToStartBtn = document.getElementById('swipeL');
    swipeToStartBtn?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      const currentPage = 1;
      await this.controller.getCars(currentPage);
      state.setPage(currentPage);
      render();
    });
  }

  public subscribeOnEnd(render: () => void) {
    const swipeToEndBtn = document.getElementById('swipeR');
    const carsPerPage = 7;
    const carsAmount: number = state.getCarsAmount();
    const currentPage = Math.ceil(carsAmount / carsPerPage);
    swipeToEndBtn?.addEventListener('click', async (event: MouseEvent) => {
      event.preventDefault();
      await this.controller.getCars(currentPage);
      state.setPage(currentPage);
      render();
    });
  }
}
