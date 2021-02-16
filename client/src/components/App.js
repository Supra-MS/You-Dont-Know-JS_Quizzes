import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav.js';
import AddQuiz from './AddQuiz.js';
import Quiz from './Quiz.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            <Switch>
              <Route exact path={["/", "/quiz"]} component={Quiz} />
              <Route exact path="/addQuiz" component={AddQuiz} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;