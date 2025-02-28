import styles from "./textarea.css" with { type: 'css' };

class CustomTextarea extends HTMLElement {

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
            <textarea placeholder="${this.placeholder}"></textarea>
        `;
    }

    connectedCallback() {
        this.render();
        this.textarea = this.shadowRoot.querySelector('textarea');

        this.textarea.addEventListener('input', () => {
            this.value = this.textarea.value;
            this.setAttribute('value', this.value);
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'placeholder') this.placeholder = newValue;
        if (name === 'value') this.value = newValue;
    }
}

// Definir el custom element
customElements.define('custom-textarea', CustomTextarea);