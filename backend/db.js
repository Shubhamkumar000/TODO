const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shubham25004:lmaolmao123123@cluster0.keqps.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
