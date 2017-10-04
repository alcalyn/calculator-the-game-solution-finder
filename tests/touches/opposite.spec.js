var fs = require('fs');
eval(fs.readFileSync('src.js')+'');
const assert = require('assert');

var opposite = new Opposite();

assert.equal(-12345, opposite.press(12345));
assert.equal(90, opposite.press(-90));
assert.equal(false, opposite.available(0));
assert.equal(true, opposite.available(1));
assert.equal('+/-', opposite.toString());


assert.deepStrictEqual(['Opposite'], parseTouch('+/-'));
