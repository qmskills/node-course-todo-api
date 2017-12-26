var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required : true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) =>{
//   console.log('Save todo', doc);
// }, (error) => {
//     console.log('Unable to save Todo');
// });
//
// var otherTodo = new Todo({
//     text: 'Something to do'
// });
//
// otherTodo.save().then((doc) =>{
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (error) =>{
//   console.log('Unable to save', error);
// })
