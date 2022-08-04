import { TableModel } from '../models/table.model';

export class WinnersTable implements TableModel {
  public template: string;

  public async init(): Promise<string> {
    this.template = `
        <div class="winners-page">
            <table>
                <caption><b>Winners</b></caption>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Car</th>
                        <th>Car model</th>
                        <th>Wins</th>
                        <th>Best time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <div class="car"></div>
                        </td>
                        <td>Nissan</td>
                        <td>1</td>
                        <td>10.3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <div class="car"></div>
                        </td>
                        <td>Dodge</td>
                        <td>2</td>
                        <td>9.3</td>
                    </tr>
                </tbody>
            </table>
        </div>`;
    return this.template;
  }

  public async render(): Promise<string> {
    await this.init();
    return this.template;
  }
}
