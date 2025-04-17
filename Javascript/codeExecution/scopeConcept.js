//Closures
function z() {
    var b = 200;
    function x(){
        var a = 7;
        function y() {
            console.log(a, b);
        }
       y();
    }
    x();
}
z();

// ------------------------------------
function solve( str, substr) {
    lowerStr = str.toLowerCase();
    lowerSubStr = substr.toLowerCase();
    return lowerStr.indexOf(lowerSubStr);
}