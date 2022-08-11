import { Good, GoodModel } from '../models/goods.model';
import { RenderModel } from '../models/render.model';


export class Render implements RenderModel {
    
    public renderItems(items: GoodModel[]): void {
        const slider: HTMLDivElement = document.querySelector('.goods-slider') as HTMLDivElement;
        
        items.forEach((item: GoodModel) => {
            const itemElement = `
            <div class="goods-slider__card ${item[Good.InCart] ? 'active' : ''}" id="${item[Good.Id]}" data-h="${item[Good.House]}">
                <section class="front ${item[Good.InCart] ? 'active' : ''}">
                    <img class="goods-slider__image" src="${item[Good.Img]}" alt="${item[Good.Name]}">
                    <p class="goods-name">
                        "${item[Good.Name]}"
                    </p>
                    <div class="goods-slider__buy">
                        <span class="price">"£${item[Good.Price]}"</span>
                        <button class="goods-btn" id="${item[Good.Id]}">Accio</button>
                    </div>
                </section>
                <section class="back ${item[Good.InCart] ? 'active' : ''}">
                    <img class="goods-slider__image" src="${item[Good.Img]}" alt="${item[Good.Name]}">
                    <p class="goods-name">
                        In cart
                    </p>
                    <div class="goods-slider__buy">
                        <span class="price">"£${item[Good.Price]}"</span>
                        <button class="back-btn" id="${item[Good.Id]}">Depulso</button>
                    </div>
                </section>   
            </div>`;
            slider.insertAdjacentHTML('beforeend', itemElement);
        });
    }

    
} 
    