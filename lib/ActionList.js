"use strict";

var db = require('ciab-bookshelf');

var Action = require('./Action');

module.exports = db.Collection.extend({
  model: Action,
});
