var fs = require('fs');
var process = require('process');
eval(fs.readFileSync('src.js')+'');

var args = process.argv;
args.shift();
args.shift();

var initial = parseInt(args.shift());
var target = parseInt(args.pop());
var touches = args;

console.log('initial: '+initial);
console.log('target: '+target);
console.log('touches: ['+touches.join(']  [')+']');

var path = solve(initial, touches, target, console.log);

console.log('');
console.log('searching solution...');

console.log('');
console.log('SOLUTION FOUND: ['+path.join(']  [')+']');
console.log('');
