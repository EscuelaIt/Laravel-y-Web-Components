import { LitElement, html, css } from 'lit-element';
import '../forms/eit-button';
import '@dile/dile-avatar/dile-avatar.js';
import '@dile/dile-menu-overlay/dile-menu-overlay';

class EitUserMenu  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      dile-avatar {
        --dile-avatar-color: var(--secondary-color, #333);
      }
      .trigger {
        cursor: pointer;
      }
      .menucontent {
        padding: 0.8rem;
      }
      .menucontent p {
        margin-top: 0;
        padding-bottom: 10px;
        border-bottom: 2px solid var(--secondary-color, #ddd);
      }
    `;
  }

  static get properties() {
    return {
      userData: { type: Object }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <dile-menu-overlay>
        <dile-avatar class="trigger" slot="trigger" initial="${this.getInitial(this.userData)}"></dile-avatar>
        <div slot="content" class="menucontent">
          <p>
            ${this.userData.name}
          </p>
          <eit-button @click="${this.doLogout}">
            logout
          </eit-button>
        </div>
      </dile-menu-overlay>
    `;
  }

  doLogout() {
    document.querySelector("#logout-form").submit();
  }

  getInitial(user) {
    if(user) {
      return user.name[0];
    }
    return '';
  }


}

customElements.define('eit-user-menu', EitUserMenu);