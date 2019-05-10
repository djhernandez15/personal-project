import React, { Component } from "react";
import { connect } from "react-redux";
import { checkUser, updateUser } from "../../../ducks/reducers/userLogin";
import axios from "axios";

export class ProfileMain extends Component {
  constructor() {
    super();
    this.state = {
      newUsername: "",
      edit: false
    };
  }

  handleEdit = () => {
    this.setState({ edit: true });
  };

  //   handleLogin = () => {
  //     const { username, password } = this.state;
  //     axios.post("/api/login", { username, password }).then(user => {
  //       this.props.updateUser(user.data);
  //       this.setState({ redirect: true });
  //     });
  //   };

  handleChange = e => {
    this.setState({ newUsername: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newUsername } = this.state;
    axios.put("/api/profile", { newUsername }).then(username => {
      this.props.updateUser(username.data);
      this.setState({ edit: false });
    });
  };
  render() {
    return (
      <div className="body">
        <div className="welcome-msg">Welcome, {this.props.username}</div>
        <div className="username-field">Username: {this.props.username}</div>
        {this.state.edit ? (
          <div>
            <input placeholder="Type here" onChange={this.handleChange} />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        ) : (
          <button onClick={this.handleEdit}>Edit Username</button>
        )}
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    username: reduxState.userLogin.username
  };
};
export default connect(
  mapStateToProps,
  { checkUser, updateUser }
)(ProfileMain);
