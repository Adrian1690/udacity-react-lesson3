import React from "react";
import PropTypes from "prop-types";

class NewItem extends React.Component {
  state = {
    value: ""
  };

  addItem = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.value);
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  inputIsEmpty = () => {
    return this.state.value === "";
  };

  render() {
    return (
      <form onSubmit={this.addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  }
}

NewItem.propTypes = {
  onAddItem: PropTypes.func.isRequired
};

export default NewItem;
