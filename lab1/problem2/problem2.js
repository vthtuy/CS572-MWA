const {from} = rxjs;
const {flatMap} = rxjs.operators;
function promise() {
    var promise = fetch('https://randomuser.me/api/'); 
    promise.then( (data) => data.json() )
            .then( (data) => document.getElementById("result").value 
                        = JSON.stringify( {name : data.results[0].name, location:data.results[0].location  }) )
            .catch( (err) => console.log(err))
}
async function asyncAwait() {
    try {        
        var promise = await fetch('https://randomuser.me/api/');
        const data = await promise.json(); 
        console.log('async ...');
        document.getElementById("result").value =JSON.stringify( {name : data.results[0].name, location:data.results[0].location  });
       // return JSON.stringify( {name : data.results[0].name, location:data.results[0].location  });
    } catch(err) {
        console.log(err);
    }
}
// ??? why when we create 1 more function, it displays Promise <Pending...>
function asyncPending() { 
    console.log('asyn start');
    console.log(asyncAwait());
    console.log('asynDone');
  //  document.getElementById("result").value = asyncFetch();
}
 
 
function observable() {
    let promise =  fetch('https://randomuser.me/api/'); 
    from(promise).pipe(flatMap (data => data.json()) )
        .subscribe( (data) => {
            document.getElementById("result").value =JSON.stringify( {name : data.results[0].name, location:data.results[0].location  });
        } ); 
}
console.log('Done');
