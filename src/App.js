import React, { Component } from "react";
import "./App.scss";
import Header from './components/header'
import Form from './components/Form'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <body>
          <Form/>
          <Footer/>
        </body>
      </div>
    );
  }
}

export default App;
