const {MongoClient,ObjectID}  = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
   const db = client.db('TodoApp')

   //delete many
    //   db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) =>
    // {
    //   console.log(result);
    // })

    // delete one
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>
    // {
    //   console.log(result);
    // })

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>
    //  {
    //    console.log(result);
    //  })


    db.collection('User').deleteMany({name:"Subrat"});
    db.collection('User').findOneAndDelete({_id: new ObjectID("5c2cd299df08b1786834d09a")}).then((result) => {
      console.log(JSON.stringify(result,undefined,2));
    })



  //client.close();
 });
