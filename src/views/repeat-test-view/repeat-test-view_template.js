import {html} from 'lit-element';
import {repeat} from 'lit-html/directives/repeat';
import '../repeat-item/repeat-item_element.js';

export function render() {
  return html`
    ${repeat(
      this.items,

      (item) => item.id,

      ({id}, index) => html`
        <div>
          <repeat-item
            .id=${id}
            .index=${index}
          >
          </repeat-item>
          <button
            @click=${() => this.moveOption(index, 1)}
          >
            Down
          </button>
          <button
            @click=${() => this.moveOption(index, -1)}
          >
            Up
          </button>
        </div>
      `,
    )}
    <div>
      <button
        @click=${this.addOption}
      >
        Add Option
      </button>
    </div>

  `;
}
  

