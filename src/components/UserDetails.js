import React from "react";

const UserDetails = props => {
  if (props.show) {
    return (
      <div>
        <p>{props.user.email}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default UserDetails;
