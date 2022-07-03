import './sources.css';
import { ISourceData } from '../../../models/source.models';
import { DrawModel } from '../../../models/draw.model';

class Sources implements DrawModel<ISourceData> {
    draw(data: ISourceData[] | []): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item: ISourceData) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;