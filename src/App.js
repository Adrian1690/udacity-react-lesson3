import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormAddUser from "./FormAddUser";
import MessageUserRegisteredError from "./MessageUserRegisteredError";
import UsersList from "./UsersList";

class App extends React.Component {
  state = {
    userNameRegisteredError: false,
    users: [
      {
        firstName: "Adrian",
        lastName: "Penia",
        userName: "adrian",
        gamesPlayed: 0
      }
    ]
  };

  existUserName = (userName) => {
    for (const user of this.state.users) {
      if (user.userName.toLowerCase() === userName.toLowerCase()) {
        return true;
      }
    }

    return false;
  };

  addUser = (user) => {
    if (this.existUserName(user.userName)) {
      this.setState({ userNameRegisteredError: true });
      return;
    }

    user.gamesPlayed = 0;
    this.setState((prevState) => ({
      users: [...prevState.users, user],
      userNameRegisteredError: false
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <h2>Add User</h2>
        <FormAddUser addUser={this.addUser} />

        <MessageUserRegisteredError
          displayError={this.state.userNameRegisteredError}
        />

        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default App;
