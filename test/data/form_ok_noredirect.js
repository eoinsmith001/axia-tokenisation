var config  = require('../../config');

var command = 'cc:save';
var key     = config.key(false);
var card    = 4000100011112224;
var expiry  = '0916';

module.exports = {
  UMcommand: command,
  UMkey: key,
  UMcard: card,
  UMexpir: expiry,
};
