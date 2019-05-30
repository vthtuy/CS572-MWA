
( () => new Promise( (resolve) => resolve('promise')  ) ) ()
.then( (p) => console.log(p) )

setImmediate( () => console.log('immediate') );
setTimeout( () => console.log('timeout'), 0 );
queueMicrotask( () => console.log('microtask') );
process.nextTick( () => console.log('nextnodetick'));