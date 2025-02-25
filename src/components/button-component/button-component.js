import styles from "./button-component.css" with { type: 'css' };

class ButtonComponent extends HTMLElement {

    static get observedAttributes() {
        return ['type', 'active'];
    }

    type = '';
    button = null;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.type = this.getAttribute('type') || '';
        this.active = this.getAttribute('active') === 'true';

        this.render();
    }

    render() {

        console.log(this.active);

        this.shadowRoot.adoptedStyleSheets.push(styles);

        this.shadowRoot.innerHTML = /*html*/`
            <button class="${this.type} ${this.active ? 'active' : ''}">
                <slot></slot>
            </button>
        `;
    }

    connectedCallback() {
        this.button = this.shadowRoot.querySelector('button');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'type') this.type = newValue;
        if (name === 'active') this.active = newValue === 'true';
    }
}

customElements.define('button-component', ButtonComponent);