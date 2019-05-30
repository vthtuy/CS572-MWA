Array.prototype.pluck = function(pluck) {
    let arr = this;    
    setImmediate(() => f(arr, pluck));
}
var f = function(arr, pluck){
    let result = 0;
    if (pluck) {
        result = arr.reduce(function(a, b) {
            return Math.max(a, b);
        }); 
    } else {
        result = arr.reduce(function(a, b) {
            return Math.min(a, b);
        }); 
    }
    console.log(result);
    return result;
}

console.log('start');
[1,2,3,4,5,6,7,8].pluck(true);
[1,2,3,4,5,6,7,8].pluck(false);
console.log('end');