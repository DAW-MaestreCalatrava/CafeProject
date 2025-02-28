import styles from "./input.css" with { type: 'css' };

class CustomInput extends HTMLElement {

    static get observedAttributes() {
        return ['placeholder', 'value'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.placeholder = this.getAttribute('placeholder') || '';
        this.value = this.getAttribute('value') || '';
    }

    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);

        this.shadowRoot.innerHTML = /*html*/`
            <input placeholder="${this.placeholder}">
        `;
    }

    connectedCallback() {
        this.render();

        this.input = this.shadowRoot.querySelector('input');

        this.input.addEventListener('input', () => {
            this.value = this.input.value;
            this.setAttribute('value', this.value);
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'placeholder') this.placeholder = newValue;
        if (name === 'value') this.value = newValue;
    }
}

// Definir el custom element
customElements.define('custom-input', CustomInput);