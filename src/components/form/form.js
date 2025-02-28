class ContactForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Crear contenedor
        const container = document.createElement('div');
        container.innerHTML = `
            <form class="contact-form">
                <custom-input placeholder="Name"></custom-input>
                <custom-input placeholder="Email"></custom-input>
                <custom-textarea placeholder="Message"></custom-textarea>
                <button-component type="primary">Send Message</button-component>
            </form>
        `;

        container.querySelector('button-component').addEventListener('click', (ev) => {
            ev.preventDefault();

            const name = this.shadowRoot.querySelector('custom-input[placeholder="Name"]').getAttribute('value');
            const email = this.shadowRoot.querySelector('custom-input[placeholder="Email"]').getAttribute('value');
            const message = this.shadowRoot.querySelector('custom-textarea[placeholder="Message"]').getAttribute('value');

            const formData = {
                name: name,
                email: email,
                message: message
            };

            // Dispatch custom event with form data
            this.dispatchEvent(new CustomEvent('formSubmit', {
                detail: formData,
                bubbles: true,
                composed: true
            }));
        });

        // Agregar estilos
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', new URL('./form.css', import.meta.url));

        // Agregar al Shadow DOM
        this.shadowRoot.append(style, container);
    }
}

// Definir el Web Component
customElements.define('contact-form', ContactForm);
