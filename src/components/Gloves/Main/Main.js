import React, { Component } from "react";
import { getGloves } from "../../../ducks/reducers/products";
import { addItemToCart } from "../../../ducks/reducers/userLogin";
import { connect } from "react-redux";

export class Main extends Component {
  componentDidMount() {
    this.props.getGloves();
  }
  render() {
    let mappedProducts = this.props.gloves.map(items => {
      return (
        <div className="product-card">
          <div className="product-desc">{items.brand_name + items.model}</div>
          <img className="product-image" src={items.image} alt={items.model} />
          <h6>${items.price}</h6>
          <button onClick={() => this.props.addItemToCart(items)}>
            Add to Cart
          </button>
        </div>
      );
    });
    return (
      <div className="gloves-body">
        <div className="gloves-container">{mappedProducts}</div>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return { gloves: reduxState.products.gloves };
};

export default connect(
  mapStateToProps,
  { getGloves, addItemToCart }
)(Main);
