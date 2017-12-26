const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Uable to connent to MongoDB server');
  }
  console.log('Connect to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5a3a8d5ce81ad6ad3cbecd19")
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });

  // db.close();
});
