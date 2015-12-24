var chai = require('chai');
var url = require('url');
var request = require('request');
var config = require('../config');
var expect = chai.expect;

describe('tokenisation api', function(done) {
  describe('pin set for source key (UMhash required)', function() {
    it('should respond with a tokenised card when no redirect url is provided', function(done) {
      this.timeout(10000);
      var form = require('./data/form_ok_noredirect_pin');
      request.post({
        url: config.axia,
        form: form
      }, function(err, response) {
        expect(err).to.not.exist;
        expect(response.body).to.contain('UMstatus=Approved');
        expect(response.body).to.contain('UMcardRef');
        expect(response.body).to.contain('UMcardType');
        expect(response.body).to.contain('UMmaskedCardNum');
        done();
      });
    });
    it('should respond with a tokenised card redirect when redirect url is provided', function(done) {
      this.timeout(10000);
      var form = require('./data/form_ok_redirect_pin');
      request.post({
        url: config.axia,
        form: form
      }, function(err, response) {
        expect(err).to.not.exist;
        expect(response.headers.location).to.contain('UMstatus=Approved');
        expect(response.headers.location).to.contain('UMcardRef');
        expect(response.headers.location).to.contain('UMcardType');
        expect(response.headers.location).to.contain('UMmaskedCardNum');
        done();
      });
    });
  });
  describe('no pin set for source key (no UMhash required)', function() {
    it('should respond with a tokenised card when no redirect url is provided', function(done) {
      this.timeout(10000);
      var form = require('./data/form_ok_noredirect');
      request.post({
        url: config.axia,
        form: form
      }, function(err, response) {
        expect(err).to.not.exist;
        expect(response.body).to.contain('UMstatus=Approved');
        expect(response.body).to.contain('UMcardRef');
        expect(response.body).to.contain('UMcardType');
        expect(response.body).to.contain('UMmaskedCardNum');
        done();
      });
    });
    it('should respond with a tokenised card redirect when redirect url is provided', function(done) {
      this.timeout(10000);
      var form = require('./data/form_ok_redirect');
      request.post({
        url: config.axia,
        form: form
      }, function(err, response) {
        expect(err).to.not.exist;
        expect(response.headers.location).to.contain('UMstatus=Approved');
        expect(response.headers.location).to.contain('UMcardRef');
        expect(response.headers.location).to.contain('UMcardType');
        expect(response.headers.location).to.contain('UMmaskedCardNum');
        done();
      });
    });
  });
});
