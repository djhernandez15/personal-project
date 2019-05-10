import React, { Component } from "react";
import { connect } from "react-redux";
import { getCartItems, deleteItem } from "../../../ducks/reducers/userLogin";
import { checkUser } from "../../../ducks/reducers/userLogin";

export class CartMain extends Component {
  componentDidMount() {
    this.props.getCartItems();
    this.props.checkUser();
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
    // let mappedTotal = this.state.cart.map((item, index) => {
    //   console.log(mappedTotal);
    // });

    return <div>{mappedCart}</div>;
  }
}
const mapStateToProps = reduxState => {
  return {
    cart: reduxState.userLogin.cart,
    username: reduxState.userLogin.username
  };
};

export default connect(
  mapStateToProps,
  { getCartItems, deleteItem, checkUser }
)(CartMain);
