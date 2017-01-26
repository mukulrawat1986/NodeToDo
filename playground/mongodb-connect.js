// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// connect to the MongoDB server
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // // Insert a new document into Todos collection
    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // // Insert a new document into Users collection
    // db.collection('Users').insertOne({
    //     name: 'Mukul Rawat',
    //     age: 30,
    //     location: 'Dehradun'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to enter user', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // }); 

    // close the connection to MongoDB server
    db.close();
});