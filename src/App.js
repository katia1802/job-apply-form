import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <body>
        <div className="App">
          <Header />
          <main>
            <h1 className="main--form-title">Job Apply Form</h1>
            <p className="main--form-text">Please fill the form </p>
            <p className="main--form-subtext">
              All areas with <span className="form-asterisk">*</span>{" "}
              required
            </p>
            <Form />
          </main>
          <Footer />
        </div>
      </body>
    );
  }
}

export default App;
