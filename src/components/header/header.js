import styles from "./header.css" with { type: 'css' };

class HeaderComponent extends HTMLElement {

    static get observedAttributes() {
        return ['img'];
    }

    _buttons = [];
    img = [];

    set buttons(value) {
        this._buttons = value;
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.img = this.getAttribute('img');
        this._buttons = [];

        this.render();
    }

    render() {

        console.log(this._buttons);

        this.shadowRoot.adoptedStyleSheets.push(styles);

        this.shadowRoot.innerHTML = /*html*/`
            <header>
                <img src="${this.img}" alt="logo"/>
                <div class="buttons">
                    ${this._buttons.map(button => /*html*/`
                        <button-component active="${button.active}" type="link" onClick="window.location.href = '${button.link}'">
                            ${button.text}
                        </button-component>
                    `).join('')}
                </div>
            </header>
        `;
    }

    connectedCallback() {
        this.header = this.shadowRoot.querySelector('header');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'img') this.img = newValue;
    }
}

customElements.define('header-component', HeaderComponent);