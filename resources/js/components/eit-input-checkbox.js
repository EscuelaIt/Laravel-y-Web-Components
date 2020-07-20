import { LitElement, html, css } from 'lit-element';
import "@dile/dile-checkbox/dile-checkbox.js";

class EitInputCheckbox extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                --dile-checkbox-checked-color: var(--secondary-color, #12af51);
                --dile-checkbox-size: 24px;
            }
        `;
    }

    static get properties() {
        return {
            name: { type: String },
            value: { type: String },
            checked: { type: Boolean }
        };
    }

    constructor() {
        super();
        this.checked = false;
    }

    firstUpdated() {
        this.elcheck = this.shadowRoot.getElementById("elcheck");
        this.input = document.createElement("input");
        this.input.setAttribute("type", "checkbox");
        this.input.setAttribute("name", this.name);
        this.input.setAttribute("value", this.value);
        this.input.setAttribute("style", "display: none");
        this.input.checked = this.cheked;
        this.appendChild(this.input);
    }

    render() {
        return html`
            <dile-checkbox
                ?checked="${this.checked}"
                @dile-checkbox-changed="${this.changeChecked}"
                id="elcheck"
                ><slot></slot></dile-checkbox
            >
        `;
    }

    changeChecked(e) {
      //console.log(e.detail);
      this.input.checked = e.detail;
      this.checked = e.detail;
    }
}

customElements.define('eit-input-checkbox', EitInputCheckbox);