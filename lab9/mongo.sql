-- connect to mongo on cloud

mongo "mongodb+srv://cluster0-hiuwf.mongodb.net/mwa" --username admin


mongoimport --host Cluster0-shard-0/cluster0-shard-00-00-hiuwf.mongodb.net:27017,cluster0-shard-00-01-hiuwf.mongodb.net:27017,cluster0-shard-00-02-hiuwf.mongodb.net:27017 --ssl --username admin --password <<pwd>> --authenticationDatabase admin --db mwa --collection zips --type json --file zips.json
  
  
 1. 
 db.zips.aggregate([
	{$match : {state: 'WA'} },
	{$project: {zip: '$_id', _id : 0, state : 1} }
 ])
 
 2. 
 db.zips.aggregate([
	{$match : {pop : {$lt : 5000} } },
	{$project: {zip: '$_id', _id: 0, pop: 1}  }
 ])
 
 3. 
 db.zips.aggregate([
	{$group : {_id: '$city' , state: {$first: '$state'}, count : {$sum : 1} } },
	{$match : {count : {$gt : 1} } },					
	{$project : {state : '$state', city : '$_id', number_zip : '$count', _id : 0 } },
	{$sort : { state : 1, city : 1} }
 ])
 
 --- combine city & state into _id
  
 db.zips.aggregate([
	{$group : {_id: {city : '$city', state: '$state'}, count : {$sum : 1} } },
	{$match : {count : {$gt : 1} } },			
	{$project : {state : '$_id.state', city : '$_id.city', number_zip : '$count', _id : 0 } },
	{$sort : { state : 1, city : 1} }
 ])
 
 4.
 db.zips.aggregate([
	{
		$group: {_id: {state: '$state', city : '$city'} , population : {$sum : '$pop' } }
	},
	 
	{$sort:{ '_id.state' : 1, population : 1} },
	
	{
		$group: {_id : '$_id.state', city: {$first: '$_id.city'}, population : {$first : '$population'}  }
	} ,
	{$project: {state: '$_id', city: '$city', population: '$population' }}, 
	{$sort: {state : 1} }
 ])
 
 
 
 
 
 
 
 
 
 
 
 