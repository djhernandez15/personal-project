import React, { Component } from "react";
import { connect } from "react-redux";
import { getCartItems } from "../../../ducks/reducers/products";

export class CartMain extends Component {
  componentDidMount() {
    getCartItems();
  }
  render() {
    let mappedCart = this.props.cart.map((items, index) => {
      return (
        <div className="product-card" key={index}>
          <div className="product-desc">{items.brand_name + items.model}</div>
          <img className="product-image" src={items.image} alt={items.model} />
          <h6>${items.price}</h6>
        </div>
      );
    });
    return <div>{mappedCart}</div>;
  }
}
const mapStateToProps = reduxState => {
  return {
    cart: reduxState.products.cart
  };
};

export default connect(
  mapStateToProps,
  { getCartItems }
)(CartMain);
