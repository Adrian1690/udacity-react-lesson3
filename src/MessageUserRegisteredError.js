import React from "react";
import PropTypes from "prop-types";

const MessageUserRegisteredError = (props) => {
  if (!props.displayError) return null;

  return <span> The username was registered </span>;
};

MessageUserRegisteredError.propTypes = {
  displayError: PropTypes.bool
};

export default MessageUserRegisteredError;
