import React from "react";

class FormAddUser extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    userName: ""
  };

  handleInput = ({ target }) => {
    const name = target.name;
    const value = target.value;

    this.setState((prevState) => ({
      [name]: value
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, userName } = this.state;
    const user = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      userName: userName.trim()
    };

    this.props.addUser(user);
  };

  fieldsAreEmpty() {
    const { firstName, lastName, userName } = this.state;
    return !firstName || !lastName || !userName;
  }

  render() {
    const { firstName, lastName, userName } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <span>First Name</span>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleInput}
        />
        <span>Last Name</span>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleInput}
        />
        <span>Username</span>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={this.handleInput}
        />

        <button type="submit" disabled={this.fieldsAreEmpty()}>
          {" "}
          Add User{" "}
        </button>
      </form>
    );
  }
}

export default FormAddUser;
