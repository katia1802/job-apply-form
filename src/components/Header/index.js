import React, { Component } from "react";
import Workspace from "../../images/Workspace.jpg";
import "./Header.scss";
import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <Toolbar />
          <SideDrawer/>
        </header>

        <div>
          <img alt="" src={Workspace} />
        </div>
      </div>
    );
  }
}

export default Header;
