import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('slide-1')
export class SlideOne extends LitElement {
  static styles = [css``];

  render() {
    return html`Slide 1 Works`;
  }
}
