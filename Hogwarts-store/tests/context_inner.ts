export const noContext = `<header class="header-wrapper">
<div class="header-container">
    <div class="header-side left">
        <div class="audio-payer">
            <audio class="audio" id="audio"></audio>
            <div class="controls">
                <div id="prev" class="audio-payer__btn prev"></div>
                <div class="audio-payer__btn play"></div>
                <div id="next" class="audio-payer__btn next"></div>
            </div>
            <progress class="progress-bar" id="progress-bar" value="0" max="1"></progress>
            <div id="mute" class="audio-payer__btn mute"></div>
        </div>
        <hr class="header-line left-line">
        <ul class="header-nav__list">
            <li class="header-nav__item"><a class="header-nav__link" href="#summary">
                    About shop</a>
            </li>
            <li class="header-nav__item"><a class="header-nav__link" href="#faculty">
                    Collections</a>
            </li>
            <li class="header-nav__item"><a class="header-nav__link" href="#catalogue">
                    Catalogue</a>
            </li>
            <li class="header-nav__item"><a class="header-nav__link" href="#contacts">
                    Privacy policy</a>
            </li>
        </ul>
    </div>
    <div class="header-logo logo"></div>
    <div class="header-side right">
        <div class="header-right__items">
            <q class="header-cite">After all this time? Always...</q>
            <div class="header-chest">
                <div class="header-chest__image"></div>
                <div class="header-chest__text">
                    <span id="goods-counter">0 items</span>
                    <span id="money-counter">0£ to pay</span>
                </div>
            </div>
            <div class="header-menu">
                <div class="header-menu__bar"></div>
                <div class="header-menu__bar"></div>
                <div class="header-menu__bar"></div>
            </div>
            <div class="shadow-box"></div>
        </div>
        <hr class="header-line right-line">
        <div class="header-search">
            <input id="search-form" type="search" class="header-search__bar" placeholder="Type your wish here"
                name="finder" autocomplete="off" autofocus>
            <button id="search-btn" class="header-search__btn button">Revelio</button>
        </div>
    </div>
</div>
</header>
<section class="about-wrapper" id="summary">
<div class="about-container">
    <div class="about-block">
        <div class="about-text">
            <h1 class="about-block__title">
                Hogwarts Shop
            </h1>
            <p class="about-block__text">
                Explore a selection of best-loved Harry Potter products, including bespoke collectables, 
                unique wands, souvenirs, delicious confectionery, fan-favourites and more, perfect for gifting 
                any witch or wizard to add to their collection
            </p>
        </div>
        <div class="shop-items"></div>
    </div>
</div>
</section>
<div class="faculty-wrapper">
<div class="faculty-container">
    <h1 class="about-block__title faculty-title" id="faculty">
        Chose your Hogwarts house
    </h1>
    <div class="faculty-container__items">
        <a class="faculty-card__link" href="#catalogue"><div class="faculty-card huffle" data-h="hufflepuff"></div></a>
        <a class="faculty-card__link" href="#catalogue"><div class="faculty-card leo" data-h="gryffindor"></div></a>
        <a class="faculty-card__link" href="#catalogue"><div class="faculty-card snake" data-h="slytherin"></div></a>
        <a class="faculty-card__link" href="#catalogue"><div class="faculty-card raven" data-h="ravenclaw"></div></a>
    </div>
</div>
</div>
<main class="main-container" id="catalogue">
<section class="main-filtres">
    <h2 class="goods-name">Use to sort ↓</h2>
    <hr class="left-line">
    <div class="filtres-block" id="filters">
        <div class="filtres-faculty">
            <h3 class="filtres-title">Hogwarts houses</h3>
            <div class="filters-btns">
                <div class="filter-btn">
                    <input class="house-btn" type="radio" id="all_houses" name="house" data-h="all" checked>
                    <label for="all_houses">All houses</label>
                </div>
                <div class="filter-btn">
                    <input class="house-btn" type="radio" id="faculty__gryf" name="house" data-h="gryffindor">
                    <label for="faculty__gryf">Gryffindor</label>
                </div>
                <div class="filter-btn">
                    <input class="house-btn" type="radio" id="faculty__slyth" name="house" data-h="slytherin">
                    <label for="faculty__slyth">Slytherin</label>
                </div>
                <div class="filter-btn">
                    <input class="house-btn" type="radio" id="faculty__huffl" name="house" data-h="hufflepuff">
                    <label for="faculty__huffl">Hufflepuff</label>
                </div>
                <div class="filter-btn">
                    <input class="house-btn" type="radio" id="faculty__raven" name="house" data-h="ravenclaw">
                    <label for="faculty__raven">Ravenclaw</label>
                </div>
            </div>
        </div>
        <hr class="left-line">
        <div class="filtres-categories">
            <h3 class="filtres-title">Category</h3>
            <div class="filter-btn"><label><input type="checkbox" name="category" value="Clothes" id="Clothes">  Clothes</label></div>
            <div class="filter-btn"><label><input type="checkbox" name="category" value="Books" id="Books">  Books</label></div>
            <div class="filter-btn"><label><input type="checkbox" name="category" value="Wands" id="Wands">  Wands</label></div>
            <div class="filter-btn"><label><input type="checkbox" name="category" value="Quidditch" id="Quidditch">  Quidditch</label></div>
            <div class="filter-btn"><label><input type="checkbox" name="category" value="Sweets" id="Sweets">  Sweets And Treats</label></div>
            <div class="filter-btn"><label><input type="checkbox" name="category" value="Travel" id="Travel">  Travel</label></div>
            <div class="filter-btn"><label><input type="checkbox" name="category" value="Toys" id="Toys">  Soft Toys</label></div>
            <div class="filter-btn"><label><input type="checkbox" name="category" value="Souvenirs" id="Souvenirs">  Souvenirs</label></div>
        </div>
        <hr class="left-line">
        <div class="filtres-faculty">
            <h3 class="filtres-title">Sorting</h3>
            <div class="sorting-btns">
                <div class="filter-btn">
                    <input type="radio" id="price_up" name="sort" value="price_up" data-sort="price_up">
                    <label for="price_up">Price ↑</label>
                </div>
                <div class="filter-btn">
                    <input type="radio" id="price_down" name="sort" value="price_down" data-sort="price_down" checked>
                    <label for="price_down">Price ↓</label>
                </div>
                <div class="filter-btn">
                    <input type="radio" id="cart" name="sort" value="cart" data-sort="cart">
                    <label for="cart">Goods to buy</label>
                </div>
                <div class="filter-btn">
                    <input type="radio" id="name_up" name="sort" value="name_up" data-sort="name_up">
                    <label for="name_up">By name, A-Z</label>
                </div>
                <div class="filter-btn">
                    <input type="radio" id="name_down" name="sort" value="name_down" data-sort="name_down">
                    <label for="name_down">By name, Z-A</label>
                </div>
            </div>
        </div>
        <hr class="left-line">
        <h3 class="filtres-title">To dispel categories say</h3>
        <button class="reset-category__btn footer__btn button">Finite</button>
        <hr class="left-line">
        <h3 class="filtres-title">To forget all settings say</h3>
        <button class="reset-btn footer__btn button">Obliviate</button>
    </div>
</section>
<section class="main-goods">
    <div class="goods-block">
        <h3 class="goods-block__title">
            Get closer to the Magic
        </h3>
        <div class="goods-slider">
            
        </div>
</section>
</main>
<div class="hero-wrapper"></div>
<footer class="footer-wrapper" id="contacts">
<div class="footer-container">
    <div class="footer-side left">
        <p class="footer-text">All rights are reserved for JK Rowling and Warner Bros. ©</p>
        <hr class="header-line left-line">
        <div class="footer-git">
            <a href="https://github.com/PavelTitov16" class="github-link"></a>
            <a href="#" class="footer__btn button">Spongify ↑</a>
        </div>
    </div>
    <div class="footer-logo logo"></div>
    <div class="footer-side right">
        <p class="footer-text rights">All materials are used just for educational purposes</p>
        <hr class="header-line right-line">
        <div class="footer-rss">
            <p class="footer-text">The Rolling Scopes School, 2022</p>
            <a href="https://rs.school/js/" class="rss"></a>
        </div>
    </div>
</div>
</footer>`;