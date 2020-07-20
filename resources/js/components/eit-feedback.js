import { LitElement, html, css } from 'lit-element';
import "@dile/dile-toast/dile-toast"; 

class EitFeedback  extends LitElement {

  static get styles() {
    return css`
        :host {
            display: block;
            position: fixed;
            z-index: 999999;
            --dile-toast-z-index: 999999;
            --dile-toast-neutral-color: #1976d2;
        }
        @media (min-width: 500px) {
            dile-toast {
                --dile-toast-width: 450px;
                --dile-toast-padding: 15px 20px;
            }
        }
    `;
  }

  static get properties() {
    return {
        time: { type: Number },
        initMsg: { type: String },
        initStatus: { type: String }
    };
  }

  constructor() {
    super();
    this.time = 5000;
    this.initStatus = "neutral";
  }

  render() {
    return html`
        <dile-toast id="toast" duration=${this.time}></dile-toast>
    `;
  }

  firstUpdated() {
    console.log(this.initMsg);
      this.toast = this.shadowRoot.getElementById("toast");
      if(this.initMsg) {
        this.toast.open(this.initMsg, this.initStatus);
      }
  }
}

customElements.define('eit-feedback', EitFeedback);