class CustomTextarea extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Crear el textarea
        const textarea = document.createElement('textarea');
        textarea.classList.add('custom-textarea');

        // Aplicar el placeholder si el atributo existe
        const placeholder = this.getAttribute('placeholder') || '';
        textarea.setAttribute('placeholder', placeholder);

        // Crear estilo
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', new URL('./textarea.css', import.meta.url));

        // Agregar elementos al Shadow DOM
        this.shadowRoot.append(style, textarea);
    }
}

// Definir el custom element
customElements.define('custom-textarea', CustomTextarea);