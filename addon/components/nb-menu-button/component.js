import Ember from 'ember';

import NbButton from 'nullbase-button/components/nb-button/component';
import _ from "npm:lodash";
export default NbButton.extend({
  menu:'',

  actions:{
    tap(){

        Ember.run.next(this,function() {
            var self = this;
            var mergedArgs = Ember.Object.create(
              //  { doStuff: "remove", bob: "boo", tether: this.get('element'), alert: getOwner(this).lookup('route-action:helpers').compute([ 'alert' ]) }
                _.merge(this.get('args')?this.get('args'):{},{tether: this.get('element'),owner:this })
            );
            //    self.get('dialogManager.actionHandler').send('show', dialogComponent, context);

       self.get('menuManager.actionHandler').send('show', this.get('menu'), mergedArgs);

        });




    }
  },
  willDestroyElement(){
    this.get('menuManager.actionHandler').send('remove', this.get('childMenu'));
    this._super(...arguments);

  }

});
