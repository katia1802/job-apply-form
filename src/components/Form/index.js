import React, { Component } from "react";
import DatePicker from "react-datepicker";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      name: "",
      birth: "",
      email: "",
      address: "",
      houseNumber: "",
      zipcode: "",
      file: new FileReader(),
      letter: "",
      submitting: false
    };
    this.handleName = this.handleName.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleHouseNumber = this.handleHouseNumber.bind(this);
    this.handleZipcode = this.handleZipcode.bind(this);
    this.handleLetter = this.handleLetter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleDate(date) {
    this.setState({
      startDate: date
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  handleHouseNumber(e) {
    this.setState({
      houseNumber: e.target.value
    });
  }
  handleZipcode(e) {
    this.setState({
      zipcode: e.target.value
    });
  }

  handleSelectedFile(e) {
    this.setState({
      file: e.target.files[0]
    });
  }


  handleLetter(e) {
    this.setState({
      letter: e.target.value
    });
  }
  handleSubmit(e) {
    //aqui está la funcion que hace que se al hacer click escuche el evento
    e.preventDefault();
    console.log("submitted");
  }

  render() {
    return (
      <div className="main">
        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <label>
              First and Last Name<span className="main--form-asterik">*</span>
            </label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleName}
              placeholder="Katia Rojas Sandoval"
              required
            />
          </div>

          <div className="form--birthdate">
            <label>
              Date of Birth<span className="main--form-asterik">*</span>
            </label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDate}
              showYearDropdown
              dateFormatCalendar="MMMM"
              scrollableYearDropdown
              yearDropdownItemNumber={15}
              required
            />
          </div>
          <div>
            <label>
              Email Address<span className="main--form-asterik">*</span>
            </label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmail}
              placeholder="hola@endouble.com"
              required
            />
          </div>
          <div>
            <label>
              Gender<span className="main--form-asterik">*</span>
              <input
              // type="radio"
              // checked={boolean}
              />
            </label>
          </div>
          <div>
            <label>
              Address<span className="main--form-asterik">*</span>
            </label>
            <input
              type="text"
              value={this.state.address}
              onChange={this.handleAddress}
              placeholder="streetname"
              required
            />
            <input
              type="text"
              value={this.state.houseNumber}
              onChange={this.handleHouseNumber}
              pattern="[0-9]*"
              placeholder="house number"
              required
            />
            <input
              type="text"
              value={this.state.zipcode}
              onChange={this.handleZipcode}
              placeholder="zipcode"
              required
              pattern="[1-9][0-9]{3}\s?[a-zA-Z]{2}"
            />
          </div>
          <div>
            <input type="file" accept=".doc, .docx, .pdf, .rtf, .txt" onChange={this.handleSelectedFile} />
          </div>
          <div>
            <label>Motivational Letter</label>
            <textarea
              type="text"
              value={this.state.letter}
              onChange={this.handleLetter}
              placeholder="Let the company know more about you!"
            />
          </div>
          <div>
            <button
              type="button"
              disabled={this.state.submitting}
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
