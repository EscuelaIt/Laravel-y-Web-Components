import { LitElement, html, css } from 'lit-element';
import { iconsLibrary } from './icons';

class EitIcon  extends LitElement {

  static get styles() {
    return css`
        :host[hidden] {
            display: none;
        }
        :host {
            display: inline-block;
        }
        path {
            fill: var(--eit-icon-color, #888);
            transition: fill 0.3s ease;
        }
        path[fill="none"] {
            fill: transparent;
        }
        svg {
            width: var(--eit-icon-size, 24px);
            height: var(--eit-icon-size, 24px);
        }
        div {
            display: flex;
        }
    `;
  }

  static get properties() {
    return {
        icon: { type: String }
    };
  }

  constructor() {
    super();
    this.icon = "info";
  }

  render() {
    return html`
        <div>
            ${iconsLibrary[this.icon]}
        </div>
    `;
  }
}

customElements.define('eit-icon', EitIcon);