import React, { useContext } from 'react';
import { Accordion, Card, AccordionContext } from 'react-bootstrap';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);
  const isCurrentEventKey = currentEventKey === eventKey;
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    callback && callback(eventKey)
  });

  return (
    <div
      style={{ color: isCurrentEventKey ? 'aqua' : '' }}
      onClick={decoratedOnClick}>
      <span className={`fa ${isCurrentEventKey ? 'fa-chevron-down' : 'fa-chevron-right'} `}></span>
      {children}
    </div>
  );
}

function QuizList({ data, handleClick, currentQuizData, currentQuizIndex, nextQuiz, previousQuiz, bgColorState, isClicked, bookIndex, chapterIndex, setActiveBookTopic, toggleExplanation, isExplainHidden, chapterName }) {
  let bgColor = '', ansInitBgColor = '', ansLength, isCompleted;

  return (
    <div className="row">
      <div className="col-md-4">
        <h5>Quiz Topics<span></span></h5>
        <Accordion defaultActiveKey={String(bookIndex)}>
          {data.length && data.map((bTopic, i) => {
            return (
              <Card key={i} className="list-group" >
                <Card.Header>
                  <ContextAwareToggle eventKey={`${i}`}>
                    {`${i+1}. ${bTopic.book_name}`}
                  </ContextAwareToggle>
                </Card.Header>
                {bTopic.chapters.map((ch, j) => {
                  return (
                    <Accordion.Collapse className={`list-group-item ${j === chapterIndex ? "active" : ""}`} key={j} eventKey={`${i}`}>
                      <Card.Body onClick={() => {
                        setActiveBookTopic(i, j, ch.chapter_name);
                      }}>{ch.chapter_name}</Card.Body>
                    </Accordion.Collapse>
                  )
                })}
              </Card>
            );
          })}
        </Accordion>
      </div>

      <div className="col-md-8 quiz-list">
        <h5 className="quiz-list-h">Question {`${currentQuizIndex + 1}`} of {`${currentQuizData.length}`} </h5>
        <h5 className="quiz-list-h" style={{color: "rgb(123, 33, 248)"}}>Chapter: {chapterName}</h5>
        <div className="col-md-10 quiz">
          <h6 style={{ color: 'white', fontSize: "22px" }} >{currentQuizData[currentQuizIndex].question}</h6>
          {currentQuizData[currentQuizIndex].answers.map((option, optIndex) => {
            return (
              <ul key={optIndex} className="list-group">
              {option.answers.length ?
                <li style={{ backgroundColor: option.bgColor, color: option.bgColor === '#81af81' || option.bgColor === '#f98181' ? 'white' : '' }} className={`list-group-item `} onClick={() => {
                  bgColor = currentQuizData[currentQuizIndex].correctAnswer === optIndex ? '#81af81' : '#f98181';
                  ansInitBgColor = option.bgColor
                  ansLength = currentQuizData[currentQuizIndex].answers.length;
                  isCompleted = currentQuizData[currentQuizIndex].isCompleted;
                  handleClick(optIndex, bgColor, ansInitBgColor, ansLength, isCompleted);
                }}>{option.answers}</li>
              : null}
              </ul>
            );
          })}
        </div>
        <div className="explain">
          {isClicked && bgColorState === '#81af81' ?
            <div style={{ color: 'green' }}>Correct Answer!!</div>
            : ''}
          {isClicked && bgColorState === '#f98181' ?
            <div style={{ color: 'red' }}>Incorrect!! Try Again!!</div>
            : ''}
          {isClicked &&
            <div>
              <button className="btn btn-info" onClick={() => {
                toggleExplanation();
              }}>{`${isExplainHidden ? 'Show Explanation' : 'Hide Explanation'}`}</button>
              {!isExplainHidden && <p>{currentQuizData[currentQuizIndex].explain}</p>}
            </div>
          }
        </div>
        <div className="quiz-list-btn">
          {!isClicked && <div>Please select an answer</div>}
          <button className="btn btn-secondary prev-btn" onClick={previousQuiz}>{`<< Previous`}</button>
          <button className="btn btn-secondary next-btn" onClick={() => {
            if (isClicked) {
              nextQuiz(bgColorState, currentQuizIndex)
            }
          }}>{`Next >>`}</button>
        </div>
      </div>


    </div>
  )
}

export default QuizList;