import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <Header />
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
