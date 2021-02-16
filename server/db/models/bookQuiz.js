let mongoose = require('mongoose');
const db = require('../index');

let bookQuizSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
    index: true
  },
  book_name: {
    type: String
  },
  chapters: {
    type: Array
  }
},
  { timestamps: true }
);

bookQuizSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});


module.exports = mongoose.model('bookQuiz', bookQuizSchema);