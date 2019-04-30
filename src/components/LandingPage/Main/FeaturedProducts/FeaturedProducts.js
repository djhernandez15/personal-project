import React, { Component } from "react";
import axios from "axios";

export class FeaturedProducts extends Component {
  constructor() {
    super();
    this.state = {
      brands: [],
      images: []
    };
  }
  componentDidMount() {
    // axios
    //   .get("/api/getbrands")
    //   .then(brand => {
    //     this.setState({ brands: [...this.state.brands, brand.data] });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    axios
      .get("/api/images")
      .then(image => {
        // console.log(image.data.data);
        this.setState({ images: [...this.state.images, image.data] });
        // console.log(this.state.images);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    // let productImages;
    let imageUrl;
    if (this.state.images) {
      imageUrl = this.state.images.map(image => {
        console.log(image.data)
        return "http://" + image.data.domain + image.data.path + "200_max/" + image.data.filename;
      });
    }

    // let mappedBrands;
    // if (this.state.brands) {
    //   mappedBrands = this.state.brands.map(brand => {
    //     // console.log(brand.data);
    //     return <img src={brand} />;
    //   });
    // }
    return <div className="fp-container"><img src={imageUrl} alt='product'/></div>;
  }
}

export default FeaturedProducts;
