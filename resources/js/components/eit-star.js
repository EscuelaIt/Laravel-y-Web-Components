import { LitElement, html, css } from 'lit-element';
import './icons/eit-icon';
import './utils/eit-ajax';

class EitStar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        --eit-icon-color: #fff;
        --eit-icon-size: 32px;
        display: inline-block;
      }
      div {
        display: flex;
        align-items: center;
        padding: 2px 10px;
        background-color: var(--primary-color);
        border-radius: 20px;
        color: #fff;
        font-size: 1.6rem;
        cursor: pointer;
      }
      .icon {
        position: relative;
        top: 2px;
      }
      .counter {
        margin: 0 8px 0 12px;
      }
    `;
  }

  static get properties() {
    return {
      counterValue: { type: Number },
      counterId: { type: Number }
    };
  }

  constructor() {
    super();
    this.counterValue = 0;
  }

  firstUpdated() {
    this.elajax = this.shadowRoot.getElementById("elajax");
  }

  render() {
    return html`
      
      <eit-ajax
        id="elajax"
        method="post"
        url="/api-counter/increment"
        @ajax-success="${this.ajaxSuccess}"
        @ajax-error="${this.ajaxError}"
      ></eit-ajax>

      <div @click="${this.increment}">
        <span class="icon">
          <eit-icon icon="stars"></eit-icon>
        </span>
        <span class="counter">
          ${this.counterValue}
        </span>
      </div>
    `;
  }

  increment() {
    let data = {
      id: this.counterId
    };
    this.elajax.data = data;
    this.elajax.generateRequest();
  }

  ajaxSuccess(e) {
    console.log(e.detail);
    this.counterValue = e.detail.counter;
  }
  ajaxError(e) {
    console.log(e.detail.msg);
  }
}

customElements.define('eit-star', EitStar);