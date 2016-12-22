import Ember from 'ember';
import NbMenuTriggerMixin from 'nullbase-menu/mixins/nb-menu-trigger';
import { module, test } from 'qunit';

module('Unit | Mixin | nb menu trigger');

// Replace this with your real tests.
test('it works', function(assert) {
  let NbMenuTriggerObject = Ember.Object.extend(NbMenuTriggerMixin);
  let subject = NbMenuTriggerObject.create();
  assert.ok(subject);
});
