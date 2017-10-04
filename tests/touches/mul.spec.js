var fs = require('fs');
eval(fs.readFileSync('src.js')+'');
const assert = require('assert');


var mul3 = new Mul(3);

assert.equal(6, mul3.press(2));
assert.equal(-45, mul3.press(-15));
assert.equal(true, mul3.available(1));
assert.equal(false, mul3.available(0));
assert.equal('x3', mul3.toString());


assert.deepStrictEqual(['Mul', 6], parseTouch('x6'));
assert.deepStrictEqual(['Mul', -5], parseTouch('x-5'));
