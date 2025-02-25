class ContactForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Crear contenedor
        const container = document.createElement('div');
        container.innerHTML = `
            
            <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aut eaque, laboriosam veritatis, 
                quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
            </p>

            <form class="contact-form">
                <custom-input placeholder="Name"></custom-input>
                <custom-input placeholder="Email"></custom-input>
                <custom-textarea placeholder="Message"></custom-textarea>
                <button-component>Send Message</button-component>
            </form>
        `;

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
