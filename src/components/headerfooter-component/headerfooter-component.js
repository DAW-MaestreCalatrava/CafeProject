import styles from  "./headerfooter.css" with {type:"css"};
class headerfooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.adoptedStyleSheets.push(styles);
    this.shadowRoot.innerHTML = /*html*/ `
      <header-component img="../src/img/logo.jpg"></header-component>
      <slot></slot>
      <my-footer></my-footer>
        `;
  }

  static get observedAttributes() {
    return [];

  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("headerfooter-component", headerfooter);
