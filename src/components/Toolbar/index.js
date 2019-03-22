import React, { Component } from "react";
import Hamburger from "../../images/Hamburger_icon.svg.png";
import './Toolbar.scss'

class Toolbar extends Component {
  render() {
    return (
      <nav>
        <button>
          <img className="Hamburger_icon" alt="" src={Hamburger} />
        </button>

        <ul>
          <li><a href="https://endouble.com/" target="blank">About us</a></li>
          <li><a href="https://workingatendouble.com/vacancies/" target="blank">Job offers</a></li>
          <li><a href="https://workingatendouble.com/departments/" target='blank'>Departments</a></li>
          <li><a href="https://workingatendouble.com/contact/" target='blank'>Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Toolbar;
