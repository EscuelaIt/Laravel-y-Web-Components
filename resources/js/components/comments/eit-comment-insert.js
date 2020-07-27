import { LitElement, html, css } from 'lit-element';
import '@dile/dile-avatar/dile-avatar';

import { store } from "../../redux/store";
import { connect } from 'pwa-helpers';

class EitCommentInsert  extends connect(store)(LitElement) {

  static get styles() {
    return css`
      :host {
        display: block;
        text-align: left;
      }
      textarea {
        border: 2px solid var(--secondary-color);
        border-radius: 5px;
        width: 100%;
        height: 50px;
        margin-bottom: 0.6rem;
      }
      section {
        display: flex;
      }
      .avatar {
        margin-right: 0.5rem;
      }
      .comment {
        flex-grow: 1;
      }
    `;
  }

  static get properties() {
    return {
      userData: { type: Object }
    };
  }

  get defaultUserData() {
    return {
      name: ""
    };
    
  }


  constructor() {
    super();
    this.userData = this.defaultUserData;
  }

  stateChanged(state) {
    if (state.user && state.user.loggedIn) {
      this.userData = state.user.userData;
    } else {
      this.userData = this.defaultUserData;
    }
  }

  render() {
    return html`
      <section>
        <div class="avatar">
          <dile-avatar initial="${this.userData.name[0]}"></dile-avatar>
        </div>
        <div class="comment">
          <textarea></textarea>
          <eit-button>Comentar</eit-button>
        </div>
      </section>
    `;
  }
}

customElements.define("eit-comment-insert", EitCommentInsert);