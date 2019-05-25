import React, { Component } from "react";
import { connect } from "react-redux";
import { StatefulTextarea as Textarea, SIZE } from "baseui/textarea";
import { StatefulInput } from "baseui/input";

export class FeaturedProducts extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="fp">
        <div className="welcome-msg">
          <h3>
            Thank you for visiting Brraaap.info! Here's a little motivational
            video for the weekend! Don't forget to gear up!
            <br/>
            <br/>
            <br/>
            Please login to add gear to cart!
          </h3>
          
        </div>
        <iframe
          title="landing-page-vid"
          width="760"
          height="515"
          src="https://www.youtube-nocookie.com/embed/SEGwnZJIRHo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <div className="contact-footer">
          <h2 className="contact-us">Contact Us!</h2>
          <form className="contact-form">
            <StatefulInput className="name-input" placeholder="Name" />
            <StatefulInput className="email-input" placeholder="Email" />
            <Textarea size={SIZE.compact} placeholder="Message" />
          </form>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = reduxState => {};

export default connect()(FeaturedProducts);
