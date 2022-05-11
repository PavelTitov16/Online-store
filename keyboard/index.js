import keyBtns from './js/keys.js';

window.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');

    class Button {
        constructor(containerKeybord, keyNameClass, keyEngCode, keyRusCode, keyCapsEngCode, keyCapsRusCode) {
            this.containerKeybord = containerKeybord;
            this.keyNameClass = keyNameClass;
            this.keyEngCode = keyEngCode;
            this.keyRusCode = keyRusCode;
            this.keyCapsEngCode = keyCapsEngCode;
            this.keyCapsRusCode = keyCapsRusCode;
        }

        generateBtn() {
            const btn = document.createElement('div');
            btn.className = `button ${this.keyNameClass}`;
            btn.innerHTML = `
              <span class='eng'>${this.keyEngCode}</span>
              <span class='rus hidden-key'>${this.keyRusCode}</span>
              <span class='capsEng hidden-key'>${this.keyCapsEngCode}</span>
              <span class='capsRus hidden-key'>${this.keyCapsRusCode}</span>
          `;


            this.containerKeybord.append(btn);
        }
    }

    function createKeybord(link) {
        const container = document.createElement('div');
        container.className = 'textboard';
        const containerTextarea = document.createElement('textarea');
        const containerKeyboard = document.createElement('div');
        containerKeyboard.className = 'keyboard';
        container.append(containerTextarea);
        container.append(containerKeyboard);

        keyBtns.forEach((button) => {
            new Button(containerKeyboard, button.class, button.eng, button.rus, button.capsEng, button.capsRus).generateBtn();
        })

        link.append(container);
    }

    createKeybord(body);

});
