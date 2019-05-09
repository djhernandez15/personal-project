import React, { Component } from "react";
import { connect } from "react-redux";
import { getCartItems, deleteItem } from "../../../ducks/reducers/products";
import { checkUser } from "../../../ducks/reducers/userLogin";

export class CartMain extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }
  componentDidMount() {
    console.log(this.props.getCartItems());
    this.props.getCartItems();
  }

  render() {
    let mappedCart = this.props.cart.map((item, index) => {
      return (
        <div className="cart-product-card" key={index}>
          <div className="cart-product-desc">
            {item.brand_name + item.model}
          </div>
          <img
            className="cart-product-image"
            src={item.image}
            alt={item.model}
          />
          <h6 className="cart-product-price">${item.price}</h6>
          <button
            onClick={() => {
              this.props.deleteItem(item);
              this.props.checkUser();
            }}
          >
            X
          </button>
        </div>
      );
    });

    return <div>{mappedCart}</div>;
  }
}
const mapStateToProps = reduxState => {
  return {
    cart: reduxState.products.cart
    // user: reduxState.userLogin.user
  };
};

export default connect(
  mapStateToProps,
  { getCartItems, deleteItem, checkUser }
)(CartMain);
