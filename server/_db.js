'use strict';

var Sequelize = require('sequelize');
var sessionMiddleware = require('./session.router')

var databaseURI = 'postgres://localhost:5432/auther';

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;
