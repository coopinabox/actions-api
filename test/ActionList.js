"use strict";

var expect = require('chai').expect;

var ActionList = require('../lib/ActionList');

describe("ActionList", function () {
  var actionList = new ActionList();

  describe(".create", function () {
    beforeEach(function () {
      actionList.reset();
    });

    it("should create valid actions", function (done) {
      actionList.create({
        'name': 'valid_name',
        'description': 'valid_description',
      }).then(function (action) {
        expect(action.id)
          .to.be.a('number');
        expect(action.get('name'))
          .to.be.a('string')
          .and.equal('valid_name');
        expect(action.get('description'))
          .to.be.a('string')
          .and.equal('valid_description');
        done();
      }).catch(function (error) {
        expect(error).to.not.exist;
      });
    });

    it("should not allow invalid data", function (done) {
      actionList.create({
        "name": "areallylongnamethatissolong",
        "description": "valid_description",
      }).then(function (data) {
        expect(false).to.be.true;
      }).catch(function (error) {
        expect(error).to.exist;
        expect(error.name).to.equal("Name must be at most 10 characters");
        done();
      });
    });
  });
});

