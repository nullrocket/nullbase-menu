import Ember from 'ember';
import SpreadMixin from 'ember-spread';
import createFocusTrap from "npm:focus-trap";

export default Ember.Mixin.create(SpreadMixin, {
  gestures: Ember.inject.service(),
  classNames: [ 'nb-menu-backdrop' ],
  classNameBindings: [ 'size' ],
  size: 'size-1',

  focusTrap: null,
  init: function () {
    this._super(...arguments);
    this.get('parentView.menuInstances').pushObject(this);
    this.set('parentComponent', this.get('parentView'));
  },

  willDestroy: function () {
    var self = this;
    let gestures = this.get('gestures');
    gestures.removeEventListener($('body').get(0), 'down', this._bodyDown);

    this.get('parentComponent.menuInstances').removeObject(this);
    this._super(...arguments);
  },
  parentComponent: null,

  defaultAction: '',
  keyPress: function ( e ) {
    if ( this.get('defaultAction') ) {
      var key = e.which || e.keyCode;
      if ( key === 13 && e.target.nodeName !== 'TEXTAREA' ) {
        e.stopPropagation();
        e.preventDefault();

        this.send(this.get('defaultAction'));
      }
    }
  },
  actions: {
    remove: function () {
      this.$().removeClass('show');
      this.$('.nb-menu').removeClass('show');
      var self = this;

      this.get('focusTrap').deactivate();
      //  setTimeout(function () {
      self.get('menuManager.actionHandler').send('remove', self)
      //   }, 175);

    },
    show: function () {
      var self = this;
      Ember.run.later(this, function () {
        //      this.$().addClass('show');
        var focusTrap = createFocusTrap(this.get('tetherObject').element,{
          initialFocus:this.get('tetherObject').element
        });
        this.set('focusTrap', focusTrap);
        focusTrap.activate();
      }, 1);


    }
  },

  _bodyDown: null,

  didInsertElement(){
    this._super(...arguments);
    let gestures = this.get('gestures');
    let self = this;
    this._bodyDown = function () {

      gestures.removeEventListener($('body').get(0), 'down', self._bodyDown, true);
      self.send('remove', self);
    };
    gestures.addEventListener($('body').get(0), 'down', this._bodyDown);

  }

});
