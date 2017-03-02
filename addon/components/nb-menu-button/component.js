import Ember from 'ember';

import NbButton from 'nullbase-button/components/nb-button/component';
import _ from "npm:lodash";
export default NbButton.extend({
  menu:'',
  menuObject:null,
  actions:{
    tap(){

        Ember.run.next(this,function() {
            var self = this;
            var mergedArgs = Ember.Object.create(
              //  { doStuff: "remove", bob: "boo", tether: this.get('element'), alert: getOwner(this).lookup('route-action:helpers').compute([ 'alert' ]) }
                _.merge(this.get('args')?this.get('args'):{},{tether: this.get('element') })
            );
            //    self.get('dialogManager.actionHandler').send('show', dialogComponent, context);

          var menuObject=  self.get('menuManager.actionHandler').send('show', this.get('menu'), mergedArgs);
          self.set('menuObject',menuObject);
        });




    }
  },
  willDestroyElement(){
    this.get('menuManager.actionHandler').send('remove', this.get('menuObject'));
  }

});
