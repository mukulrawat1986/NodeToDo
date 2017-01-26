const {MongoClient, ObjectID} = require('mongodb');

// connect to the MongoDB server
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'})
    // .then((result) => {
    //     console.log(result);
    // })
    // .catch((err) => {
    //     console.log('Unable to delete.');
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'})
    // .then((result) => {
    //     console.log(result);
    // })
    // .catch((err) => {
    //     console.log('Unable to delete');
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false})
    // .then((result) => {
    //     console.log(result);
    // })
    // .catch((err) => {
    //     console.log('Unable to find and delete');
    // }); 

    // db.collection('Users').deleteMany({name: 'Mukul Rawat'})
    // .then((result) => console.log(result))
    // .catch((err) => console.log('Unable to delete', err));

    db.collection('Users').findOneAndDelete({_id: new ObjectID("58887bfc68b9500fee2b4731")})
    .then((result) => console.log(result))
    .catch((err) => console.log('Unable to delete', err));

    // close the connection to MongoDB server
    // db.close();
});