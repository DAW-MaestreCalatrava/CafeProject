import styles from  "./icons.css" with {type:"css"};
class IconsComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
  
    render() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
      const iconType = this.getAttribute("icon") || "twitter"; 
      const link = this.getAttribute("link") || "#";
  
      // Diccionario de iconos
      const icons = {
        twitter: "fab fa-twitter",
        facebook: "fab fa-facebook-f",
        linkedin: "fab fa-linkedin-in",
        instagram: "fab fa-instagram",
        discord: "fab fa-discord",
        github: "fab fa-github",
        youtube: "fab fa-youtube",
        whatsapp: "fab fa-whatsapp",
        snapchat: "fab fa-snapchat-ghost",
        tiktok: "fab fa-tiktok",
        pinterest: "fab fa-pinterest",
        reddit: "fab fa-reddit",
        twitch: "fab fa-twitch",
        telegram: "fab fa-telegram",
        slack: "fab fa-slack",
        medium: "fab fa-medium",
        patreon: "fab fa-patreon",
        paypal: "fab fa-paypal"
      };
  
      const iconClass = icons[iconType] || icons.twitter; 
  
      this.shadowRoot.innerHTML = /*html*/ `
        <style>
            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css');
            
        </style>
        <div class="icons-component">
          <a href="${link}" target="_blank" class="icon">
            <i class="${iconClass}"></i>
          </a>
        </div>
      `;
    }
  
    static get observedAttributes() {
      return ["icon", "link"];
    }
  
    attributeChangedCallback() {
      this.render();
    }
  }
  
  customElements.define("icons-component", IconsComponent);
  