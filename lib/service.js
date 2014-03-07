"use strict";

var ActionList = require('./ActionList');

module.exports = {

  setup: function (app) {
    this.actionList = new ActionList();
  },

  find: function (params, cb) {
    cb(null, this.actionList.toJSON());
  },

  get: function(id, params, cb) {
    cb(null, this.actionList.get(id).toJSON());
  },

  create: function (data, params, cb) {
    this.actionList.create(data, params)
      .then(function (model) {
        cb(null, model);
      }, function (err) {
        cb(err);
      });
  },

  update: function (id, data, params, cb) {
    this.actionList.get(id)
      .save(data, { patch: true })
      .then(function (model) {
        cb(null, model);
      }, function (err) {
        cb(err);
      });
  },

  remove: function (id, params, cb) {
    this.actionList.remove(
      this.actionList.get(id)
    ).destroy().then(function (result) {
      cb();
    }, function (err) {
      cb(err);
    });
  },
};
