const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_app_db');

var db = mongoose.connection;

db.on('error', console.error.bind('console', 'error'));

db.once('open', function(){
    console.log('successfully connected to db');
})
