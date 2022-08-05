import { Header } from '../components/header';
import { Main } from '../components/main';
import { Footer } from '../components/footer';
import { ViewModel } from '../models/view.model';
import { Pagination } from '../components/pagination';

export class AppView implements ViewModel {
  public template: string;

  public header;

  public main;

  public pagination;

  public footer;

  constructor() {
    this.header = new Header();
    this.main = new Main();
    this.pagination = new Pagination();
    this.footer = new Footer();
    this.render();
  }

  public async init(): Promise<string> {
    this.template = `
    ${await this.header.render()}
    <main class="main-container" id="main-container">
    ${await this.main.render()}
    ${await this.pagination.render()}
    </main>
    ${await this.footer.render()}
    `;
    return this.template;
  }

  public subscribe(): void {
    this.pagination.subscribeOnNext(this.updateMain.bind(this));
    this.pagination.subscribeOnPrev(this.updateMain.bind(this));
    this.pagination.subscribeOnStart(this.updateMain.bind(this));
    this.pagination.subscribeOnEnd(this.updateMain.bind(this));
    this.main.subscribeSelectCar();
    this.main.subscribeUpdateCar(this.updateMain.bind(this));
    this.main.subscribeDeleteCar(this.updateMain.bind(this));
    this.main.subscribeOnStart();
    this.main.subscribeOnStop();
    this.main.subscribeOnAsyncRace();
    this.main.subscribeOnResetRace();
  }

  public async updateMain(): Promise<void> {
    await this.main.updateTrack();
    await this.pagination.updatePagination();
    this.subscribe();
  }

  public async render(): Promise<void> {
    await this.init();
    (document.querySelector('body') as HTMLBodyElement).innerHTML = this.template;
    this.subscribe();
    this.main.subscribeCreateCar(this.updateMain.bind(this));
    this.main.subscribeAddCars(this.updateMain.bind(this));
    this.main.updatePanelStatus();
  }
}
