/* jshint node: true */
'use strict';

module.exports = {
  name: 'nullbase-menu',
  included:function(app){
    this._super.included.apply(this, arguments);
    app.import('vendor/tether.js');
  }
};
