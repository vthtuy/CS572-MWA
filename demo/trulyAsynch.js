// lecture02

function asyncReal(data, callback) {
    process.nextTick(callback, data, 'asaad');
}
asyncReal('foo', (r, name) => console.log(r, name));
console.log('Done');

// function asyncFake(data, callback) {
//     callback('resultFake');
// }
// asyncFake('fooFake', (r) => console.log(r) );
// console.log('DoneFake');