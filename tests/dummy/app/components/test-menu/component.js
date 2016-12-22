import Ember from 'ember';
import MenuMixin from 'nullbase-menu/mixins/nb-menu';
import layout from './template';

export default Ember.Component.extend(MenuMixin,{
  layout,
  actions:{
    doStuff: function(){
      this.sendAction("doStuff",this);
    },
    alert: function(){

      this.sendAction('alert',"DUDEEE");
    }
  }
});
