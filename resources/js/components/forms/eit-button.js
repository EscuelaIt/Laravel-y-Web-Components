import { LitElement, html, css } from "lit-element";
import '../icons/eit-icon';

export class EitButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        --eit-icon-size: var(--eit-button-icon-size, 1.2em);
        --eit-icon-color: var(--eit-button-icon-color, #fff);
      }
      eit-icon {
        position: relative;
        top: 3px;
        margin-right: 4px;
      }
      button {
        cursor: pointer;
        display: inline-block;
        text-transform: uppercase;
        border-radius: var(--eit-button-border-radius, 4px);
        padding-top: var(--eit-button-padding-y, 7px);
        padding-bottom: var(--eit-button-padding-y, 7px);
        padding-left: var(--eit-button-padding-x, 10px);
        padding-right: var(--eit-button-padding-x, 10px);
        transition: all 0.2s ease-in;
        -webkit-transition: all 0.2s ease-in;
        background-color: var(--eit-button-background-color, #1565c0);
        color: var(--eit-button-text-color, #fff);
        font-size: var(--eit-button-font-size, 0.9em);
        border: var(--eit-button-border, none);
        line-height: 1.5em;
      }
      button:hover {
        background-color: var(--eit-button-hover-background-color, #eee);
        color: var(--eit-button-hover-text-color, #333);
        --eit-icon-color: var(--eit-button-hover-text-color);
      }
      button.disabled:hover {
        background-color: var(--eit-button-background-color, #303030);
        color: var(--eit-button-text-color, #fff);
        --eit-icon-color: var(--eit-button-hover-text-color);
      }
      .disabled {
        opacity: 0.5;
      }
    `;
  }

  static get properties() {
    return {
      icon: { type: String },
      disabled: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.icon = "";
  }

  render() {
    return html`
      <button class="${this.disabled ? "disabled" : ""}" @click=${this.doClick}>
        ${this.icon
          ? html`
              <eit-icon icon="${this.icon}"></eit-icon>
            `
          : ""}
        <slot></slot>
      </button>
    `;
  }

  doClick(e) {
    if (this.disabled) {
      e.stopPropagation();
      this.dispatchEvent(
        new CustomEvent("eit-button-clicked-but-disabled", {
          bubbles: true,
          composed: true
        })
      );
    }
  }
}
customElements.define("eit-button", EitButton);
