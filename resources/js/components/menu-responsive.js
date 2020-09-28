import { LitElement, html, css } from 'lit-element';
import '@dile/dile-hamburger/dile-hamburger';
import '@dile/dile-app-drawer/dile-app-drawer'
class MenuResponsive  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        --dile-app-drawer-background-color: var(--primary-color);
        --dile-app-drawer-modal-background-color: rgba(20, 20, 20, 0.3)
      }
      .content {
        padding: 1.5rem;
        color: #fff;
      }
      dile-hamburger {
        position: relative;
        z-index: 10002;
      }
    `;
  }

  static get properties() {
    return {
      opened: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.opened = false;
  }

  render() {
    return html`
      <dile-hamburger
        ?active=${this.opened}
        @click="${this.changeOpened}"
      ></dile-hamburger>
      <dile-app-drawer
        ?opened=${this.opened}
        @dile-app-drawer-closed="${this.drawerHasClosed}"
      >
        <div class="content">
          <slot name="enlaces"></slot>
        </div>
      </dile-app-drawer>
    `;
  }

  changeOpened() {
    this.opened = !this.opened;
  }
  drawerHasClosed() {
    this.opened = false;
  }
}

customElements.define('menu-responsive', MenuResponsive);