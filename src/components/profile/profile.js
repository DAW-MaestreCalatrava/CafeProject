import styles from  "./profile.css" with {type:"css"};
class profile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.adoptedStyleSheets.push(styles);
    this.shadowRoot.innerHTML = /*html*/ `
            
            <div class="profile-card">
            <div class="profile-image">
                <img src="${this.getAttribute("image")}" alt="imagen de perfil">
            </div>
            <div class="profile-name">
                <my-text size="subtitle">${this.getAttribute("name") || "Nombre"}</my-text>
            </div>
            <div class="profile-desc">
                <my-text size="body">${this.getAttribute("desc") || "Descripcion"}</my-text>
            </div>
            <div class="profile-social">
            <icons-component icon="facebook" link="${this.getAttribute("facebook")}"></icons-component>
            <icons-component icon="linkedin" link="${this.getAttribute("linkedin")}"></icons-component>
            <icons-component icon="instagram" link="${this.getAttribute("instagram")}"></icons-component>
            

            </div>

            <style>
                @import "/profile.css";
            </style>
        `;
  }

  static get observedAttributes() {
    return ["image", "name", "desc", "facebook", "linkedin", "instagram"];

  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("profile-component", profile);
