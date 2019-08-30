// Code ControlledInput Component Here

import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  handleNameChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () =>
      console.log(this.state.firstName)
    );
  };

//! Refactored the duplicated function below to "handle name change"
//   handleLastNameChange = event => {
//     // console.log(event.target.value)
//     this.setState({ lastName: event.target.value }, () =>
//       console.log(this.state.lastName)
//     );
//   };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            onChange={event => {
              this.handleNameChange(event);
            }}
            value={this.state.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={event => {
              this.handleNameChange(event);
            }}
            value={this.state.lastName}
          />
          <button>Add</button>
        </form>

        <div>
          <h1>{this.state.firstName}</h1>
          <h2>{this.state.lastName}</h2>
        </div>
      </div>
    );
  }
}

export default Form;
