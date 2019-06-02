var orm = require("../config/orm.js");

var taco = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("tacos", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("tacos", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("tacos", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = taco;