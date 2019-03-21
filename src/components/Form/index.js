import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import "bootstrap/dist/css/bootstrap.min.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let main = this.state.startDate;
    console.log(main.format("L"));
  }

  render() {
    return (
      <div className="main">
        <h1 className="main--form-title">Job Apply Form</h1>
        <h1>
          {" "}
          VARIABLESSSSSSSSSSSSS PORQUE SINO SIGO PONIENDO FONTS Y COLORES Y
          LUEGO VOY A TENER QUE REEMPLAZAR TUDOOOOOOOOO!!!
        </h1>

        <p className="main--form-text">Please fill the form </p>
        <p className="main--form-subtext">
          All areas with <span className="main--form-asterik">*</span> required
        </p>
        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <label>First and Last Name</label>
            <input />
          </div>

          <div className="form--birthdate">
            <label>Date of Birth</label>

            <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            // name="startDate"
            // dateFormat= "MM/DD/YYYY"
            />
          </div>
          <div>
            <label>Email Address</label>
            <input placeholder="hola@endouble.com" />
          </div>
          <div>
            <label>Gender</label>
            <select>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
          <div>
            <label>Address</label>
            <input />
          </div>
          <div>
            <label>Zipcode</label>
            <input type="number" />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
