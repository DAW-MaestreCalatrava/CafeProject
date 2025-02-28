import styles from "./headerfooter.css" with { type: "css" };

class HeaderFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    // Render the component's HTML structure
    this.shadowRoot.adoptedStyleSheets.push(styles);
    this.shadowRoot.innerHTML = /*html*/ `
      <header-component img="../src/img/logo.jpg"></header-component>
      <slot></slot>
      <my-footer></my-footer>
    `;

    // Execute after DOM is loaded to handle button logic
    document.addEventListener("DOMContentLoaded", async () => {
      const header = this.shadowRoot.querySelector('header-component');
      const url = window.location.pathname.split('/').pop();

      const buttons = [
        { text: 'Home', link: './', active: !url },
        { text: 'About', link: './about.html', active: url.includes('about') },
        { text: 'Contact', link: './contact.html', active: url.includes('contact') }
      ];

      // Set the buttons array to the header component
      header.buttons = buttons;
    });
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback() {
    this.render();
  }
}

customElements.define("headerfooter-component", HeaderFooter);
