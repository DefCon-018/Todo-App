const express = require('express');
const path = require('path');
const port = 8000;
const app = express();
const db = require('./config/mongoose');
const Todo = require('./models/data');

app.use(express.urlencoded());
app.use(express.static('Assets'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function(req, res){
    Todo.find({}, function(err, todos){
        if(err){
            console.log('error', err);
            return;
        }
        res.render('home', {
            tasks: todos
        })
    })
})

app.post('/create-task', function(req, res){
    console.log(req.body);
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function(err, newTask){
        if(err){
            console.log("error", err);
        }
        console.log(newTask);
        return res.redirect('back');
    })
})

app.get('/delete-task', function(req, res){
    let id= req.query.id;
    console.log(id);
    Todo.findByIdAndDelete(id, function(err){
        if(err){
            console.log(err);
            return;
        }
        res.redirect('back');
    })
})

app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Server is running successfully at port : ${port}`);
})