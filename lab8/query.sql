1.
db.restaurant.find()

2. 
db.restaurant.find({}, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 })

3.
db.restaurant.find({}, {_id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 })

4. 
db.restaurant.find({}, {_id: 0, restaurant_id: 1, name: 1, district: 1, zipcode: 1 })

5. 
db.restaurant.find({district : "Bronx"}, {_id: 0, restaurant_id: 1, name: 1, district: 1, zipcode: 1 } )

6. 
db.restaurant.find({district : "Bronx"},  {_id: 0, restaurant_id: 1, name: 1, district: 1, zipcode: 1 }  ).sort({name : 1}).limit(5)

7.
db.restaurant.find({district : "Bronx"},  {_id: 0, restaurant_id: 1, name: 1, district: 1, zipcode: 1 }  ).sort({name : 1}).skip(5).limit(5)

8. 
db.restaurant.find({'address.coord' : {$lt : -95.754168} })

9.
db.restaurant.find( {cuisine : {$ne : "American "}, 'grades.score' : {$gt : 70}, 'address.coord' : {$lt : -65.754168} }, {cuisine: 1, 'grades.score' : 1, 'address.coord':1} )

10. first / start with
db.restaurant.find({name : {'$regex' : '^Wil'} }, {restaurant_id: 1, name: 1, district: 1, cuisine : 1})

11. end with
db.restaurant.find({name : {'$regex' : 'ces$'} }, {restaurant_id: 1, name: 1, district: 1, cuisine : 1})

12. contains / like & insensitive
db.restaurant.find({name : {'$regex' : 'Reg', '$options' : 'i'} }, {restaurant_id: 1, name: 1, district: 1, cuisine : 1})

13. OR
db.restaurant.find({district : 'Bronx', cuisine : {$in : ["American ", "Chinese" ] }  }, {restaurant_id: 1, name: 1, district: 1, cuisine : 1} )

14.
db.restaurant.find({district : {$in : ['Staten Island', 'Queens', 'Bronx', 'Brooklyn' ] } }, {restaurant_id: 1, name: 1, district: 1, cuisine : 1} )

15.
db.restaurant.find({district : {$nin : ['Staten Island', 'Queens', 'Bronx', 'Brooklyn' ] } }, {restaurant_id: 1, name: 1, district: 1, cuisine : 1} )

16.
db.restaurant.find({ 'grades.score' : {$lte : 10} }, {restaurant_id: 1, name: 1, district: 1, cuisine : 1, 'grades.score' : 1} )

17. 
db.restaurant.find({'address.coord.1':{$gt:42,$lte:52}},{_id:0,restaurant_id:1, name:1, address:1, coord:1})

18. 
db.restaurant.find().sort({name:1})

19. 
db.restaurant.find().sort({name:-1})

20. sort
db.restaurant.find().sort({cuisine:1, district:-1})

21.
db.restaurant.find({'address.coord' : {$elemMatch : {$type : 'double'} } }, {restaurant_id: 1, name: 1, 'address.coord' : 1})

22. first / start with
db.restaurant.find({name:/^Mad/},{_id:0, name:1, district:1, cuisine:1, 'address.coord':1})












