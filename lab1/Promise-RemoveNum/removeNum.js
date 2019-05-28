Array.prototype.removeNum = function(num){ 
    let arr = this;
    let pro = new Promise(function ( resolve, reject) {           
            resolve(arr.filter(x => x!=num)); 
    });

    return pro;
} 

console.log('Start');
console.log([1,3,4,2,1].removeNum(1));
//[1,3,4,2,1].removeNum(1).then( (data) => console.log(data)).catch( (err) => console.log('Sorry: ' + err));
//[2,3,4].removeNum(1).then( (data) => console.log(data)).catch( (err) => console.log('Sorry: ' + err));
console.log('Finish');
