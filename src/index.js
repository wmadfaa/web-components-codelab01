import "./styles.css";

class CoolHeading extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("click", () => {
      this.style.color = "red";
    });
  }

  connectedCallback() {
    const template = document.querySelector("template");
    const clone = document.importNode(template.content, true);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(clone);
    this.style.color = "blue";
  }
}

customElements.define("cool-heading", CoolHeading);
