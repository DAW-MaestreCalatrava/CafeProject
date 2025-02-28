import styles from "./popup.css" with { type: 'css' };

class Popup extends HTMLElement {

    static get observedAttributes() {
        return ['name', 'email', 'message', 'id', 'date'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.name = this.getAttribute('name') || '';
        this.email = this.getAttribute('email') || '';
        this.message = this.getAttribute('message') || '';
        this.id = this.getAttribute('id') || '';
        this.date = this.getAttribute('date') || '';
    }

    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);

        const name = this.name !== 'null' ? this.name : '-';
        const email = this.email !== 'null' ? this.email : '-';
        const message = this.message !== 'null' ? this.message : '-';

        this.shadowRoot.innerHTML = /*html*/`
            <div class="popup-container">
            <button class="close-btn">&times;</button>
            <h3>El mensaje se ha enviado</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
            <p><strong>ID:</strong> ${this.id}</p>
            <p><strong>Fecha:</strong> ${new Date(this.date).toLocaleString()}</p>
            </div>
        `;
    }

    connectedCallback() {
        this.render();

        this.closeBtn = this.shadowRoot.querySelector('.close-btn');

        this.closeBtn.addEventListener('click', () => {

            console.log('click');

            this.class = '';
            this.render();
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === 'name') this.name = newValue;
            if (name === 'email') this.email = newValue;
            if (name === 'message') this.message = newValue;
            if (name === 'id') this.id = newValue;
            if (name === 'date') this.date = newValue;
            this.render();
        }
    }
}

// Define the custom element
customElements.define('popup-component', Popup);
