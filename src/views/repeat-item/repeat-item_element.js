import {LitElement, customElement, property, html} from 'lit-element';

@customElement('repeat-item')
class RepeatItemElement extends LitElement {
  @property()
  id;

  @property()
  index;

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
        }
      </style>

      <div>
        Id: ${this.id} Index: ${this.index}
      </div>
    `;
  }
}