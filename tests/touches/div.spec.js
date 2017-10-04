var fs = require('fs');
eval(fs.readFileSync('src.js')+'');
const assert = require('assert');


var div5 = new Div(5);

assert.equal(2, div5.press(10));
assert.equal(-3, div5.press(-15));
assert.equal(false, div5.available(1));
assert.equal(false, div5.available(0));
assert.equal(true, div5.available(25));
assert.equal('/5', div5.toString());

assert.deepStrictEqual(['Div', 6], parseTouch('/6'));
assert.deepStrictEqual(['Div', -2], parseTouch('/-2'));
