var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("we're connected!");
    // start();
});

function start(accounts, users) {

    // var kittySchema = new mongoose.Schema();

    db.collection('account').insertMany([accounts], function (err, result) {
        if (err) {
            // handle error
            console.log(err);
        } else {
            // handle success
            console.log(result);
            console.log('success!!!')
        }
    });

    //retrieve info
}

module.exports = {
    start
};