const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const BookQuiz = require('./db/models/bookQuiz.js');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + './../client/dist'));
app.use('/', router);

router.get('/quiz', (req, res) => {
  BookQuiz.find({})
    .then((data) => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({ message: error.message || 'Error in retrieving the quiz data' });
    });
});

router.get('/quiz/:id', (req, res) => {
  BookQuiz.findById(req.params.id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: `Unable to find the quiz topic by id ${req.params.id}` });
      } else {
        res.send(data);
      }
    })
    .catch(error => {
      res.status(500).send({ message: `Error retrieving the quiz topic by id` });
    })
});

router.post('/quiz', (req, res) => {
  let quizDataReq = {
    question: req.body.question,
    answers: req.body.answers,
    correctAnswer: Number(req.body.correctAnswer),
    explain: req.body.explain
  };

  BookQuiz.findOneAndUpdate({ _id: 7, 'chapters.chapter_id': 1 }, {
    $push: {
      'chapters.$.quizzes': quizDataReq
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send({ message: error.message || 'Error in adding quiz' });
    });

});

app.listen(port, () => console.log(`*** Server is listening on http://localhost:${port} ***`));