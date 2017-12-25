// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Uable to connent to MongoDB server');
  }
  console.log('Connect to MongoDB server');
  db.collection("Todos").find().toArray().then((docs)=> {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fech todos', err);
  });

  // db.close();
});
