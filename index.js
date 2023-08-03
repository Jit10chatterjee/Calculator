function Solve(val) {
    var v = document.getElementById('scrn');
    v.value += val;
}
function Result() {
    var num1 = document.getElementById('scrn').value;
    var num2 = eval(num1.replace("%", "/100"));
    document.getElementById('scrn').value = num2;
}
function Clear() {
    var inp = document.getElementById('scrn');
    inp.value = '';
}
function Back() {
    var ev = document.getElementById('scrn');
    ev.value = ev.value.slice(0, -1);
}