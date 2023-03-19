
class WebComponent extends HTMLElement {
    constructor() {
        super()
        
        this.Css;
        this.Html;
        this.Js;
        this.attachShadow({ mode: 'open' });

    }

    static get observedAttributes() {
        // This array contain the names of the attributes you want to observe
        return ['']
    }
    attributeChangedCallback(atribute, oldatribute, newatribute) {
        // This is called when the element attributes is changed
        console.log('Custom square element attributes changed.');
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
        // This is called when the element is added to page
        console.log('Custom square element added to page.');
        this.render();
        this.Js();
    }
    disconnectedCallback() {
        // This is called when the element is removed from page 
        console.log('Custom square element removed from page.');  
    }

    adoptedCallback() {
        // This is called when the element is moved to new page
        console.log('Custom square element moved to new page.');
    }
}


window.customElements.define('web-component-template', WebComponent);
