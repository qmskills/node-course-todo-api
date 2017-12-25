const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Uable to connent to MongoDB server');
  }
  console.log('Connect to MongoDB server');
  db.collection('Todos').deleteMany({text: 'Eat'}).then((result) =>{
      console.log(result);
  });

  db.close();
});
