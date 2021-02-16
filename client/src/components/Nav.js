import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/topics" className="navbar-brand">Quick Quiz</a>
      <div className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to={"/quiz"} className="navbar-link">Take Quiz</Link>
          <Link to={""}> | </Link>
        </li>
        <li className="navbar-item">
          <Link to={"/addQuiz"} className="navbar-link">Add Quiz</Link>
        </li>
      </div>
    </nav>
  )
}

export default Nav;