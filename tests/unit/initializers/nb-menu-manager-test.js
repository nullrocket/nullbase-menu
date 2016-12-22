import Ember from 'ember';
import NbMenuManagerInitializer from 'dummy/initializers/nb-menu-manager';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | nb menu manager', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  NbMenuManagerInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
