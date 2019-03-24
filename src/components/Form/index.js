import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      birthDate: "",
      email: "",
      gender: "",
      address: "",
      houseNumber: "",
      zipcode: "",
      file: new FileReader(),
      letter: "",
      submitting: true,
      formErrors: {
        fullName: "",
        birthDate: "",
        email: "",
        gender: "",
        address: "",
        houseNumber: "",
        zipcode: "",
        file: "ok",
        letter: "ok"
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    console.log("name: ", name);
    console.log("value : ", value);

    switch (name) {
      case "fullName":
        formErrors.fullName =
          value.length < 3 && value.length > 0
            ? "! Minimum 3 characters required"
            : "ok";
        break;

      case "birthDate":
        formErrors.birthDate = RegExp(
          /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
        ).test(value)
          ? "ok"
          : "! Enter DD/MM/YYYY birthdate format";
        break;

      case "email":
        formErrors.email =
          RegExp(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
          ).test(value) && value.length > 0
            ? "ok"
            : "! Invalid email address";
        break;

      case "gender":
        formErrors.gender =
          RegExp(/^male$||^female$/).test(value) && value.length > 0
            ? "ok"
            : "! Please choose a gender";
        break;

      case "address":
        formErrors.address =
          value.length < 2 && value.length > 0 ? "street name required" : "ok";
        break;

      case "houseNumber":
        formErrors.houseNumber =
          RegExp(/^[0-9]*$/).test(value) && value.length > 0
            ? "ok"
            : "! Numeric characters required";
        break;

      case "zipcode":
        formErrors.zipcode = RegExp(/^([0-9]{4}[ ]+[a-zA-Z]{2})$/).test(value)
          ? "ok"
          : "! Please enter a valid dutch zipcode";
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors,
        [name]: value
      },
      () => console.log(this.state)
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      this.state.formErrors.fullName === "ok" &&
      this.state.formErrors.birthDate === "ok" &&
      this.state.formErrors.email === "ok" &&
      this.state.formErrors.gender === "ok" &&
      this.state.formErrors.address === "ok" &&
      this.state.formErrors.houseNumber === "ok" &&
      this.state.formErrors.zipcode === "ok" &&
      this.state.formErrors.file === "ok" &&
      this.state.formErrors.letter === "ok"
    ) {
      alert("Thanks for submitting");
    } else {
      alert("no validado");
    }
  }

  render() {
    return (
      <div className="form-padding">
        <h1 className="form-title">Job Application</h1>
        <p className="form-text">In order to apply, please fill the following form.</p>
        <p className="form-subtext">
          All areas with <span className="form-asterisk">*</span> required
        </p>

        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} className="form" noValidate>
            {/* name */}
            <div className="form-name form-item">
              <label className="form-label">
                First and Last Name<span className="form-asterisk">*</span>
              </label>
              <input className="form-field"
                type="text"
                name="fullName"
                value={this.state.fullName}
                onChange={this.handleChange}
                placeholder="Katia Rojas Sandoval"
                required
              />
              <div className="form-message-error">
                {this.state.formErrors.fullName}
              </div>
            </div>
            {/* birthdate */}
            <div className="form-birthdate form-item">
              <label className="form-label">
                Date of Birth<span className="form-asterisk">*</span>
              </label>
              <input className="form-field"
                type="text"
                name="birthDate"
                value={this.state.birthDate}
                onChange={this.handleChange}
                placeholder="DD/MM/YYYY"
                required
              />
              <div className="form-message-error">
                {this.state.formErrors.birthDate}
              </div>
            </div>
            {/* email */}
            <div className="form-email form-item">
              <label className="form-label">
                Email Address<span className="form-asterisk">*</span>
              </label>
              <input className="form-field"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="hola@endouble.com"
                required
              />
              <div className="form-message-error">
                {this.state.formErrors.email}
              </div>
            </div>
            {/* gender */}
            <div className="form-gender form-item">
              <label className="form-label">
                Gender<span className="form-asterisk">*</span>
                <select className="form-field"
                  name="gender"
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                >
                  <option>Female</option>
                  <option>Male</option>
                </select>
                <div className="form-message-error">
                  {this.state.formErrors.gender}
                </div>
              </label>
            </div>
            {/* address */}
            <div className="form-address form-item">
              <label className="form-label">
                Address<span className="form-asterisk">*</span>
              </label>
              <input className="form-field"
                name="address"
                type="text"
                value={this.state.address}
                onChange={this.handleChange}
                placeholder="streetname"
                required
              />
              <div className="form-message-error">
                {this.state.formErrors.address}
              </div>

              {/* house number */}
              <div className="block-number-zipcode">
                <div className="form-housNumber">
                  <input className="form-field"
                    name="houseNumber"
                    type="text"
                    value={this.state.houseNumber}
                    onChange={this.handleChange}
                    placeholder="house number"
                    required
                  />
                  <div className="form-message-error">
                    {this.state.formErrors.houseNumber}
                  </div>
                </div>

                {/* zipcode */}
                <div className="form-zipecode">
                  <input className="form-field"
                    name="zipcode"
                    type="text"
                    value={this.state.zipcode}
                    onChange={this.handleChange}
                    placeholder="zipcode"
                    required
                  />
                  <div className="form-message-error">
                    {this.state.formErrors.zipcode}
                  </div>
                </div>
              </div>
            </div>
            {/* file */}
            <label className='form-label'/>
            <div className="form-file form-item">
              <input className="form-field"
                name="file"
                type="file"
                accept=".doc, .docx, .pdf, .rtf, .txt"
                onChange={this.handleChange}
              />
            </div>
            {/* motivational letter */}
            <div className="form-letter form-item">
              <label className="form-label">Motivational Letter</label>
              <textarea className="form-field-text"
                name="letter"
                type="text"
                value={this.state.letter}
                onChange={this.handleChange}
                placeholder="Let the company know more about you!"
              />
            </div>
            {/* submit */}
            <div className="form-item">
              <button type="button" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
