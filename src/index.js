function debounce(funcion, delay) {
    var timerID;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timerID);
        timerID = setTimeout(function () {
            funcion.apply(void 0, args);
        }, delay);
    };
}
function multiplicar(a, b) {
    return a * b;
}
var funDebounce = debounce(multiplicar, 500);
var resultado = funDebounce(2, 2);
console.log(resultado);
