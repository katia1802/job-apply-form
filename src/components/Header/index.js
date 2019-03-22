import React, { Component } from "react";
import Workspace from "../../images/Workspace.jpg";
import "./Header.scss";
import Toolbar from "../Toolbar";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <Toolbar />
          </div>
            <div>
              <img alt="" src={Workspace} />
            </div>
        </header>
      </div>
    );
  }
}

export default Header;
