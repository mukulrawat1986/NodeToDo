const {MongoClient, ObjectID} = require('mongodb');

// connect to the MongoDB server
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID("588866f76689ee0ef4029846")
    // }).toArray()
    // .then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // })
    // .catch((err) => {
    //     console.log('Unable to fetch Todos', err);
    // }); 

    // db.collection('Todos').find({
    //     completed: false
    // }).count()
    // .then((count) => {
    //     console.log(`Todos count ${count}`);
    // })
    // .catch((err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    db.collection('Users').find({
        name: 'Mukul Rawat'
    }).count()
    .then((count) => {
        console.log(`Users count ${count}`)
    })
    .catch((err) => {
        console.log('Unable to fetch Users');
    });


    // close the connection to MongoDB server
    // db.close();
});