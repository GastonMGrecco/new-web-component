
class WebComponent extends HTMLElement {
    constructor() {
        super()

        this.Css;
        this.Html;
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
        const link = document.createElement('link');
        document.querySelector('title').textContent = 'My Web Component';
        link.rel = 'shortcut icon';
        link.href = 'https://www.svgrepo.com/show/354542/webcomponents.svg';
        document.querySelector('head').appendChild(link)
    }
    // Html targets
    Html() {
        return `
      <h1>My Web Component</h1>
      <img src="https://www.svgrepo.com/show/354542/webcomponents.svg" />
    `

    }
    // Styles
    Css() {
        return `
        <style>
            :host {
                /* :host is for shadowRoot's styles */
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
                width: 30rem
            }
        </style>
    `;
    }

    render() {
        this.shadowRoot.innerHTML = `
                ${this.Css()}
                ${this.Html()}
                `;
    }

    connectedCallback() {
        this.render();
        this.Js();
    }
}


window.customElements.define('web-component-template', WebComponent);
