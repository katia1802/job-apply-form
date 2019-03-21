import React, { Component } from "react";
import DatePicker from "react-datepicker";


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      name: '',
      birth: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="main">
        <h1 className="main--form-title">Job Apply Form</h1>
        <p className="main--form-text">Please fill the form </p>
        <p className="main--form-subtext">
          All areas with <span className="main--form-asterik">*</span> required
        </p>
        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <label>
              First and Last Name<span className="main--form-asterik">*</span>
            </label>
            <input required />
          </div>

          <div className="form--birthdate">
            <label>
              Date of Birth<span className="main--form-asterik">*</span>
            </label>
            <DatePicker
              required
              selected={this.state.startDate}
              onChange={this.handleChange}
              showYearDropdown
              dateFormatCalendar="MMMM"
              scrollableYearDropdown
              yearDropdownItemNumber={15}
            />
          </div>
          <div>
            <label>
              Email Address<span className="main--form-asterik">*</span>
            </label>
            <input type ="email" required placeholder="hola@endouble.com" />
          </div>
          <div>
            <label required>
              Gender<span className="main--form-asterik">*</span>
            </label>
            <select required>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
          <div>
            <label>
              Address<span className="main--form-asterik">*</span>
            </label>
            <input type="text" placeholder ="streetname"required />
            <input type="text" pattern="[0-9]*" placeholder ="house number"required />
            <input placeholder ="zipcode"required pattern="[1-9][0-9]{3}\s?[a-zA-Z]{2}"/>

          </div>
          <div>
            <label>Motivational Letter</label>
            <textarea

              placeholder="Let the company know more about you!"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
