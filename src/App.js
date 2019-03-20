import React, { Component } from 'react';
import './App.css';
import Workspace from '../src/images/Workspace.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>About us</li>
              <li>Job & Talent</li>

              <li>Contact</li>
            </ul>
          </nav>
          <section>
            <div>
              <img alt="" src={Workspace} />
            </div>
          </section>
        </header>

        <body>
          <main>
            <div>
              <h2>Job Apply Form</h2>
              <p>Please fill the form </p>
              <p>
                All areas with <span>*</span> required
              </p>
              <form>
                <div>
                  <label>Date Birth</label>
                  <select />
                </div>
                {/* <div>
                  <label>email address</label>
                  <input>holi</input>
                </div>
                <div>
                  <label>Gender</label>
                  <select />
                </div>
                <div>
                  <label>Address</label>
                  <input />
                </div>
                <div>
                  <label>Zipcode</label>
                  <input>OJO VALOR NUMERICO</input>
                </div> */}
              </form>
            </div>
          </main>
          <footer>
            <div>
              <div>back to top</div>
              <nav>
                <ul>
                  <li>Github</li>
                  <li>Linkedin</li>
                  <li>Twitter</li>
                </ul>
              </nav>
            </div>
          </footer>
        </body>
      </div>
    );
  }
}

export default App;
