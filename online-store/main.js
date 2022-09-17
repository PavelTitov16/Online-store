(()=>{"use strict";var e,t,i={},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return i[e](o,o.exports,s),o.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(i,r){if(1&r&&(i=this(i)),8&r)return i;if("object"==typeof i&&i){if(4&r&&i.__esModule)return i;if(16&r&&"function"==typeof i.then)return i}var o=Object.create(null);s.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var n=2&r&&i;"object"==typeof n&&!~e.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((e=>a[e]=()=>i[e]));return a.default=()=>i,s.d(o,a),o},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="",s.p;var o=function(){function e(){}return e.prototype.mapJsonToProducts=function(e,t){return Array.from(e).map((function(e){var i;return(i={}).name=e.name,i.img=e.img,i.house=e.house,i.categories=e.categories,i.price=e.price,i.id=e.id,i.isFavourite=!1,i.inCart=t.includes(e.id),i}))},e}();const a=JSON.parse('[{"name":"Gryffindor Logo Backpack","img":"./images/gryf_bag.png","house":"gryffindor","categories":["Clothes","Travel"],"price":"36","id":"1"},{"name":"Gryffindor Quidditch Bear","img":"./images/gryf_bear.png","house":"gryffindor","categories":["Quidditch","Toys","Souvenirs"],"price":"36","id":"2"},{"name":"Gryffindor Robe","img":"./images/gryf_coat.png","house":"gryffindor","categories":["Clothes","Souvenirs"],"price":"75","id":"3"},{"name":"Gryffindor Gift Trunk","img":"./images/gryf_gift_set.png","house":"gryffindor","categories":["Clothes","Books","Wands","Sweets","Travel","Toys","Souvenirs"],"price":"175","id":"4"},{"name":"The Sword of Gryffindor Wand","img":"./images/gryf_wand.png","house":"gryffindor","categories":["Wands","Souvenirs"],"price":"33","id":"5"},{"name":"Personalised Gryffindor Triwizard Shirt","img":"./images/gryf_shirt_quid.png","house":"gryffindor","categories":["Clothes","Quidditch","Souvenirs"],"price":"36","id":"6"},{"name":"Personalised Gryffindor House Seeker T-Shirt","img":"./images/gryf_quid_shirt.png","house":"gryffindor","categories":["Clothes","Quidditch","Souvenirs"],"price":"36","id":"7"},{"name":"Gryffindor Mini Gift Trunk","img":"./images/gryf_set.png","house":"gryffindor","categories":["Clothes","Quidditch","Souvenirs","Travel"],"price":"75","id":"8"},{"name":"The Gryffindor Mascot Wand","img":"./images/gryf_wand_1.png","house":"gryffindor","categories":["Wands","Souvenirs"],"price":"33","id":"9"},{"name":"Gryffindor Hooded Sweatshirt","img":"./images/gryf_hoodie.png","house":"gryffindor","categories":["Clothes","Travel"],"price":"40","id":"10"},{"name":"Gryffindor Fleece Hoodie","img":"./images/gryf_hoodie_1.png","house":"gryffindor","categories":["Clothes","Travel"],"price":"50","id":"11"},{"name":"Gryffindor Quidditch Jumper","img":"./images/gryf_quid.png","house":"gryffindor","categories":["Clothes","Quidditch"],"price":"45","id":"12"},{"name":"Gryffindor Quidditch Knitted Adult Jumper","img":"./images/gryf_quid_short.png","house":"gryffindor","categories":["Clothes","Quidditch"],"price":"75","id":"13"},{"name":"Gryffindor Knitted Crest Scarf","img":"./images/gryf_scarf.png","house":"gryffindor","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"18","id":"14"},{"name":"Gryffindor Sock Set (3 Pack)","img":"./images/gryf_socks.png","house":"gryffindor","categories":["Clothes","Souvenirs","Travel"],"price":"12","id":"15"},{"name":"Gryffindor T-Shirt","img":"./images/gryf_shirt.png","house":"gryffindor","categories":["Clothes","Travel"],"price":"19","id":"16"},{"name":"Gryffindor Milk Chocolate Bar","img":"./images/gryf_choco.png","house":"gryffindor","categories":["Sweets","Souvenirs"],"price":"5","id":"17"},{"name":"Gryffindor Knitted Mitten Capped Gloves","img":"./images/gryf_gloves.png","house":"gryffindor","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"12","id":"18"},{"name":"Gryffindor Bobble Hat","img":"./images/gryf_hat.png","house":"gryffindor","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"17","id":"19"},{"name":"Faux Leather Gryffindor Crest Notebook","img":"./images/gryf_book.png","house":"gryffindor","categories":["Books","Travel","Souvenirs"],"price":"15","id":"20"},{"name":"Gryffindor Moulded Mug","img":"./images/gryf_cup.png","house":"gryffindor","categories":["Travel","Souvenirs"],"price":"12","id":"21"},{"name":"Gryffindor Crest Pin","img":"./images/gryf_pin.png","house":"gryffindor","categories":["Clothes","Travel","Souvenirs"],"price":"8","id":"22"},{"name":"First Edition Gryffindor Enamel Pin Set","img":"./images/gryf_pins.png","house":"gryffindor","categories":["Clothes","Travel","Souvenirs"],"price":"50","id":"23"},{"name":"Hufflepuff Logo Backpack","img":"./images/huff_bag.png","house":"hufflepuff","categories":["Clothes","Travel"],"price":"36","id":"24"},{"name":"Hufflepuff Robe","img":"./images/huff_coat.png","house":"hufflepuff","categories":["Clothes","Souvenirs"],"price":"75","id":"25"},{"name":"Hufflepuff Gift Trunk","img":"./images/huff_gift_set.png","house":"hufflepuff","categories":["Clothes","Books","Wands","Sweets","Travel","Toys","Souvenirs"],"price":"175","id":"26"},{"name":"The Cup of Hufflepuff Wand","img":"./images/huff_wand_1.png","house":"hufflepuff","categories":["Wands","Souvenirs"],"price":"33","id":"27"},{"name":"Personalised Hufflepuff Triwizard Shirt","img":"./images/huff_shirt_quid.png","house":"hufflepuff","categories":["Clothes","Quidditch","Souvenirs"],"price":"36","id":"28"},{"name":"Personalised Hufflepuff House Seeker T-Shirt","img":"./images/huff_quid_shirt.png","house":"hufflepuff","categories":["Clothes","Quidditch","Souvenirs"],"price":"36","id":"29"},{"name":"Hufflepuff Knitted Hat","img":"./images/huff_hat_1.png","house":"hufflepuff","categories":["Clothes","Quidditch","Souvenirs","Travel"],"price":"14","id":"30"},{"name":"The Hufflepuff Mascot Wand","img":"./images/huff_wand.png","house":"hufflepuff","categories":["Wands","Souvenirs"],"price":"33","id":"31"},{"name":"Hufflepuff Hooded Sweatshirt","img":"./images/huff_hoodie_1.png","house":"hufflepuff","categories":["Clothes","Travel"],"price":"40","id":"32"},{"name":"Hufflepuff Fleece Hoodie","img":"./images/huff_hoodie.png","house":"hufflepuff","categories":["Clothes","Travel"],"price":"50","id":"33"},{"name":"Hufflepuff Quidditch Jumper","img":"./images/huff_quid.png","house":"hufflepuff","categories":["Clothes","Quidditch"],"price":"45","id":"34"},{"name":"Hufflepuff Quidditch Knitted Adult Jumper","img":"./images/huff_quid_short.png","house":"hufflepuff","categories":["Clothes","Quidditch"],"price":"75","id":"35"},{"name":"Hufflepuff Knitted Crest Scarf","img":"./images/huff_scarf.png","house":"hufflepuff","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"18","id":"36"},{"name":"Hufflepuff Sock Set (3 Pack)","img":"./images/huff_socks.png","house":"hufflepuff","categories":["Clothes","Souvenirs","Travel"],"price":"12","id":"37"},{"name":"Hufflepuff T-Shirt","img":"./images/huff_shirt.png","house":"hufflepuff","categories":["Clothes","Travel"],"price":"19","id":"38"},{"name":"Hufflepuff Milk Chocolate Bar","img":"./images/huff_choco.png","house":"hufflepuff","categories":["Sweets","Souvenirs"],"price":"5","id":"39"},{"name":"Hufflepuff Bobble Hat","img":"./images/huff_hat.png","house":"hufflepuff","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"17","id":"40"},{"name":"Faux Leather Hufflepuff Crest Notebook","img":"./images/huff_book.png","house":"hufflepuff","categories":["Books","Travel","Souvenirs"],"price":"15","id":"41"},{"name":"Hufflepuff Moulded Mug","img":"./images/huff_cup.png","house":"hufflepuff","categories":["Travel","Souvenirs"],"price":"12","id":"42"},{"name":"Hufflepuff Cup Enamel Pin","img":"./images/huff_pin.png","house":"hufflepuff","categories":["Clothes","Travel","Souvenirs"],"price":"9","id":"43"},{"name":"Hufflepuff Mascot Badger Soft Toy","img":"./images/huff_pet.png","house":"hufflepuff","categories":["Toys","Quidditch","Souvenirs"],"price":"27","id":"44"},{"name":"Hufflepuff Athletic Jacket","img":"./images/huff_jacket.png","house":"hufflepuff","categories":["Clothes","Travel"],"price":"24","id":"45"},{"name":"Ravenclaw Robe","img":"./images/raven_coat.png","house":"ravenclaw","categories":["Clothes","Souvenirs"],"price":"75","id":"46"},{"name":"Ravenclaw Gift Trunk","img":"./images/raven_gift_set.png","house":"ravenclaw","categories":["Clothes","Books","Wands","Sweets","Travel","Toys","Souvenirs"],"price":"175","id":"47"},{"name":"The Diadem of Ravenclaw Wand","img":"./images/raven_wand_1.png","house":"ravenclaw","categories":["Wands","Souvenirs"],"price":"33","id":"48"},{"name":"Personalised Ravenclaw Triwizard Shirt","img":"./images/raven_shirt_quid.png","house":"ravenclaw","categories":["Clothes","Quidditch","Souvenirs"],"price":"36","id":"49"},{"name":"Personalised Ravenclaw House Seeker T-Shirt","img":"./images/raven_quid_shirt.png","house":"ravenclaw","categories":["Clothes","Quidditch","Souvenirs"],"price":"36","id":"50"},{"name":"Ravenclaw Knitted Hat","img":"./images/raven_hat_1.png","house":"ravenclaw","categories":["Clothes","Quidditch","Souvenirs","Travel"],"price":"14","id":"51"},{"name":"Ravenclaw Mini Gift Trunk","img":"./images/raven_set.png","house":"ravenclaw","categories":["Clothes","Quidditch","Souvenirs","Travel"],"price":"75","id":"52"},{"name":"The Ravenclaw Mascot Wand","img":"./images/raven_wand.png","house":"ravenclaw","categories":["Wands","Souvenirs"],"price":"33","id":"53"},{"name":"Ravenclaw Hooded Sweatshirt","img":"./images/raven_hoodie.png","house":"ravenclaw","categories":["Clothes","Travel"],"price":"40","id":"54"},{"name":"Ravenclaw Fleece Hoodie","img":"./images/raven_hoodie_1.png","house":"ravenclaw","categories":["Clothes","Travel"],"price":"50","id":"55"},{"name":"Ravenclaw Quidditch Jumper","img":"./images/raven_quid.png","house":"ravenclaw","categories":["Clothes","Quidditch"],"price":"45","id":"56"},{"name":"Ravenclaw Logo Backpack","img":"./images/raven_bag.png","house":"ravenclaw","categories":["Clothes","Travel"],"price":"36","id":"57"},{"name":"Ravenclaw Knitted Crest Scarf","img":"./images/raven_scarf.png","house":"ravenclaw","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"18","id":"58"},{"name":"Ravenclaw Sock Set (3 Pack)","img":"./images/raven_socks.png","house":"ravenclaw","categories":["Clothes","Souvenirs","Travel"],"price":"12","id":"59"},{"name":"Ravenclaw T-Shirt","img":"./images/raven_shirt_1.png","house":"ravenclaw","categories":["Clothes","Travel"],"price":"19","id":"60"},{"name":"Ravenclaw Milk Chocolate Bar","img":"./images/raven_choco.png","house":"ravenclaw","categories":["Sweets","Souvenirs"],"price":"5","id":"61"},{"name":"Ravenclaw Lined Backpack","img":"./images/raven_bag_1.png","house":"ravenclaw","categories":["Clothes","Travel"],"price":"32","id":"62"},{"name":"Ravenclaw Bobble Hat","img":"./images/raven_hat.png","house":"ravenclaw","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"17","id":"63"},{"name":"Faux Leather Ravenclaw Crest Notebook","img":"./images/raven_book.png","house":"ravenclaw","categories":["Books","Travel","Souvenirs"],"price":"15","id":"64"},{"name":"Ravenclaw Diadem Enamel Pin","img":"./images/raven_pin.png","house":"ravenclaw","categories":["Clothes","Travel","Souvenirs"],"price":"9","id":"65"},{"name":"Ravenclaw Cup Enamel Pin","img":"./images/raven_pin_1.png","house":"ravenclaw","categories":["Clothes","Travel","Souvenirs"],"price":"9","id":"66"},{"name":"Ravenclaw Quidditch Team Captain T-Shirt","img":"./images/raven_shirt.png","house":"ravenclaw","categories":["Clothes","Quidditch","Travel"],"price":"23","id":"67"},{"name":"Ravenclaw Reversible Knit Scarf","img":"./images/raven_scarf_1.png","house":"ravenclaw","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"24","id":"68"},{"name":"Ravenclaw Knitted Mitten Capped Gloves","img":"./images/raven_gloves.png","house":"ravenclaw","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"12","id":"69"},{"name":"Ravenclaw Logo Sweatshirt","img":"./images/raven_shirt_2.png","house":"ravenclaw","categories":["Clothes","Travel"],"price":"24","id":"70"},{"name":"Slytherin Robe","img":"./images/slyth_coat.png","house":"slytherin","categories":["Clothes","Souvenirs"],"price":"75","id":"71"},{"name":"Slytherin Gift Trunk","img":"./images/slyth_gift_set.png","house":"slytherin","categories":["Clothes","Books","Wands","Sweets","Travel","Toys","Souvenirs"],"price":"175","id":"72"},{"name":"The Locket Of Slytherin Wand","img":"./images/slyth_wand_1.png","house":"slytherin","categories":["Wands","Souvenirs"],"price":"33","id":"73"},{"name":"Personalised Slytherin Triwizard Shirt","img":"./images/slyth_shirt_quid.png","house":"slytherin","categories":["Clothes","Quidditch","Souvenirs"],"price":"36","id":"74"},{"name":"Personalised Slytherin House Seeker T-Shirt","img":"./images/slyth_quid_shirt.png","house":"slytherin","categories":["Clothes","Quidditch","Souvenirs"],"price":"36","id":"75"},{"name":"Slytherin Knitted Hat","img":"./images/slyth_hat_1.png","house":"slytherin","categories":["Clothes","Quidditch","Souvenirs","Travel"],"price":"14","id":"76"},{"name":"Slytherin Mini Gift Trunk","img":"./images/slyth_set.png","house":"slytherin","categories":["Clothes","Quidditch","Souvenirs","Travel"],"price":"75","id":"77"},{"name":"The Slytherin Mascot Wand","img":"./images/slyth_wand.png","house":"slytherin","categories":["Wands","Souvenirs"],"price":"33","id":"78"},{"name":"Slytherin Hooded Sweatshirt","img":"./images/slyth_hoodie.png","house":"slytherin","categories":["Clothes","Travel"],"price":"40","id":"79"},{"name":"Slytherin Fleece Hoodie","img":"./images/slyth_hoodie_1.png","house":"slytherin","categories":["Clothes","Travel"],"price":"50","id":"80"},{"name":"Slytherin Quidditch Jumper","img":"./images/slyth_quid.png","house":"slytherin","categories":["Clothes","Quidditch"],"price":"45","id":"81"},{"name":"Slytherin Logo Backpack","img":"./images/slyth_bag_1.png","house":"slytherin","categories":["Clothes","Travel"],"price":"36","id":"82"},{"name":"Slytherin Knitted Crest Scarf","img":"./images/slyth_scarf_1.png","house":"slytherin","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"18","id":"83"},{"name":"Slytherin Sock Set (3 Pack)","img":"./images/slyth_socks.png","house":"slytherin","categories":["Clothes","Souvenirs","Travel"],"price":"12","id":"84"},{"name":"Slytherin T-Shirt","img":"./images/slyth_shirt.png","house":"slytherin","categories":["Clothes","Travel"],"price":"19","id":"85"},{"name":"Slytherin Milk Chocolate Bar","img":"./images/slyth_choco.png","house":"slytherin","categories":["Sweets","Souvenirs"],"price":"5","id":"86"},{"name":"Slytherin Lined Backpack","img":"./images/slyth_bag.png","house":"slytherin","categories":["Clothes","Travel"],"price":"32","id":"87"},{"name":"Slytherin Bobble Hat","img":"./images/slyth_hat.png","house":"slytherin","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"17","id":"88"},{"name":"Faux Leather Slytherin Crest Notebook","img":"./images/slyth_book.png","house":"slytherin","categories":["Books","Travel","Souvenirs"],"price":"15","id":"89"},{"name":"Slytherin Cup Enamel Pin","img":"./images/slyth_pin.png","house":"slytherin","categories":["Clothes","Travel","Souvenirs"],"price":"9","id":"90"},{"name":"Slytherin Reversible Knit Scarf","img":"./images/slyth_scarf.png","house":"slytherin","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"24","id":"91"},{"name":"Slytherin Knitted Mitten Capped Gloves","img":"./images/slyth_gloves.png","house":"slytherin","categories":["Clothes","Quidditch","Travel","Souvenirs"],"price":"12","id":"92"},{"name":"Slytherin Hoodie","img":"./images/slyth_hoodie_2.png","house":"slytherin","categories":["Clothes","Travel"],"price":"45","id":"93"},{"name":"Slytherin Moulded Mug","img":"./images/slyth_cup.png","house":"slytherin","categories":["Travel","Souvenirs"],"price":"12","id":"94"},{"name":"Slytherin Athletic Jacket","img":"./images/slyth_jacket.png","house":"slytherin","categories":["Clothes","Travel"],"price":"24","id":"95"},{"name":"Slytherin House Cushion","img":"./images/slyth_pillow.png","house":"slytherin","categories":["Toys","Travel","Souvenirs"],"price":"26","id":"96"},{"name":"Bertie Bott\'s Every Flavour Beans","img":"./images/beans.png","house":["gryffindor","hufflepuff","ravenclaw","slytherin"],"categories":["Sweets","Travel","Souvenirs"],"price":"10","id":"97"},{"name":"Chocolate Frog with Personalised Wizard Card","img":"./images/choco_toad.png","house":["gryffindor","hufflepuff","ravenclaw","slytherin"],"categories":["Sweets","Travel","Souvenirs"],"price":"15","id":"98"},{"name":"Chocolate Frog Souvenir Tin","img":"./images/cards.png","house":["gryffindor","hufflepuff","ravenclaw","slytherin"],"categories":["Sweets","Travel","Souvenirs"],"price":"16","id":"99"},{"name":"Peppermint Toads","img":"./images/pepper_toads.png","house":["gryffindor","hufflepuff","ravenclaw","slytherin"],"categories":["Sweets","Travel","Souvenirs"],"price":"5","id":"100"},{"name":"Bottled Butterbeer","img":"./images/butt_beer.png","house":["gryffindor","hufflepuff","ravenclaw","slytherin"],"categories":["Sweets","Travel","Souvenirs"],"price":"6","id":"101"},{"name":"Hogwarts School Trunk","img":"./images/case.png","house":["gryffindor","hufflepuff","ravenclaw","slytherin"],"categories":["Travel","Souvenirs"],"price":"69","id":"102"},{"name":"Personalised Hogwarts Acceptance Letter","img":"./images/hogwarts_set.png","house":["gryffindor","hufflepuff","ravenclaw","slytherin"],"categories":["Books","Travel","Souvenirs"],"price":"15","id":"103"},{"name":"Marauder\'s Map Interactive Toy","img":"./images/hogwarts_map.png","house":["gryffindor","hufflepuff","ravenclaw","slytherin"],"categories":["Books","Travel","Souvenirs"],"price":"50","id":"104"},{"name":"Hogwarts Express Souvenir Ticket","img":"./images/hogwarts_ticket.png","house":["gryffindor","hufflepuff","ravenclaw","slytherin"],"categories":["Books","Travel","Souvenirs"],"price":"5","id":"105"}]');var n=s.t(a,2),c=function(){function e(){}return e.prototype.renderItems=function(e){var t=document.querySelector(".goods-slider");e.forEach((function(e){var i='\n            <div class="goods-slider__card '.concat(e.inCart?"active":"",'" id="').concat(e.id,'" data-h="').concat(e.house,'">\n                <section class="front ').concat(e.inCart?"active":"",'">\n                    <img class="goods-slider__image" src="').concat(e.img,'" alt="').concat(e.name,'">\n                    <p class="goods-name">\n                        "').concat(e.name,'"\n                    </p>\n                    <div class="goods-slider__buy">\n                        <span class="price">"£').concat(e.price,'"</span>\n                        <button class="goods-btn" id="').concat(e.id,'">Accio</button>\n                    </div>\n                </section>\n                <section class="back ').concat(e.inCart?"active":"",'">\n                    <img class="goods-slider__image" src="').concat(e.img,'" alt="').concat(e.name,'">\n                    <p class="goods-name">\n                        In cart\n                    </p>\n                    <div class="goods-slider__buy">\n                        <span class="price">"£').concat(e.price,'"</span>\n                        <button class="back-btn" id="').concat(e.id,'">Depulso</button>\n                    </div>\n                </section>   \n            </div>');t.insertAdjacentHTML("beforeend",i)}))},e}(),u=function(){return u=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var s in t=arguments[i])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},u.apply(this,arguments)},l=function(){function e(){this.sortKey="sortKey",this.filtersKey="filtersKey",this.cartKey="cartKey"}return e.prototype.setFilters=function(e){var t,i,r=localStorage.getItem(this.filtersKey);if(r){var s=JSON.parse(r),o=JSON.stringify(u(u({},s),((t={})[e.key]=e.values,t)));localStorage.setItem(this.filtersKey,o)}else localStorage.setItem(this.filtersKey,JSON.stringify(((i={})[e.key]=e.values,i)))},e.prototype.setSort=function(e){var t;localStorage.setItem(this.sortKey,JSON.stringify(((t={})[e.key]=e.values,t)))},e.prototype.getFilters=function(){var e=localStorage.getItem(this.filtersKey);return e?JSON.parse(e):{}},e.prototype.getSorters=function(){var e=localStorage.getItem(this.sortKey);return e?JSON.parse(e):{}},e.prototype.updateCart=function(e){localStorage.setItem(this.cartKey,JSON.stringify(e))},e.prototype.getCart=function(){var e=localStorage.getItem(this.cartKey);return e?JSON.parse(e):[]},e.prototype.getPrice=function(e){var t=this.getCart();return e.reduce((function(e,i){return t.includes(i.id)?e+=Number(i.price):e}),0)},e}(),h=function(e,t,i){if(i||2===arguments.length)for(var r,s=0,o=t.length;s<o;s++)!r&&s in t||(r||(r=Array.prototype.slice.call(t,0,s)),r[s]=t[s]);return e.concat(r||Array.prototype.slice.call(t))},g=function(){function e(e){this.limitMaxNumber=20,this.limitMinNumber=0,this.cartNum=document.getElementById("goods-counter"),this.cashNum=document.getElementById("money-counter"),this.slider=document.getElementsByClassName("goods-slider")[0],this.state=new l,this.goods=e}return e.prototype.updatePaymentInfo=function(){this.cartNum.innerHTML="".concat(this.state.getCart().length," to buy"),this.cashNum.innerHTML="".concat(this.state.getPrice(this.goods),"£ to pay")},e.prototype.addToCart=function(e){this.state.updateCart(h(h([],this.state.getCart(),!0),[e],!1)),this.updatePaymentInfo()},e.prototype.removeFromCart=function(e){if(this.state.getCart().length>this.limitMinNumber){var t=this.state.getCart().filter((function(t){return t!==e}));this.state.updateCart(t),this.updatePaymentInfo()}},e.prototype.subscribeOnUserActions=function(){var e=this;this.slider.addEventListener("click",(function(t){var i=t.target,r=i.parentNode.parentNode,s=r.parentNode,o=s.lastElementChild,a=s.firstElementChild;i.classList.contains("goods-btn")&&(e.state.getCart().length<e.limitMaxNumber?(r.classList.add("active"),s.classList.add("active"),o.classList.add("active"),e.addToCart(s.id)):alert("Sorry, your chest is full")),i.classList.contains("back-btn")&&(s.classList.remove("active"),a.classList.remove("active"),o.classList.remove("active"),e.removeFromCart(s.id))}))},e}(),d=function(e,t,i){if(i||2===arguments.length)for(var r,s=0,o=t.length;s<o;s++)!r&&s in t||(r||(r=Array.prototype.slice.call(t,0,s)),r[s]=t[s]);return e.concat(r||Array.prototype.slice.call(t))},f=function(){function e(){this.housesContainer=document.querySelector(".faculty-container__items"),this.filtersContainer=document.querySelector(".filtres-categories"),this.houseFilters=document.querySelector(".filters-btns"),this.resetFiltersBtn=document.querySelector(".reset-category__btn"),this.resetLocalBtn=document.querySelector(".reset-btn"),this.filterAllHouses="all",this.state=new l}return e.prototype.selectHouse=function(e){Array.from(document.querySelectorAll(".house-btn")).forEach((function(t){t.dataset.house===e&&(t.checked=!0)}))},e.prototype.subscribeHouseFilters=function(e){var t=this;this.housesContainer.addEventListener("click",(function(i){var r=i.target.dataset.house;t.state.setFilters({key:"house",values:r}),t.selectHouse(r),e()})),this.houseFilters.addEventListener("click",(function(i){var r=i.target;if("INPUT"===r.tagName){var s=r.dataset.house;t.state.setFilters({key:"house",values:s}),e()}}))},e.prototype.addCategory=function(e){var t=this.state.getFilters().categories;t?this.state.setFilters({key:"categories",values:d(d([],t,!0),[e],!1)}):this.state.setFilters({key:"categories",values:[e]})},e.prototype.deleteCategory=function(e){var t=this.state.getFilters().categories.filter((function(t){return t!==e}));this.state.setFilters({key:"categories",values:t})},e.prototype.subscribeCategories=function(e){var t=this;this.filtersContainer.addEventListener("click",(function(i){var r=i.target;"INPUT"===r.tagName&&(r.checked?t.addCategory(r.value):t.deleteCategory(r.value)),e()}))},e.prototype.resetFilters=function(e){var t=this;this.resetFiltersBtn.addEventListener("click",(function(){var i=t.state.getFilters().categories;Array.from(t.filtersContainer.querySelectorAll("input")).forEach((function(e){i.includes(e.id)&&(e.checked=!1,t.deleteCategory(e.id))})),t.selectHouse(t.filterAllHouses),t.state.setFilters({key:"house",values:t.filterAllHouses}),e()}))},e.prototype.resetLocalStorage=function(){this.resetLocalBtn.addEventListener("click",(function(){localStorage.clear(),location.reload()}))},e}(),p=function(){function e(){this.houseFilters=document.querySelector(".filters-btns"),this.filtersContainer=document.querySelector(".filtres-categories"),this.sortFilters=document.querySelector(".sorting-btns"),this.state=new l,this.filtersActive=this.state.getFilters(),this.sortersActive=this.state.getSorters(),this.goodsInCart=this.state.getCart()}return e.prototype.updateFiltersStatus=function(){if(this.filtersActive.house){var e=this.filtersActive.house;Array.from(this.houseFilters.querySelectorAll("input")).forEach((function(t){t.dataset.house===e&&(t.checked=!0)}))}},e.prototype.updateSorterStatus=function(){var e=this;Array.from(this.sortFilters.querySelectorAll("input")).forEach((function(t){t.dataset.sort===e.sortersActive.sort&&(t.checked=!0)}))},e.prototype.updateCategoriesStatus=function(){if(this.filtersActive.categories){var e=this.filtersActive.categories;Array.from(this.filtersContainer.querySelectorAll("input")).forEach((function(t){e.includes(t.id)&&(t.checked=!0)}))}},e.prototype.updateCartStatus=function(){var e=this;Array.from(document.querySelectorAll(".goods-slider__card")).forEach((function(t){for(var i=0;i<e.goodsInCart.length;i++)t.id===e.goodsInCart[i]&&(t.classList.add("active"),t.firstElementChild.classList.add("active"),t.lastElementChild.classList.add("active"))}))},e.prototype.init=function(){this.updateFiltersStatus(),this.updateSorterStatus(),this.updateCategoriesStatus(),this.updateCartStatus()},e}(),m=function(){function e(){this.sortFilters=document.querySelector(".sorting-btns"),this.state=new l}return e.prototype.sortGoods=function(e,t){var i;if("cart"===e){var r=this.state.getCart();return t.filter((function(e){return r.includes(e.id)}))}switch(e){case"name_up":i=function(e,t){return e.name>t.name?1:-1};break;case"name_down":i=function(e,t){return e.name>t.name?-1:1};break;case"price_up":i=function(e,t){return Number(e.price)-Number(t.price)};break;default:i=function(e,t){return Number(t.price)-Number(e.price)}}return t.sort(i)},e.prototype.subscribeOnSort=function(e){var t=this;this.sortFilters.addEventListener("click",(function(i){var r=i.target;if("INPUT"===r.tagName){var s=r.value;t.state.setSort({key:"sort",values:s}),e()}}))},e}(),v=function(){function e(){this.search=document.querySelector(".header-search__bar"),this.searchBtn=document.querySelector(".header-search__btn"),this.searchLink=document.querySelector("#catalogue")}return e.prototype.searchData=function(e){var t=this.search.value.toLowerCase();return e.filter((function(e){if(e.name.trim().toLowerCase().includes(t))return e}))},e.prototype.isSearchDataExist=function(){var e=this.search.value.toLowerCase();return Boolean(e)},e.prototype.subscribeSearchButton=function(e){var t=this;this.searchBtn.addEventListener("click",(function(){t.searchLink.scrollIntoView(),e()}))},e.prototype.subscribeSearchInput=function(e){this.search.addEventListener("input",(function(){e()}))},e.prototype.subscribeSearchKeydown=function(){var e=this;this.search.addEventListener("keydown",(function(t){"Enter"===t.key&&(t.preventDefault(),e.searchLink.scrollIntoView())}))},e.prototype.init=function(e){this.subscribeSearchButton(e),this.subscribeSearchInput(e),this.subscribeSearchKeydown()},e}();s.p,s.p,s.p,s.p,s.p,s.p,s.p;var y=function(){function e(){this.audio=document.querySelector(".audio"),this.playBtn=document.querySelector(".play"),this.prevBtn=document.getElementById("prev"),this.nextBtn=document.getElementById("next"),this.muteBtn=document.querySelector(".mute"),this.progressbar=document.getElementById("progress-bar"),this.playList=["hedwigstheme","lilytheme","fawkesthephoenix","theroomofrequirement","awindowtothepast","leavinghogwarts","harrywondrousworld"],this.currentSound=0}return e.prototype.loadMusic=function(e){this.audio.src="assets/audio/".concat(this.playList[e],".mp3"),this.audio.load()},e.prototype.playMusic=function(){this.playBtn.classList.add("paused"),this.audio.play()},e.prototype.pauseMusic=function(){this.playBtn.classList.remove("paused"),this.audio.pause()},e.prototype.nextMusic=function(){this.currentSound++,this.currentSound>this.playList.length-1&&(this.currentSound=0),this.loadMusic(this.currentSound),this.playMusic()},e.prototype.prevMusic=function(){this.currentSound--,this.currentSound<0&&(this.currentSound=this.playList.length-1),this.loadMusic(this.currentSound),this.playMusic()},e.prototype.pressMute=function(){this.audio.muted?this.audio.muted=!1:this.audio.muted=!0},e.prototype.startAutoPlay=function(){this.audio.muted=!1,this.loadMusic(this.currentSound),this.playMusic()},e.prototype.subscribeAutoPlay=function(){window.addEventListener("click",this.startAutoPlay.bind(this),{once:!0})},e.prototype.timeUpdate=function(){var e=this;this.audio.ontimeupdate=function(){Number.isNaN(e.audio.duration)||(e.progressbar.value=e.audio.currentTime/e.audio.duration)}},e.prototype.pressPlayMusic=function(){var e=this;this.playBtn.addEventListener("click",(function(){e.loadMusic(e.currentSound),e.playBtn.classList.contains("paused")?e.pauseMusic():e.playMusic()}))},e.prototype.pressNextMusic=function(){var e=this;this.nextBtn.addEventListener("click",(function(){e.nextMusic()}))},e.prototype.pressPrevMusic=function(){var e=this;this.prevBtn.addEventListener("click",(function(){e.prevMusic()}))},e.prototype.pressMuteMusic=function(){var e=this;this.muteBtn.addEventListener("click",(function(){e.pressMute()}))},e.prototype.continuePlay=function(){var e=this;this.audio.onended=function(){e.nextMusic()}},e.prototype.init=function(){this.subscribeAutoPlay(),this.timeUpdate(),this.pressPlayMusic(),this.pressNextMusic(),this.pressPrevMusic(),this.pressMuteMusic(),this.continuePlay()},e}(),S=document.querySelector(".goods-slider");(new(function(){function e(){this.generateNumber=300,this.goodsGenerator=new o,this.render=new c,this.state=new l,this.goodsInCart=this.state.getCart(),this.filters=new f,this.updatePageStatus=new p,this.sorting=new m,this.player=new y,this.searchForm=new v,this.goodsList=this.goodsGenerator.mapJsonToProducts(n,this.goodsInCart),this.cart=new g(this.goodsList)}return e.prototype.init=function(){this.parseGoodsList(),this.cart.updatePaymentInfo(),this.cart.subscribeOnUserActions(),this.filters.subscribeHouseFilters(this.animateFilters.bind(this)),this.filters.subscribeCategories(this.animateFilters.bind(this)),this.updatePageStatus.init(),this.sorting.subscribeOnSort(this.animateFilters.bind(this)),this.filters.resetFilters(this.animateFilters.bind(this)),this.filters.resetLocalStorage(),this.player.init(),this.searchForm.init(this.parseGoodsList.bind(this))},e.prototype.parseGoodsList=function(){var e=this.state.getFilters(),t=this.state.getSorters(),i=Object.keys(e),r=function(e,t,i){if(i||2===arguments.length)for(var r,s=0,o=t.length;s<o;s++)!r&&s in t||(r||(r=Array.prototype.slice.call(t,0,s)),r[s]=t[s]);return e.concat(r||Array.prototype.slice.call(t))}([],this.goodsGenerator.mapJsonToProducts(n,this.state.getCart()),!0);this.searchForm.isSearchDataExist()&&(r=this.searchForm.searchData(r)),i&&(i.includes("house")&&"all"!==e.house&&(r=r.filter((function(t){return t.house===e.house}))),i.includes("categories")&&0!==e.categories.length&&(r=r.filter((function(t){return Array.isArray(t.categories)?t.categories.some((function(t){return e.categories.includes(t)})):e.categories.includes(t.categories)})))),r=t.sort?this.sorting.sortGoods(t.sort,r):this.sorting.sortGoods("default",r),S.innerHTML="",this.render.renderItems(r)},e.prototype.animateFilters=function(){S.classList.add("filter"),setTimeout(this.parseGoodsList.bind(this),this.generateNumber),S.addEventListener("animationend",(function(){S.classList.remove("filter")}))},e}())).init()})();