import { PaginationModel } from '../models/pagination.model';

export class Pagination implements PaginationModel {
  public template: string;

  public async init(): Promise<string> {
    this.template = `
        <div class="main-container__buttons">
            <button class="main-container__button" id="swipeL">
                <img src="./assets/images/swipe-left.svg" alt="swipe left">
            </button>
            <button class="main-container__button" id="leftB">
                <img src="./assets/images/icon-left.svg" alt="arrow left">
            </button>
            <button class="main-container__button" id="rightB">
                <img src="./assets/images/icon-right.svg" alt="arrow right">
            </button>
            <button class="main-container__button" id="swipeR">
                <img src="./assets/images/swipe-right.svg" alt="swipe right">
            </button>
        </div> `;
    return this.template;
  }

  public async render(): Promise<string> {
    await this.init();
    return this.template;
  }
}
