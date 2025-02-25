import style from './text.css' with {type: 'css'};
class Text extends HTMLElement {
    static get observedAttributes() {
        return ["size", "color", "alignCenter"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.size = this.getAttribute("size") || "body";
        this.color = this.getAttribute("color") || "#000";
        this.alignCenter = this.hasAttribute("alignCenter");
        this.render();
    }

    render() {
        this.shadowRoot.adoptedStyleSheets.push(style);
        this.shadowRoot.innerHTML = /* html */ `
            <style> 
                h1, h2, p {
                    color: ${this.color};
                    text-align: ${this.alignCenter ? 'center' : 'unset'};
                }
                
            </style>
            ${this.size === 'title' ? this.sizeTitle() : ''}
            ${this.size === 'subtitle' ? this.sizeSubTitle() : ''}
            ${this.size === 'body' ? this.sizeBody() : ''}
        `;
    }

    sizeTitle() {
        return /* html */ `
            <h1><slot></slot></h1>
        `;
    }

    sizeSubTitle() {
        return /* html */ `
            <h2><slot></slot></h2>
        `;
    }

    sizeBody() {
        return /* html */ `
            <p><slot></slot></p>
        `;
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("my-text", Text);
