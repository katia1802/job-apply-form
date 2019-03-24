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
            <Form />
          </main>
          <Footer />
        </div>
      </body>
    );
  }
}

export default App;
