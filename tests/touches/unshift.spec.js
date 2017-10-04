var fs = require('fs');
eval(fs.readFileSync('src.js')+'');
const assert = require('assert');


var unshift = new Unshift(5);

assert.equal(123455, unshift.press(12345));
assert.equal(-15, unshift.press(-1));
assert.equal('5', unshift.toString());


assert.deepStrictEqual(['Unshift', 3], parseTouch('3'));
