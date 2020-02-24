// const MongoClient = require('mongodb').MongoClient;

// // Connect to the db native form
// MongoClient.connect("mongodb://localhost:27017/simple-auth", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
//   },(err, db) => {
//     if (err) throw new Error(err);
//     console.log("Connection sucessful");
//     db.close();
//   }
// );

const mongoose = require('mongoose'); // conectarme a mongo  desde express 

mongoose.connect('mongodb://localhost:27017/simple-auth',{ 
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connection sucessfull'))