import {LitElement, html, css} from 'lit-element';

import { DileSlideDownMixin } from '@dile/dile-slide-down-mixin';

class EitInlineFeedback extends DileSlideDownMixin(LitElement) {
  static get properties() {
    return {
      msg: { type: String },
      status: { type: String },
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      section {
        font-size: 0.9em;
        border-radius: 5px;
        text-align: center;
        background-color: #ddd;
        height: 0px;
        overflow: hidden;
        transition: all 0.3s ease-in;
        -webkit-transition: all 0.3s ease-in;
      }
      @media(min-width: 850px) {
        section {
          font-size: 0.8em;
        }
      }
      section p {
        margin: 12px 5px;
      }
      .error {
        background-color: rgba(220, 60, 60, 0.3);
        border: 1px solid rgba(220, 60, 60, 0.5);
      }
      .success {
        background-color: rgba(30, 220, 99, 0.3);
        border-color: 1px solid rgba(30, 220, 99, 0.5);
      }
      .neutral {
        background-color: rgba(30, 100, 250, 0.2);
        border-color: 1px solid rgba(30, 100, 220, 0.5);
      }
    `;
  }

  render() {
    return html`
    <section id="msg" class="${this.status}">
      <p>
        ${this.msg}
      </p>
    </section>
    `;
  }

  firstUpdated() {
    this.msgElement = this.shadowRoot.getElementById('msg');
  }

  doFeeedback(msg, status) {
    this.msg = msg;
    this.status = status;
    setTimeout(() => {
      this.slideShow(this.msgElement);
    }, 100);
    
  }
  positiveFeedback(msg) {
    this.doFeeedback(msg, 'success');
  }
  negativeFeedback(msg) {
    this.doFeeedback(msg, 'error');
  }
  neutralFeedback(msg) {
    this.doFeeedback(msg, 'neutral');    
  }
  clear() {
    this.slideHide(this.msgElement);
    this.msg = '';
    this.status = '';
  }
}

customElements.define('eit-inline-feedback', EitInlineFeedback);