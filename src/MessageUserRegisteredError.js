import React from "react";

const MessageUserRegisteredError = (props) => {
  if (!props.displayError) return null;

  return <span> The username was registered </span>;
};

export default MessageUserRegisteredError;
