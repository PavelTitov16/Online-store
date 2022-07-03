import './sources.css';
import { ISourceData } from '../../../models/source.models';
import { DrawModel } from '../../../models/draw.model';

class Sources implements DrawModel<ISourceData> {
    draw(data: ISourceData[] | []): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: ISourceData) => {
            const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLSpanElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLDivElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as HTMLDivElement).append(fragment);
    }
}

export default Sources;