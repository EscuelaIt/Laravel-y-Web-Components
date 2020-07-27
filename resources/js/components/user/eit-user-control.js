import { LitElement, html, css } from 'lit-element';
import './eit-login-modal';
import './eit-user-menu'; 


import { store } from "../../redux/store";
import { changeLoginVisibility } from "../../redux/actions/app_actions";
import { connect } from 'pwa-helpers';
import { getUser } from '../../redux/actions/user_actions';


class EitUserControl extends connect(store)(LitElement) {

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

  stateChanged(state) {
    this.loggedIn = state.user.loggedIn;
    this.userData = state.user.userData;
  }

  render() {
    return html`
      ${this.loggedIn ? this.templateUser : this.templateLogin}
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
    store.dispatch(changeLoginVisibility(true));
  }

  loginValid(e) {
    this.userData = e.detail.user;
    this.loggedIn = true;
  }

  getUser() {
    store.dispatch(getUser());
  }
}

customElements.define('eit-user-control', EitUserControl);