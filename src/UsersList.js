import React from "react";
import UserRow from "./UserRow";

class UserList extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <p>List of Users</p>
        <ul>
          {users.map((user) => (
            <UserRow key={user.userName} user={user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
