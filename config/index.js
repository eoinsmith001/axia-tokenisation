var pin_false = '__source_key_with_no_pin_set__';
var pin_true  = '__source_key_with_pin_set__';
module.exports = {
  axia: 'https://sandbox.axiaepay.com/gate',
  key: function(pin) {
    return pin ? pin_true : pin_false; 
  }
}
