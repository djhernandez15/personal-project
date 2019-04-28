import React, { Component } from "react";

export class ContactFooter extends Component {
  render() {
    return (
      <div className='contact-footer'>
        <form className='contact-form'>
          <input className='name-input' placeholder="Name" />
          <input className='email-input' placeholder="Email" />
          <input className='message-input' placeholder="Message" />
        </form>
      </div>
    );
  }
}

export default ContactFooter;
