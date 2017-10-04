var fs = require('fs');
eval(fs.readFileSync('src.js')+'');
const assert = require('assert');


assert.deepStrictEqual(['+2', '+2', '+2', 'x5'], solve(-2, ['+2', 'x5'], 20));
assert.deepStrictEqual(['x3', '+/-', '<<', '-5', '-5'], solve(10, ['-5', 'x3', '+/-', '<<'], -13));
