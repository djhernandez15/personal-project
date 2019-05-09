import React, { Component } from "react";
import { connect } from "react-redux";

export class FeaturedProducts extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="fp-container">
        <img src="https://www.arrivealive.co.za/ckfinder/userfiles/images/Atgatt%20biketalk.JPG" />
        Hello
      </div>
    );
  }
}
const mapStateToProps = reduxState => {};

export default connect()(FeaturedProducts);
