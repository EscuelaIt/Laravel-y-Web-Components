import { LitElement, html, css } from 'lit-element';
import '../forms/eit-button';

class EitUserMenu  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <eit-button @click="${this.doLogout}">
        logout
      </eit-button>
    `;
  }

  doLogout() {
    document.querySelector("#logout-form").submit();
  }
}

customElements.define('eit-user-menu', EitUserMenu);