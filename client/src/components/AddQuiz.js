import React, { Component } from 'react';
import http from '../../src/http-client-axios.js';

class AddQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      answers: [],
      code: '',
      correctAnswer: '',
      explain: '',
      isSubmitted: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.postQuiz = this.postQuiz.bind(this);
    this.newQuiz = this.newQuiz.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  postQuiz() {
    let { question, code, answer1, answer2, answer3, answer4, correctAnswer, explain } = this.state;
    let data = {
      answers: [answer1, answer2, answer3, answer4],
      question,
      code,
      correctAnswer: (Number(correctAnswer)),
      explain
    };

    console.log('Post data b4: ', data)

    http.post('/quiz', data)
      .then(response => {
        console.log('Response: ', response.data);
      })
      .catch(error => {
        console.log('Error posting the quiz: ', error);
      });

    this.setState({
      question: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      answers: [],
      correctAnswer: '',
      explain: '',
      code: '',
      isSubmitted: true
    });
  }

  newQuiz() {
    this.setState({
      question: '',
      code: '',
      answers: '',
      correctAnswer: '',
      isSubmitted: false
    });
  }

  render() {
    let { question, code, explain, correctAnswer, isSubmitted, answer1, answer2, answer3, answer4 } = this.state;

    return (
      <div className="jumbotron">
        <form onSubmit={(e) => {
          e.preventDefault();
          this.postQuiz();
        }}>
          <div className="form-group">
            <label>* Question: </label>
            <textarea className="form-control que" type="text" name="question" value={question}
              onChange={this.handleInputChange}
              onClick={this.newQuiz}
              required></textarea>
            <label>Code:</label>
            <textarea className="form-control que" type="text" name="code" value={code}
              onChange={this.handleInputChange}
              onClick={this.newQuiz}
            ></textarea>
          </div>
          <div className="form-group">
            <label>* Option 0: </label>
            <textarea className="form-control ans" type="text" name="answer1" value={answer1}
              onChange={this.handleInputChange}
              required></textarea>
          </div>
          <div className="form-group">
            <label>* Option 1: </label>
            <textarea className="form-control ans" type="text" name="answer2" value={answer2}
              onChange={this.handleInputChange}
              required></textarea>
          </div>
          <div className="form-group">
            <label>Option 2: </label>
            <textarea className="form-control ans" type="text" name="answer3" value={answer3}
              onChange={this.handleInputChange} ></textarea>
          </div>
          <div className="form-group">
            <label>Option 3: </label>
            <textarea className="form-control ans" type="text" name="answer4" value={answer4}
              onChange={this.handleInputChange} ></textarea>
          </div>
          <div className="form-group">
            <label>* Correct Answer: </label>
            <textarea className="form-control ca" type="text" name="correctAnswer" value={correctAnswer}
              onChange={this.handleInputChange}
              placeholder="Type one option as 0 or 1 "
              required></textarea>
          </div>
          <div className="form-group">
            <label>Explanation: </label>
            <textarea className="form-control ans" type="text" name="explain" value={explain}
              onChange={this.handleInputChange} ></textarea>
          </div>
          {isSubmitted ? (<h6 className="successmsg">Successfully added Quiz. Add another one! </h6>) : null}
          <button className="btn btn-success"
            style={{ margin: '10px' }}>Add</button>
          <button className="btn btn-danger" onClick={this.newQuiz}>Reset</button>
        </form>
      </div>
    )
  }
}

export default AddQuiz;

