const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    category: {
        type: String,
    },
    time: {
        type: Date
    }
})

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;