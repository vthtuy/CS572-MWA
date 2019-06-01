var express = require('express');
var router = express.Router();
const axios = require('axios');
const {from} = require('rxjs');
const {shareReplay} = require('rxjs/operators');

var axiosPromise = axios.get('https://randomuser.me/api/?results=10&page=1');
// axiosPromise.then((response) => { 
//   return response;
// }).catch((error) => {
//   console.log(error);
// });

// asynchronous use async & await
async function getUserData(res) {
  try {
    var data = await axiosPromise; 
    res.send(data.data); 
  } catch(error) {
    console.log(error);
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  // ================ using async/await ==================
  // getUserData(res);
  
  // ================ Observable ==================
  console.log('= Observable =');
  obs$ = from(axiosPromise).pipe(shareReplay(1));
  obs$.subscribe(data => res.send(data.data.results));
  
});

module.exports = router;
