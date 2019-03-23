import React, { Component } from "react";
import "./Toolbar.scss";
import ToggleSideButton from "../SideDrawer/ToogleSideButton.js";

class Toolbar extends Component {
  render() {
    const { drawerClickHandler } = this.props;
    return (
      <nav className="toolbar__navigation">
        <div className="toolbar__toogle-button">
          <ToggleSideButton click={drawerClickHandler} />
        </div>
        <div className="toolbar__logo">Logo</div>
        <div className="spacer" />
        <ul className="toolbar__navigation-items">
          <li className="toolbar__navigation-item">
            <a
              className="toolbar__navigation-itemlink"
              href="https://endouble.com/"
              target="blank"
            >
              About us
            </a>
          </li>
          <li className="toolbar__navigation-item">
            <a
              className="toolbar__navigation-itemlink"
              href="https://workingatendouble.com/vacancies/"
              target="blank"
            >
              Job offers
            </a>
          </li>
          <li className="toolbar__navigation-item">
            <a
              className="toolbar__navigation-itemlink"
              href="https://workingatendouble.com/departments/"
              target="blank"
            >
              Departments
            </a>
          </li>
          <li className="toolbar__navigation-item">
            <a
              className="toolbar__navigation-itemlink"
              href="https://workingatendouble.com/contact/"
              target="blank"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Toolbar;
