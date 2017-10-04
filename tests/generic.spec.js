var fs = require('fs');
eval(fs.readFileSync('src.js')+'');
const assert = require('assert');

/*
 * Parse, should not work
 */
assert.throws(() => {parseTouch('sd6f4qsq68qsd1')});
assert.throws(() => {parseTouch('++1')});
assert.throws(() => {parseTouch('1/2')});
assert.throws(() => {parseTouch('>>>')});
assert.throws(() => {parseTouch('+')});

/*
 * createFunctionForTouch
 */
var touchAdd1 = createFunctionForTouch('+1');
assert.equal(2, touchAdd1.press(1));

var touchShiftRight = createFunctionForTouch('<<');
assert.equal(4, touchShiftRight.press(42));
