import React, { Component } from "react";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
// import ContactFooter from "./ContactForm/ContactForm";
import "./FeaturedProducts/FeaturedProducts.css";
// import "./ContactForm/ContactForm.css";

export class Main extends Component {
  render() {
    return (
      <div className='home-body'>
        <FeaturedProducts />
        {/* <ContactFooter /> */}
      </div>
    );
  }
}

export default Main;
