import { AppModel } from '../models/app.model';
import { AppController } from './appController';
import { AppView } from './appView';
import { Player } from '../components/player';

class App implements AppModel {
  public view: AppView;

  public player: Player;

  private controller: AppController;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  async start(): Promise<void> {
    await this.controller.getCars();
    await this.view.renderHeader();
    await this.view.render();
    await this.view.routing();
    this.player = new Player();
    this.player.init();
  }
}

export default App;
