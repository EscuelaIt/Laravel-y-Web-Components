import { LitElement, html, css } from 'lit-element';
import '@dile/dile-avatar/dile-avatar';

class EitCommentInsert  extends LitElement {

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
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <section>
        <div class="avatar">
          <dile-avatar></dile-avatar>
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