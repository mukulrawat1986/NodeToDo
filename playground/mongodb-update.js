const {MongoClient, ObjectID} = require('mongodb');

// connect to the MongoDB server
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // update a document
    db.collection('Todos').findOneAndUpdate({
        // filter
        _id: new ObjectID("5889b6135ae7cee6297b0b96"),
    }, {
        // update
        $set: {
            completed: true
        }
    }, {
        // options
        returnOriginal: false
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log('Unable to update', err); 
    });

    // update the Users collection
    db.collection('Users').findOneAndUpdate({
        // filter
        _id: new ObjectID("588866f76689ee0ef4029847")
    }, {
        // update
        $set: {
            name: 'Mukul Rawat'
        },
        $inc: {
            age: 1
        }
    }, {
        // options
        returnOriginal: false
    })
    .then((result) => {
        console.log(result);
    }) 
    .catch((err) => {
        console.log('Unable to update');
    });

    // close the connection to MongoDB server
    // db.close();
});