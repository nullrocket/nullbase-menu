import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nb-menu-button', 'Integration | Component | nb menu button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nb-menu-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nb-menu-button}}
      template block text
    {{/nb-menu-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
