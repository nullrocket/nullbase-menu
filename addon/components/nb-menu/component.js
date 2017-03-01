import Ember from 'ember';
import layout from './template';
import async from "npm:async";
import _ from "npm:lodash";
const { inject } = Ember;
export default Ember.Component.extend({
    layout,
    gestures: inject.service(),
    classNames: [ 'nb-menu' ],
    classNameBindings: [ 'elevation' ],

    elevation: 'elevation-6dp',
    attributeBindings: [ 'tabindex' ],
    tabindex: -1,
    actions: {
        remove()
        {
            this.parentView.send("remove");
        }
    }
    ,
    willDestroyElement()
    {
        this._super(...arguments);
        let gestures = this.get('gestures');
        gestures.removeEventListener(this.get('element'),'down',this._down);
        $(this.get('element')).removeClass('pre-show');
        $(this.get('element')).removeClass('show');
        this.$().off("keyup");
        this.$().off("keydown");

    }
    ,

    didInsertElement()
    {
        this._down = function ( e ) {


        };

        this.get('gestures').addEventListener(this.get("element"), "down", this._down);
        this._super(...arguments);
        let self = this;
        $(self.get('element')).addClass('pre-show');
        $(self.get('element')).removeClass('show');
        $(self.get('element')).removeClass('anims');
        async.series([ function ( callback ) {

            if ( self.get('tether') ) {
                let width = self.$().outerWidth();
                let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                var pos = $(self.get('tether')).offset();

                var side = (pos.left < (w / 2)) ? "left" : "right";

                $(self.get('element')).addClass('expand-' + side);
                var tetherObject = new Tether({
                    element: self.get('element'),
                    target: self.get('tether'),
                    attachment: 'top ' + side,
                    targetAttachment: 'top ' + side,
                  //  offset: side ==="right" ? "0 "+20+"px" :"0 0",
                    optimizations: {

                        gpu: true
                    },
                  constraints: [
                    {
                      to: 'scrollParent',
                      attachment: 'both',
                      pin:true
                    }
                  ]
                });
                self.set('parentView.tetherObject', tetherObject);

            }


            $(self.get('element')).removeClass('pre-show');
            $(self.get('element')).addClass('anims');

            callback();


        }, function ( callback ) {
            async.nextTick(function () {
                callback();
                Ember.run.later(function () {
                    $(self.get('element')).addClass('show');
                }, 30);

            })


        } ], function () {});










        var currentElement = this.$('.item:first').get(0);
        var $dropDownElement = this.$();
        this.get('element').focus();



        this.$().on('keydown', function (evt) {
            var key = evt.which || evt.keyCode;

            if (key !== 9 && key !== 27 && key !== 38 && key !== 40) {

                evt.stopPropagation();
            }
            if (key === 27) {
                self.get('element').focus();
                self.send('remove');
            }


          // up arrow
          if ( key === 38 ) {
            evt.preventDefault();
            evt.stopPropagation();


              $(':tabbable.item:last',$(this).parent().get(0)).focus();

          }
          // down arrow
          if ( key === 40 ) {
              $(':tabbable.item:first',$(this).parent().get(0)).focus();

          }

        });














    }
});
