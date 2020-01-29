import React, { Component } from "react";
import User from "./User";
class Main extends Component {
  state = {
    users: []
  };

  fetchUsers = () => {
    fetch("https://randomuser.me/api?results=25")
      .then(res => res.json())
      .then(response => {
        this.setState({ users: response.results });
      });
  };
  render() {
    console.log(this.state.users);
    return (
      <div>
        <button onClick={this.fetchUsers}>Fetch Users</button>
        {this.state.users.map(user => {
          return <User user={user} />;
        })}
      </div>
    );
  }
}

export default Main;
