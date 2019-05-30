// IP of 
const dns = require('dns');
const util = require('util')

// =========== Normal way ================
// var ip = dns.resolve4('www.mum.edu', function(err, address, family) {
//     console.log(address); 
// }); 

// =========== Normal way - anonymous/arrow function ================
// ip = dns.resolve4('www.mum.edu', (err, address, family) =>  console.log(address) ); 


const promiseResolve = util.promisify(dns.resolve4);

// =========== Promisify =================
// promiseResolve('mum.edu').then( (d) => console.log(d) );

// =========== async await ===============
async function tuyvo() {
    var pro = await promiseResolve('mum.edu');
    console.log(pro);
}

tuyvo();
console.log('Done'); 