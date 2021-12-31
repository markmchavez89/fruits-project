const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema ({
  name: { type: String, required: [true, "Please check your name entry, no name specified!"] },
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Yummy, sweet/sour, crunchy.  Keeps the doctor away"
});

//fruit.save();

//mongoose.connect("mongodb://localhost:27017/peopleDB", { useNewUrlParser: true });

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit ({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit!"
});

//pineapple.save();

const strawberry = new Fruit({
  name: "Strawberry",
  rating: 8,
  review: "Yumma in my tumma"
});

strawberry.save();

const chikikita = new Person({
  name: "Chikikita",
  age: 10,
  favoriteFruit: strawberry
});

chikikita.save();

const person = new Person ({
  name: "Aida",
  age: 10,
  favoriteFruit: pineapple
});

//person.save();

const orange = new Fruit ({
  name: "Orange",
  rating: 10,
  review: "Sour and juicy deliciousness."
});

const banana = new Fruit ({
  name: "Banana",
  rating: 8,
  review: "Sweet and mushy. Lots of calories for energy"
});

const coconut = new Fruit ({
  name: "Coconut",
  rating: 10,
  review: "Crunchy, sweet, satisfying"
});

// Fruit.insertMany([orange, banana, coconut], function(err){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("Successfully saved all the fruits to fruitsDB!");
//   }
// });

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  };
});

Fruit.deleteOne({name: "Pineapple"}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Deleted Successfully!");
  }
});

// Person.deleteMany({name: "Orange"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted Orange!");
//   }
// });
