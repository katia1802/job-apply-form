import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerOpen: false
    };
    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  toggleHamburger(event) {
    console.log("event target", event);
    if (event.target.className.includes("Hamburger_icon")) {
      this.setState({
        hamburgerOpen: true
      });
    }
  }
  render() {
    return (
      <div className="App">
        <body>
          <Header toggleHamburger={this.toggleHamburger} />
          <main>
            <Form />
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </div>
    );
  }
}

export default App;
