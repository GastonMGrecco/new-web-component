
/*export default*/ class WebComponent extends HTMLElement {
    constructor() {
        super()

        this.Css;
        this.HTML;
        this.Js;
        this.attachShadow({ mode: 'open' });

    }

    static get observedAttributes() {
        return ['']
    }
    attributeChangedCallback(atribute, oldatribute, newatribute) {
        switch (atribute) {
            case '':
                break;
            default:
        }
    }

    // Logic Js
    Js() {

    }
    // HTML targets
    HTML() {
        return `
      <h1>My Web Component</h1>
      <img src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Webcomponents-900x0.png" />
    `

    }
    // Styles
    Css() {
        return `
        <style>
    /* :host is for shadowRoot's styles */
    :host {
        align-items: center;
        background-color: #eee;
        display: flex;
        flex-direction: column;
        height: calc(100vh - 10rem);
        padding-top: 10rem;
        width: 100vw;
    }

    h1 {
        color: rgba(1, 1, 1, 255);
        font-family: "sans";
        font-size: 4rem;
        padding: 15px;
        text-align: center;
    }

    img {
        width: 40rem
    }
</style>
    `;
    }

    render() {
        this.shadowRoot.innerHTML = `
                ${this.Css()}
                ${this.HTML()}
                `;
    }

    connectedCallback() {
        this.render();
        this.Js();
    }
}


window.customElements.define('web-component-template', WebComponent );