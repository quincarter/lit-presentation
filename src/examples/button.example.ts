import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

declare type ButtonColors =
  | "primary"
  | "secondary"
  | "danger"
  | "info"
  | "success";

@customElement("x-my-button")
export class MyButton extends LitElement {
  /**
   * Button Title will control the text state inside of our button
   * @attr button-title
   * @default ""
   */
  @property({ type: String, attribute: "button-title" })
  title = "";

  /**
   * Button Color will control the color of our button
   * @attr button-color
   * @default ""
   */
  @property({ type: String, attribute: "button-color" })
  color: ButtonColors = "primary";

  /**
   * Button Disabled will control the enabled or disabled state of our button
   * @attr button-disabled
   * @default ""
   */
  @property({ type: Boolean, attribute: "button-disabled" })
  disabled = false;

  static get styles() {
    return [
      css`
        .btn {
          border-radius: 10px;
          color: #fff;
          cursor: pointer;
          padding: 0.5rem;
        }

        button[disabled] {
          cursor: not-allowed;
        }

        .primary {
          color: #000;
          background: PapayaWhip;
        }

        .secondary {
          background: rebeccapurple;
        }

        .danger {
          background: tomato;
        }

        .info {
          color: #000;
          background: skyblue;
        }

        .success {
          color: #000;
          background: MediumAquamarine;
        }
      `,
    ];
  }

  render() {
    return html`
      <button class="btn ${this.color}" ?disabled="${this.disabled}">
        ${this.title}
      </button>
    `;
  }
}
