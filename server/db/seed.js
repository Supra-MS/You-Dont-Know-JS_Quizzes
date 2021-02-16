const BookQuiz = require('./models/bookQuiz.js');
const bookQuizData = require('../data/bookQuizData.js');

const insertSampleBookQuizData = function() {
  BookQuiz.insertMany(bookQuizData)
    .then(() => {
      console.log('Successfully inserted book quiz data!!');
    })
    .catch((e) => {
      console.log('Error: ', e);

    })
};

insertSampleBookQuizData();