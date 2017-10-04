$(init);

function init() {
    $('#find').click(function () {
        solveFromInputs();
    });
}

function solveFromInputs() {
    var initial = parseInt($('#initial').val());
    var target = parseInt($('#target').val());
    var touches = parseTouchesInput($('#touches').val());

    var result = solve(initial, touches, target);

    displaySolution(result);
}

function parseTouchesInput(input) {
    return input.split(',').map(s => {
        return s.trim();
    });
}

function displaySolution(touches) {
    var $solution = $('#solution');

    $solution.empty();
    $solution.append($('<p class="text-center text-success lead">Solution found!</p>'));
    $solution.append($('<p class="text-center">Press these touches to win:</p>'));

    var $p = $('<p class="touches">');

    $.each(touches, (index, touch) => {
        $p.append($('<span class="touch">'+touch+'</span> '));
    });

    $solution.append($p);
}
