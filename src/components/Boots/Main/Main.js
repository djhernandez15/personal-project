import React, { Component } from "react";
import { getBoots } from "../../../ducks/reducers/products";
import { addItemToCart } from "../../../ducks/reducers/userLogin";
import { connect } from "react-redux";

export class Main extends Component {
  componentDidMount() {
    this.props.getBoots();
  }
  render() {
    let mappedProducts = this.props.boots.map(items => {
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
      <div className="boots-body">
        <div className="boots-container">{mappedProducts}</div>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return { boots: reduxState.products.boots };
};

export default connect(
  mapStateToProps,
  { getBoots, addItemToCart }
)(Main);
