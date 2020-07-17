import { LitElement, html, css } from 'lit-element';
import { x } from '../styles/forms';

class EitBoxInfo  extends LitElement {

  static get styles() {
    return [x, css`
      :host {
        background-color: var(--eit-box-background, orange);
        display: block;
      }
      p {
        font-size: 1.5rem;
      }
      b {
        color: red;
      }
    `];
  }

  static get properties() {
    return {
      message: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.message = "hola a todos!!";
    this.counter = 0;
  }

  render() {
    return html`
        <p>Soy info <b>box</b> <span>${this.counter}</span></p>
        <div>
            ${this.message}
            <div>
                <button @click="${this.add}">+1</button>
            </div>
        </div>
        <slot></slot>
    `;
  }

  add() {
    this.counter++;
  }
}

customElements.define('eit-box-info', EitBoxInfo);