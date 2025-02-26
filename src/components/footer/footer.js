import style from './footer.css' with {type: 'css'};

class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render() {
        this.shadowRoot.adoptedStyleSheets.push(style);
        this.shadowRoot.innerHTML = /* html */ `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
             
            <footer>
                <div class="left">
                    <my-text size="body" color="#888888">Copyright &copy; 2025 Onza Cafe Team</my-text>
                </div>
                <div class="right"> 
                    <icons-component icon="instagram" link="${this.getAttribute("instagram")}"></icons-component>
                    <icons-component icon="facebook" link="${this.getAttribute("facebook")}"></icons-component> 
                    <icons-component icon="slack" link="${this.getAttribute("slack")}"></icons-component> 
                </div>
            </footer>
        `;
    }
}

customElements.define("my-footer", Footer)