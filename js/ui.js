/**
 * Update Coefficients in table
 */
var updateCoefficients = function () {
    $('#w00').text($('input[name=w00x]').val());
    $('#w01').text($('input[name=w01x]').val());
    $('#w02').text($('input[name=w02x]').val());
    $('#w03').text($('input[name=w03x]').val());
    $('#w04').text($('input[name=w04x]').val());

    $('#w10').text($('input[name=w10x]').val());
    $('#w11').text($('input[name=w11x]').val());
    $('#w12').text($('input[name=w12x]').val());
    $('#w13').text($('input[name=w13x]').val());
    $('#w14').text($('input[name=w14x]').val());
};

/**
 * Prepare given data to get answer
 * @returns {[]}
 */
var getAnswer = function () {
    return [
        1,
        parseFloat($('input[name=doors]').val()),
        parseFloat($('input[name=fuel]').val()),
        parseFloat($('input[name=seats]').val()),
        parseFloat($('input[name=weight]').val())
    ]
};

/**
 * Get new coefficients after learning
 */
var getCoefficientsAfterLearning = function () {
    $('#w00').text(n.w0[0].toFixed(2));
    $('#w01').text(n.w0[1].toFixed(2));
    $('#w02').text(n.w0[2].toFixed(2));
    $('#w03').text(n.w0[3].toFixed(2));
    $('#w04').text(n.w0[4].toFixed(2));

    $('#w10').text(n.w1[0].toFixed(2));
    $('#w11').text(n.w1[1].toFixed(2));
    $('#w12').text(n.w1[2].toFixed(2));
    $('#w13').text(n.w1[3].toFixed(2));
    $('#w14').text(n.w1[4].toFixed(2));
};

/**
 * Setup everything before doing stuff
 */
var setup = function () {
    $('#w00').text(n.w0[0]);
    $('#w01').text(n.w0[1]);
    $('#w02').text(n.w0[2]);
    $('#w03').text(n.w0[3]);
    $('#w04').text(n.w0[4]);

    $('#w10').text(n.w1[0]);
    $('#w11').text(n.w1[1]);
    $('#w12').text(n.w1[2]);
    $('#w13').text(n.w1[3]);
    $('#w14').text(n.w1[4]);

    $('input[name=w00x]').val(n.w0[0]);
    $('input[name=w01x]').val(n.w0[1]);
    $('input[name=w02x]').val(n.w0[2]);
    $('input[name=w03x]').val(n.w0[3]);
    $('input[name=w04x]').val(n.w0[4]);
    $('input[name=w10x]').val(n.w1[0]);
    $('input[name=w11x]').val(n.w1[1]);
    $('input[name=w12x]').val(n.w1[2]);
    $('input[name=w13x]').val(n.w1[3]);
    $('input[name=w14x]').val(n.w1[4]);
};