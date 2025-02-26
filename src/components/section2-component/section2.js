import styles from "./section2.css" with { type: "css" };

class Section2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.adoptedStyleSheets.push(styles);
    this.shadowRoot.innerHTML = /*html*/ `
      <my-text size="title" color="#e89a2f" alignCenter>${this.getAttribute("titulo")}</my-text>
      <my-text size="body" color="#222" alignCenter>${this.getAttribute("pPrincipal")}</my-text>

      <div class="contenedor">
          <div class="seccion">
              <my-text size="subtitle" color="#000">${this.getAttribute("h2Seccion1")}</my-text>
              <my-text size="body" color="#222">${this.getAttribute("pSeccion1")}</my-text>
          </div>
          <div class="seccion">
              <my-text size="subtitle" color="#000">${this.getAttribute("h2Seccion2")}</my-text>
              <my-text size="body" color="#222">${this.getAttribute("pSeccion2")}</my-text>
          </div>
          <div class="seccion">
              <my-text size="subtitle" color="#000">${this.getAttribute("h2Seccion3")}</my-text>
              <my-text size="body" color="#222">${this.getAttribute("pSeccion3")}</my-text>
          </div>
      </div>
    `;
  }

  static get observedAttributes() {
    return [
      "titulo",
      "pPrincipal",
      "h2Seccion1",
      "pSeccion1",
      "h2Seccion2",
      "pSeccion2",
      "h2Seccion3",
      "pSeccion3",
    ];
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("section2-component", Section2);
