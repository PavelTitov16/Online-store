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
    await this.view.render();
    this.player = new Player();
    this.player.init();
  }
}

export default App;
