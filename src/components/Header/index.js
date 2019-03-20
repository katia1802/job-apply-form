import React, {Component}from 'react';
import Workspace from '../../images/Workspace.jpg'


class Header extends Component {
    render() { 
        return ( 

            <header>
            <nav>
              <ul>
                <li>About us</li>
                <li>Job offers</li>
                <li>Candidates</li>
                <li>Contact</li>
              </ul>
            </nav>
            <section>
              <div>
                <img alt="" src={Workspace} />
              </div>
            </section>
          </header>
  
         );
    }
}
 
export default Header;