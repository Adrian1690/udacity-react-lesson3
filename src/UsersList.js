import React from "react";
import PropTypes from "prop-types";

import UserRow from "./UserRow";

class UsersList extends React.Component {
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

UsersList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UsersList;
