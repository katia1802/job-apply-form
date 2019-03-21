import React, { Component } from "react";
import Workspace from "../../images/Workspace.jpg";
import "./Header.scss";
import Hamburger from '../../images/Hamburger_icon.svg.png'
import './Header.scss'

class Header extends Component {
  render() {
    // const {toggleHamburger}= this.props
    return (
      <div>
        <header>
          <button><img className="Hamburger_icon" alt="" src={Hamburger}/></button>

          <div>
            <ul>
              <li>About us</li>
              <li>Job offers</li>
              <li>Candidates</li>
              <li>Contact</li>
            </ul>
          </div>
          <section>
            <div>
              <img alt="" src={Workspace} />
            </div>
          </section>
        </header>
      </div>
    );
  }
}

export default Header;
