const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.use(express.urlencoded());
app.use(express.static('Assets'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let allTask = [
    {
        description: "hello",
        date: '20-10-1999',
        category: 'personal'
    }
]

app.get('/', function(req, res){
    return res.render('home', {
        tasks: allTask
    });
})

app.post('/create-task', function(req, res){
    console.log(req.body);
    return res.redirect('back');
})

app.post('/test', function(req, res){
    console.log(req.body);
    return res.redirect('back');
})

app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`Server is running successfully at port : ${port}`);
})