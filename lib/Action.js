"use strict";

var db = require('ciab-bookshelf');

require('ciab-validation');

module.exports = db.Model.extend({
  tableName: 'actions',

  initialize: function () {
    this.on('saving', function () {
      var err = this.validate();
      if (err) { throw err; }
    }.bind(this));
  },

  validation: require('ciab-actions/validation'),
});
