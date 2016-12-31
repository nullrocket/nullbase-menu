import Ember from 'ember';
const { getOwner } = Ember;
import RouteAction from 'ember-route-action-helper/helpers/route-action';

export default Ember.Route.extend({

  appState: Ember.inject.service('app-state'),
  actions: {
    toggleLeftSidebar(){
      this.set('appState.isLeftSidebarOpen', !this.get('appState.isLeftSidebarOpen'));
    },
    toggleRightSidebar(){
      this.set('appState.isRightSidebarOpen', !this.get('appState.isRightSidebarOpen'));
    },
    alert(){
      console.log(arguments);
    },
    showDialog: function ( dialogComponent, context) {

        var self = this;
      var args = Ember.Object.create(
        { doStuff: "remove", bob: "boo", tether:$('#tether-me').get(0), alert: getOwner(this).lookup('route-action:helpers').compute([ 'alert' ]) }
      );
      //    self.get('dialogManager.actionHandler').send('show', dialogComponent, context);
      self.get('menuManager.actionHandler').send('show', 'test-menu', args);


    },
  },
  renderTemplate(){

    this._super(...arguments);
  /*  this.render('dummy-sidebar', {
      outlet: 'left-sidebar',
      into: 'application'
    });*/
    this.render('content', {
      outlet: 'content',
      into: 'application'
    });
    this.render('header', {
      outlet: "header-content",
      into: 'application'
    });
    /*this.render('dummy-right-sidebar', {
      outlet: 'right-sidebar',
      into: 'application'
    });

    var self = this;

    this.render('nested-header-content', {
      outlet: "another-header-content",
      into: 'dummy-content'
    });
    this.render('nested-right-sidebar-content', {
      outlet: "right-sidebar",
      into: 'dummy-content'
    });

    this.render('nested-left-sidebar-content', {
      outlet: "left-sidebar",
      into: 'dummy-content'
    });
    this.render('nested-content', {
      outlet: "content",
      into: 'dummy-content'
    });*/
  }
});
