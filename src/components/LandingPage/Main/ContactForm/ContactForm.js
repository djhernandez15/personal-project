import React, { Component } from "react";
import { StatefulTextarea as Textarea, SIZE } from "baseui/textarea";
import {StatefulInput} from 'baseui/input';


export class ContactFooter extends Component {
  render() {
    return (
      <div className="contact-footer">
        <h2>Contact Us!</h2>
        <form className="contact-form">
          <StatefulInput className="name-input" placeholder="Name" />
          <StatefulInput className="email-input" placeholder="Email" />
          <Textarea size={SIZE.compact} placeholder="Placeholder" />
        </form>
      </div>
    );
  }
}

export default ContactFooter;
