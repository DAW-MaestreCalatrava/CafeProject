class CustomInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Crear elementos
        const input = document.createElement('input');
        input.classList.add('custom-input');

        // Aplicar el placeholder si el atributo existe
        const placeholder = this.getAttribute('placeholder') || '';
        input.setAttribute('placeholder', placeholder);

        // Crear estilo
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', new URL('./input.css', import.meta.url));

        // Agregar elementos al Shadow DOM
        this.shadowRoot.append(style, input);
    }
}


// Definir el custom element
customElements.define('custom-input', CustomInput);

