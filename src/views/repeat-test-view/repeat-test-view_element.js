import {LitElement, customElement, property} from 'lit-element';
import {render} from './repeat-test-view_template.js';

@customElement('repeat-test-view')
class RepeatTestViewElement extends LitElement {
  @property()
  items = [];

  render() {
    return render.apply(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this.items = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
    ];
  }

  addOption() {
    this.items.push({
      id: this.items.length + 1,
    });

    this.requestUpdate();
  }

  moveOption(index, offset) {
    const nextIndex = index + offset;

    if (nextIndex < 0 || nextIndex >= this.items.length) {
      return;
    }

    const currentOpt = this.items[index];
    const nextOpt = this.items[nextIndex];

    this.items[index] = nextOpt;
    this.items[nextIndex] = currentOpt;

    this.requestUpdate();
  }
}
