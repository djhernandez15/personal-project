import React, { Component } from "react";
import { connect } from "react-redux";
import { getHelmets } from "../../../../ducks/reducers/products";

export class FeaturedProducts extends Component {
  componentDidMount() {
    this.props.getHelmets();
  }

  render() {
    let mappedProducts = this.props.helmets.map((items, index) => {
      return (
        <div className="product-card" key={index}>
          <div className="product-desc">{items.brand_name + items.model}</div>
          <img className="product-image" src={items.image} alt={items.model} />
          <h6>{items.price}</h6>
          <button>Add to Cart</button>
        </div>
      );
    });
    return <div className="fp-container">{mappedProducts}</div>;
  }
}
const mapStateToProps = reduxState => {
  return { helmets: reduxState.products.helmets };
};

export default connect(
  mapStateToProps,
  { getHelmets }
)(FeaturedProducts);
