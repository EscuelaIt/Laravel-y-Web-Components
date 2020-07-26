import { LitElement, html, css } from 'lit-element';
import './eit-login-modal';
import './eit-user-menu'; 

class EitUserControl  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: flex;
        align-items: stretch;
      }
      .logoutelement {
        display: flex;
        align-items: center;
        --eit-button-border: 1px solid #fff;
      }
    `;
  }

  static get properties() {
    return {
      loggedIn: { type: Boolean },
      userData: { type: Object },
    };
  }

  constructor() {
    super();
    this.loggedIn = false;
  }

  firstUpdated() {
    this.querySelector("#loginlink").addEventListener(
      "click",
      this.loginRequest.bind(this)
    );
    this.elmodal = this.shadowRoot.getElementById("elmodal");
    this.getUser();
  }

  render() {
    return html`
      ${this.loggedIn ? this.templateUser : this.templateLogin}
      <eit-login-modal id="elmodal" @login-valid="${this.loginValid}" ?loggedIn="${this.loggedIn}">
        <slot name="logininputs"></slot>
      </eit-login-modal>
    `;
  }

  get templateLogin() {
    return html`
      <slot name="loginlinks"></slot>
    `;
  }

  get templateUser() {
    return html`
      <div class="logoutelement">
        <eit-user-menu .userData="${this.userData}"></eit-user-menu>
      </div>
    `;
  }

  loginRequest(e) {
    e.preventDefault();
    this.elmodal.open();
  }

  loginValid(e) {
    this.userData = e.detail.user;
    this.loggedIn = true;
  }

  getUser() {
    axios.get("/api-user/get").then(res => {
      if (res.status == 200) {
        if (res.data) {
          this.loggedIn = res.data.data.loggedIn;
          this.userData = res.data.data.user;
        }
      }
    });
  }
}

customElements.define('eit-user-control', EitUserControl);