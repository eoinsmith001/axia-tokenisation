var md5     = require('md5');
var config  = require('../../config');

var command = 'cc:save';
var key     = config.key(true);
var card    = 4000100011112224;
var expiry  = '0916';
var pin   = '3344';
var seed  = 8899;
var amount = 999;
var invoice = '999';
var hash = 'm/'+seed+'/'+md5(command+':'+pin+':'+amount+':'+invoice+':'+seed)+'/';
var redirect = 'http://localhost:8080/ok';

module.exports = {
  UMhash: hash,
  UMcommand: command,
  UMredir: redirect,
  UMkey: key,
  UMcard: card,
  UMexpir: expiry,
  UMamount: amount,
  UMinvoice: invoice
};
