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
            <h1 className="main--form-title">Job Apply Form</h1>
            <p className="main--form-text">Please fill the form </p>
            <p className="main--form-subtext">
              All areas with <span className="main--form-asterik">*</span>{" "}
              required
            </p>
            <Form />
          </main>
            <Footer />
        </body>
      </div>
    );
  }
}

export default App;
