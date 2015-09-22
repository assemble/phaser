require('mocha');
require('should');
var assert = require('assert');
var verb = require('..');
var app, len;

describe('app', function () {
  beforeEach(function() {
    app = verb();
    len = Object.keys(app.views.includes).length;
  });

  describe('add include', function () {
    it('should add includes to `app.views.includes`:', function () {
      app.include('a.hbs', {path: 'a.hbs', content: 'a'});
      app.include('b.hbs', {path: 'b.hbs', content: 'b'});
      app.include('c.hbs', {path: 'c.hbs', content: 'c'});
      assert((Object.keys(app.views.includes).length - len) === 3);
    });
  });
});
