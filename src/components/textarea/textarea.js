import styles from "./textarea.css" with { type: 'css' };

class CustomTextarea extends HTMLElement {

    static get observedAttributes() {
        return ['placeholder'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.placeholder = this.getAttribute('placeholder') || '';
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
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'placeholder') this.placeholder = newValue;
    }
}

// Definir el custom element
customElements.define('custom-textarea', CustomTextarea);