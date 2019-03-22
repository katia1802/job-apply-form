import React, { Component } from 'react';
import './SideDrawer.scss'

class SideDrawer extends Component {
    render() { 
        return (
            <nav>
                <ul>
          <li className="sideDrawer__navigation-item"><a className="sideDrawer__navigation-itemlink" href="https://endouble.com/" target="blank">About us</a></li>
          <li className="sideDrawer__navigation-item"><a className="sideDrawer__navigation-itemlink" href="https://workingatendouble.com/vacancies/" target="blank">Job offers</a></li>
          <li className="sideDrawer__navigation-item"><a className="sideDrawer__navigation-itemlink" href="https://workingatendouble.com/departments/" target='blank'>Departments</a></li>
          <li className="sideDrawer__navigation-item"><a className="sideDrawer__navigation-itemlink" href="https://workingatendouble.com/contact/" target='blank'>Contact</a></li>
                </ul>
            </nav>
          );
    }
}
 
export default SideDrawer;