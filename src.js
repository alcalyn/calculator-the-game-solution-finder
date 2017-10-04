/**
 * Solves a calculator level.
 *
 * @param {Integer} initial     Initial number
 * @param {String[]} touches    Available touches
 * @param {Integer} target      Number to reach
 * @param {Function} log        Log function, optional
 *
 * @returns {String[]}          Touches to press to win
 */
function solve(initial, touches, target, log) {
    var touchesFunctions = createFunctionForTouches(touches);

    return treeSearch(initial, touchesFunctions, target, log);
}

/**
 * @param {Integer} initial     Initial number
 * @param {Function[]} touches  Parsed available touches
 * @param {Integer} target      Number to reach
 * @param {Function} log        Log function, optional
 *
 * @returns {Object[]}          Nodes path from start to win
 */
function treeSearch(initial, touches, target, log) {
    if (!log) {
        log = function (s) {};
    }

    var root = {
        depth: 0,
        parent: null,
        touch: null,
        value: initial,
        childs: []
    };

    var frontier = [root];
    var currentDepth = 0;

    while (frontier.length > 0) {
        var node = frontier.shift();

        for (var i = 0; i < touches.length; i++) {
            var touch = touches[i];

            if (!touch.available(node.value)) {
                continue;
            }

            var child = {
                depth: node.depth + 1,
                parent: node,
                touch: touch,
                value: touch.press(node.value),
                childs: []
            };

            if (child.depth > currentDepth) {
                log('move '+child.depth+'...');
                currentDepth = child.depth;
            }

            if (child.value === target) {
                return createPath(child);
            }

            node.childs.push(child);
            frontier.push(child);
        }
    }

    throw 'No solution found';
}

function createPath(node) {
    var path = [];
    var currentNode = node;

    do {
        path.push(currentNode.touch.toString());
        currentNode = currentNode.parent;
    } while (null !== currentNode.parent);

    return path.reverse();
}

function parseTouch(s) {
    var args;

    if (args = s.match(/^([\+\-]{1}[0-9]+)$/)) {
        return ['Sum', parseInt(args[1])];
    }

    if (args = s.match(/^x(\-?[0-9]+)$/)) {
        return ['Mul', parseInt(args[1])];
    }

    if (args = s.match(/^\/(\-?[0-9]+)$/)) {
        return ['Div', parseInt(args[1])];
    }

    if (args = s.match(/^([0-9]+) \=\> ([0-9]+)$/)) {
        return ['Replace', parseInt(args[1]), parseInt(args[2])];
    }

    if (args = s.match(/^\<\<$/)) {
        return ['ShiftRight'];
    }

    if (args = s.match(/^\+\/\-$/)) {
        return ['Opposite'];
    }

    if (args = s.match(/^([0-9])$/)) {
        return ['Unshift', parseInt(args[1])];
    }

    throw 'No function found for '+s;
}

function createFunctionForTouches(touches) {
    var functions = [];

    for (var i = 0; i < touches.length; i++) {
        functions.push(createFunctionForTouch(touches[i]));
    }

    return functions;
}

function createFunctionForTouch(touch) {
    var parsed = parseTouch(touch);
    var functionName = parsed[0];
    var functionArgs = Array.prototype.slice.call(parsed, 1);

    return eval('new '+functionName+'('+functionArgs.join(', ')+')');
}


/*
 * Touches
 */

function Sum(n) {
    this.press = function (value) {
        return value + n;
    };

    this.available = function (value) {
        return true;
    };

    this.toString = function () {
        return (n > 0 ? '+' : '')+n;
    };
}

function Mul(n) {
    this.press = function (value) {
        return value * n;
    };

    this.available = function (value) {
        return 0 !== value;
    };

    this.toString = function () {
        return 'x'+n;
    };
}

function Div(n) {
    this.press = function (value) {
        return value / n;
    };

    this.available = function (value) {
        return (0 !== value) && (0 === (value % n));
    };

    this.toString = function () {
        return '/'+n;
    };
}

function Replace(pattern, replace) {
    this.press = function (value) {
        return parseInt(value.toString().replace(new RegExp(pattern, 'g'), replace));
    };

    this.available = function (value) {
        return -1 !== value.toString().indexOf(pattern);
    };

    this.toString = function () {
        return pattern+' => '+replace;
    };
}

function ShiftRight() {
    this.press = function (value) {
        return parseInt(value.toString().substr(0, value.toString().length - 1));
    };

    this.available = function (value) {
        return value <= -10 || value >= 10;
    };

    this.toString = function () {
        return '<<';
    };
}

function Opposite() {
    this.press = function (value) {
        return -value;
    };

    this.available = function (value) {
        return 0 !== value;
    };

    this.toString = function () {
        return '+/-';
    };
}

function Unshift(n) {
    this.press = function (value) {
        return value * 10 + (n * Math.sign(value));
    };

    this.available = function (value) {
        return true;
    };

    this.toString = function () {
        return n+'';
    };
}
