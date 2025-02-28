import styles from "./section1.css" with { type: 'css' };

class Section extends HTMLElement {

    static get observedAttributes() {
        return ['img', 'title', 'description', 'button'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.img = this.getAttribute('img');
        this.title = this.getAttribute('title');
        this.description = this.getAttribute('description');
        this.button = this.getAttribute('button');

        this.render();
    }

    render() {

        this.shadowRoot.adoptedStyleSheets.push(styles);

        this.shadowRoot.innerHTML = /*html*/`
            <style>
                section {
                    background-image: url(${this.img});
                }
            </style>
            <section>
                <div>
                    <my-text size='title' color='white'>${this.title}</my-text>
                    <my-text size='body' color='white'>${this.description}</my-text>
                    <button-component type="primary">${this.button}</button-component>
                </div>
            </section>
        `;
    }

    connectedCallback() {
        this.section = this.shadowRoot.querySelector('section');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        if (name === 'img') this.img = newValue;
        if (name === 'title') this.title = newValue;
        if (name === 'description') this.description = newValue;
        if (name === 'button') this.button = newValue;
        this.render();
    }
}

customElements.define('section1-component', Section);