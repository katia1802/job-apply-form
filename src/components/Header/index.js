import React, { Component } from "react";
import Workspace from "../../images/Workspace.jpg";
import "./Header.scss";
import Toolbar from "../Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../Backdrop";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    };
    this.drawerToogleClickHandler= this.drawerToogleClickHandler.bind(this)
  }

  drawerToogleClickHandler() {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  }
  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop />;
    }
    return (
      <div>
        <header className="header">
          <Toolbar 
          drawerClickHandler={this.drawerToogleClickHandler}
          />
          {sideDrawer}
          {backdrop}
        </header>

        <div>
          <img alt="" src={Workspace} />
        </div>
      </div>
    );
  }
}

export default Header;
