import React, { Component } from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import ContactFooter from "../ContactFooter/ContactFooter";
import "../FeaturedProducts/FeaturedProducts.css";
import "../ContactFooter/ContactFooter.css";

export class Main extends Component {
  render() {
    return (
      <div className='home-body'>
        <FeaturedProducts />
        <ContactFooter />
      </div>
    );
  }
}

export default Main;
