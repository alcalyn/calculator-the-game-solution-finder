var fs = require('fs');
eval(fs.readFileSync('src.js')+'');
const assert = require('assert');


var replace12 = new Replace(1, 2);

assert.equal(223, replace12.press(123));
assert.equal(222, replace12.press(121));
assert.equal(-222, replace12.press(-121));
assert.equal(false, replace12.available(34));
assert.equal(true, replace12.available(123456789));
assert.equal('1 => 2', replace12.toString());

var replace1234 = new Replace(12, 34);

assert.equal(34345, replace1234.press(12345));
assert.equal(3403401, replace1234.press(1201201));
assert.equal(-234, replace1234.press(-212));
assert.equal(false, replace1234.available(34));
assert.equal(true, replace1234.available(123456789));
assert.equal('12 => 34', replace1234.toString());


assert.deepStrictEqual(['Replace', 1, 3], parseTouch('1 => 3'));
assert.deepStrictEqual(['Replace', 12, 34], parseTouch('12 => 34'));
