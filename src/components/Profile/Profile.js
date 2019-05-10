import React, { Component } from "react";
import Header from "../LandingPage/Header/Header";
import Nav from "../LandingPage/Nav/Nav";
import ProfileMain from "./ProfileMain/ProfileMain";
import { connect } from "react-redux";
import { checkUser } from "../../ducks/reducers/userLogin";

export class Profile extends Component {
  componentDidMount() {
    this.props.checkUser();
  }
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <ProfileMain />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user: reduxState.userLogin.user
  };
};
export default connect(
  mapStateToProps,
  { checkUser }
)(Profile);
