import Ember from 'ember';
import NbMenuMixin from 'nullbase-menu/mixins/nb-menu';
import { module, test } from 'qunit';

module('Unit | Mixin | nb menu');

// Replace this with your real tests.
test('it works', function(assert) {
  let NbMenuObject = Ember.Object.extend(NbMenuMixin);
  let subject = NbMenuObject.create();
  assert.ok(subject);
});
