var fs = require('fs');
eval(fs.readFileSync('src.js')+'');
const assert = require('assert');

var shiftRight = new ShiftRight();

assert.equal(1234, shiftRight.press(12345));
assert.equal(9, shiftRight.press(90));
assert.equal(9, shiftRight.press(99));
assert.equal(-9, shiftRight.press(-99));
assert.equal(-9, shiftRight.press(-90));
assert.equal(true, shiftRight.available(10));
assert.equal(true, shiftRight.available(-10));
assert.equal(true, shiftRight.available(-42));
assert.equal(false, shiftRight.available(0));
assert.equal(false, shiftRight.available(1));
assert.equal('<<', shiftRight.toString());


assert.deepStrictEqual(['ShiftRight'], parseTouch('<<'));
