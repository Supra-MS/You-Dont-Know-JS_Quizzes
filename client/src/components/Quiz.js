import React from 'react';
import QuizList from './QuizList.js';
import http from '../../src/http-client-axios.js';

const setInitialState = () => {
  return {
    data: [],
    currentQuizData: [],
    currentQuiz: 0,
    correctAnswers: [],
    inCorrectAnswers: [],
    enablePlayAgain: false,
    finishedQuestions: [],
    bgColorState: '',
    isClicked: false,
    bookIndex: 0,
    chapterIndex: 0,
    chapterName: '',
    isExplainHidden: true,
    isNextChapter: false
  }
}

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = setInitialState();
    this.getQuizData = this.getQuizData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.nextQuiz = this.nextQuiz.bind(this);
    this.previousQuiz = this.previousQuiz.bind(this);
    this.getBookQuizById = this.getBookQuizById.bind(this);
    this.setActiveBookTopic = this.setActiveBookTopic.bind(this);
    this.toggleExplanation = this.toggleExplanation.bind(this);
    this.nextChapter = this.nextChapter.bind(this);
  }

  componentDidMount() {
    this.getQuizData(0);
  }

  handleClick(answerIndex, bgColor, ansInitBgColor, ansLength, isCompleted) {
    let { currentQuiz, currentQuizData } = this.state;
    if (!ansInitBgColor && !isCompleted) {
      currentQuizData[currentQuiz].answers[answerIndex].bgColor = bgColor;
      currentQuizData[currentQuiz].isCompleted = true;
      this.setState({ currentQuizData: currentQuizData, bgColorState: bgColor, isClicked: true })
    } else if (!ansInitBgColor && isCompleted) {
      for (let i = 0; i < ansLength; i++) {
        if (i === answerIndex) {
          currentQuizData[currentQuiz].answers[answerIndex].bgColor = bgColor;
          this.setState({ currentQuizData, bgColorState: bgColor, isClicked: true })
        } else {
          currentQuizData[currentQuiz].answers[i].bgColor = '';
          this.setState({ currentQuizData, bgColorState: bgColor })
        }
      }
    } else if (ansInitBgColor && isCompleted) {
      currentQuizData[currentQuiz].answers[answerIndex].bgColor = '';
      this.setState({ currentQuizData, bgColorState: '', isClicked: false })
    }
  }

  nextQuiz(bgColor, currentQuizIndex) {
    let { data, currentQuiz, currentQuizData, finishedQuestions, inCorrectAnswers, correctAnswers, bookIndex, chapterIndex } = this.state;

    finishedQuestions.push(currentQuiz);
    if (bgColor === '#81af81') {
      correctAnswers.push(currentQuizData[currentQuizIndex]);
    }

    if (bgColor === '#f98181') {
      inCorrectAnswers.push(currentQuizData[currentQuizIndex]);
    }

    if (currentQuizData.length - 1 > currentQuiz) {
      console.log('inside next quiz', currentQuizData.length - 1, currentQuiz, currentQuizData)
      this.setState({
        currentQuiz: currentQuiz + 1,
        isClicked: false,
        isNextChapter: false,
      });

    }
    else if (currentQuizData.length - 1 === currentQuiz) {
      console.log('inside === quiz', currentQuizData.length - 1, currentQuiz);
      if (data[bookIndex].chapters.length - 1 === chapterIndex) {
        console.log("=======+++++else========", chapterIndex)
        this.setState({
          isNextChapter: true,
          enablePlayAgain: true
        })

      } else {
        console.log("=======+++++========", chapterIndex);
        let chapterName = data[bookIndex].chapters[chapterIndex+1].chapter_name;
        this.setActiveBookTopic(bookIndex, chapterIndex + 1);
        this.setState({
          chapterIndex: chapterIndex + 1,
          isNextChapter: false,
          chapterName
        });

      }



    }
    else {
      console.log('inside else next quiz', currentQuizData.length - 1, currentQuiz)
      this.setState({
        enablePlayAgain: true
      });
    }
  }

  previousQuiz() {
    let { currentQuiz, finishedQuestions, inCorrectAnswers, correctAnswers, currentQuizData, bgColorState } = this.state;
    console.log('previous quiz: ', bgColorState)
    if (currentQuiz > 0) {
      finishedQuestions.pop();
      if (bgColorState === '#f98181') {
        inCorrectAnswers.pop();
      }
      if (bgColorState === '#81af81') {
        correctAnswers.pop();
      }
      this.setState({
        currentQuiz: currentQuiz - 1,
        isClicked: true,
        correctAnswers,
        inCorrectAnswers,
      });
      let currentQuizDataAnsLen = currentQuizData[currentQuiz].answers.length;
      for (let i = 0; i < currentQuizDataAnsLen; i++) {
        if (currentQuizData[currentQuiz - 1].answers[i].bgColor.length) {
          this.setState({
            bgColorState: currentQuizData[currentQuiz - 1].answers[i].bgColor,
          });
        }
      }
    }
  }

  nextChapter() {
    const { bookIndex } = this.state;
    this.getQuizData(bookIndex + 1);
    this.setState({
      currentQuiz: 0,
      correctAnswers: [],
      inCorrectAnswers: [],
      enablePlayAgain: false,
      finishedQuestions: [],
      bgColorState: '',
      isClicked: false,
      bookIndex: bookIndex + 1,
      chapterIndex: 0,
      isExplainHidden: true,
      isNextChapter: false,
    });

  }

  playAgain() {
    this.getQuizData(0);
    this.setState(setInitialState());
  }

  toggleExplanation() {
    this.setState({
      isExplainHidden: !this.state.isExplainHidden,
    });
  }

  setActiveBookTopic(bkId, chIndex, chName) {
    this.getBookQuizById(bkId, chIndex);
    this.setState({
      bookIndex: bkId,
      chapterIndex: chIndex,
      chapterName: chName,
      currentQuiz: 0,
      isNextChapter: false
    });
  }

  getBookQuizById(bkId, chIndex) {
    let { data } = this.state;
    let currentQuizData = data[bkId].chapters[chIndex].quizzes;
    let chapterName = data[bkId].chapters[chIndex].chapter_name;
    console.log('Current quiz data: ', currentQuizData);

    this.setState({
      currentQuizData,
      chapterName
    });
  }

  getQuizData(bkId) {
    http.get('/quiz')
      .then(response => {
        response.data.map(eData => {
          eData.chapters.map(ch => {
            ch.quizzes.map(data => {
              data.isCompleted = false;
              data.answers = data.answers.map((ans) => {
                return { answers: ans, bgColor: '' };
              });
            });
          });
        });

        this.setState({
          data: response.data,
        });
        console.log('Quiz data response: ', response.data);
      })
      .then(() => {
        this.getBookQuizById(bkId, 0);
      })
      .catch(error => {
        console.log('Error retrieving quiz data: ', error);
      })
  }

  render() {
    let { data, currentQuizData, currentQuiz, correctAnswers, inCorrectAnswers, finishedQuestions, bgColorState, isClicked, chapterIndex, isExplainHidden, bookIndex, isNextChapter, chapterName } = this.state;

    console.log(`
      chapterName: ${chapterName}
      bookIndex: ${bookIndex}
      chapterIndex: ${chapterIndex}
      isClicked: ${isClicked}
      bgColorState: ${bgColorState}
      Finished questions: [${finishedQuestions}],
      current quiz: ${currentQuiz}
      Incorrect Answers: [${inCorrectAnswers}]
      Correct Answers: [${correctAnswers}]
      isNextChapter: ${isNextChapter}
    `);

    return (
      <div className="jumbotron">
        {!this.state.enablePlayAgain ?
          <div>
            {currentQuizData.length &&
              <QuizList
                data={data}
                currentQuizData={currentQuizData}
                currentQuizIndex={currentQuiz}
                bgColorState={bgColorState}
                isClicked={isClicked}
                bookIndex={bookIndex}
                chapterIndex={chapterIndex}
                isExplainHidden={isExplainHidden}
                chapterName={chapterName}
                nextChapter={this.nextChapter}
                toggleExplanation={this.toggleExplanation}
                handleClick={this.handleClick}
                nextQuiz={this.nextQuiz}
                previousQuiz={this.previousQuiz}
                setActiveBookTopic={this.setActiveBookTopic}
              />
            }
          </div>
          :
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'rgb(69, 104, 105)', fontSize: '30px' }}>{`You have got ${correctAnswers.length} / ${finishedQuestions.length} Correct answers!!!`}</p>

            {data.length - 1 === bookIndex ?
              <div>
                <p style={{ color: 'rgb(69, 104, 105)', fontSize: '30px' }}>{`End of All Topics`} </p>
                <button className="btn-warning" onClick={this.playAgain.bind(this)}>Start Again</button>
              </div>
              :
              <div>
                <p style={{ color: 'rgb(69, 104, 105)', fontSize: '30px' }}>{`End of Topic ${bookIndex + 1}`} </p>
                <button className="btn-warning" onClick={this.nextChapter.bind(this)}>Go To Next Topic</button>
              </div>
            }
            {inCorrectAnswers.map((wrongQuiz, i) => {
              return (
                <div key={i} className="col-md-10 quiz">
                  <h6 style={{ color: 'white', fontSize: "22px" }} >{wrongQuiz.question}</h6>
                  {wrongQuiz.answers.map((option, optIndex) => {
                    console.log('inCorrect answers:')
                    return (
                      <ul key={optIndex} className="list-group">
                        {option.answers.length ?
                          <li style={{ backgroundColor: option.bgColor ? option.bgColor : optIndex === wrongQuiz.correctAnswer && '#81af81', color: option.bgColor || optIndex === wrongQuiz.correctAnswer ? 'white' : '' }} className={`list-group-item `}>{option.answers}</li>
                          : null}
                      </ul>
                    )
                  })}
                </div>
              );
            })}

            {correctAnswers.map((rightQuiz, i) => {
              return (
                <div key={i} className="col-md-10 quiz">
                  <h6 style={{ color: 'white', fontSize: "22px" }} >{rightQuiz.question}</h6>
                  {rightQuiz.answers.map((option, optIndex) => {
                    console.log('Correct answers:');
                    return (
                      <ul key={optIndex} className="list-group">
                        {option.answers.length ?
                          <li style={{ backgroundColor: option.bgColor, color: option.bgColor ? 'white' : '' }} className={`list-group-item `}>{option.answers}</li>
                          : null}
                      </ul>
                    )
                  })}
                </div>
              );
            })}
            {(inCorrectAnswers.length || correctAnswers.length) ?
              data.length - 1 === bookIndex ? <button className="btn-warning" onClick={this.playAgain.bind(this)}>Start Again</button>
                : <button className="btn-warning" onClick={this.nextChapter.bind(this)}>Go To Next Topic</button>
              : ''}

          </div>
        }
      </div>
    )
  }
}


export default Quiz;

/*
  Use this method inside handleClick() to go next quiz without using the next buttons
    this.setState({ currentQuizData: currentQuizData, correctAnswers, finishedQuestions }, () => {
      if (currentQuizData.length - 1 > currentQuiz) {
      setTimeout(() => {
        this.setState({
          currentQuiz: currentQuiz + 1
        })
      }, 100);
    } else {
      this.setState({
        enablePlayAgain: true
      });
    }
  });
*/

    // if (data[bookIndex].chapters.length - 1 === chapterIndex) {
    //   this.getQuizData(bookIndex + 1);
    //   this.setState({
    //     // data: [],
    //     // currentQuizData: [],
    //     currentQuiz: 0,
    //     correctAnswers: [],
    //     inCorrectAnswers: [],
    //     enablePlayAgain: false,
    //     finishedQuestions: [],
    //     bgColorState: '',
    //     isClicked: false,
    //     bookIndex: bookIndex + 1,
    //     chapterIndex: 0,
    //     isExplainHidden: true
    //   });

    // } else {
    //   console.log("=======+++++========", chapterIndex)
    //   this.getQuizData(bookIndex);
    //   this.setState({
    //     chapterIndex: chapterIndex + 1,
    //     currentQuiz: 0,
    //     correctAnswers: [],
    //     inCorrectAnswers: [],
    //     finishedQuestions: [],
    //     bgColorState: '',
    //     isClicked: false,
    //     isExplainHidden: true
    //   }, () => {
    //     // this.setActiveBookTopic(bookIndex, chapterIndex+1)

    //   })

    // }