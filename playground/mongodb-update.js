const {MongoClient,ObjectID}  = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
   const db = client.db('TodoApp')

   db.collection('Todos').findOneAndUpdate({
     _id: new ObjectID('5c2ccff2df08b1786834cfbb')
   },{
     $set: {
       completed:true
     }
   },{
     returnOriginal: false
   }).then((result) =>
   {
      console.log(result);
   })

  //client.close();
 });
