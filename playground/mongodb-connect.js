//const MongoClient  = require('mongodb').MongoClient;

const {MongoClient,ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
   const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false
  // },(err,result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

//  Insert new doc into user (name,age,location)

 // db.collection('user').insertOne({
 //
 //   name: 'Subrat',
 //   age: 21,
 //   location: 'Bhubaneswar'
 // },(err,result) => {
 //   if (err) {
 //     return console.log('Unable to find the data');
 //   }
 //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
 // });

  client.close();
});
