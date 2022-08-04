import { AppController } from './appController';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { Footer } from '../components/footer';
import { ViewModel } from '../models/view.model';

export class AppView implements ViewModel {
  public template: string;

  public header;

  public main;

  public footer;

  constructor() {
    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer();
    this.render();
  }

  public async init(): Promise<string> {
    this.template = `
    ${await this.header.render()}
    ${await this.main.render()}
    ${await this.footer.render()}
    `;
    return this.template;
  }

  public async render(): Promise<void> {
    await this.init();
    (document.querySelector('body') as HTMLBodyElement).innerHTML = this.template;
  }
}
