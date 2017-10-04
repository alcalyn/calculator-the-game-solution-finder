var fs = require('fs');
eval(fs.readFileSync('src.js')+'');
const assert = require('assert');


var add5 = new Sum(5);

assert.equal(7, add5.press(2));
assert.equal(-10, add5.press(-15));
assert.ok(add5.available(0));
assert.equal('+5', add5.toString());

var sub5 = new Sum(-5);

assert.equal(-3, sub5.press(2));
assert.equal(-20, sub5.press(-15));
assert.equal(true, sub5.available(0));
assert.equal('-5', sub5.toString());


assert.deepStrictEqual(['Sum', 5], parseTouch('+5'));
assert.deepStrictEqual(['Sum', -2], parseTouch('-2'));
