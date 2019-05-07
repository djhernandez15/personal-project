import React, { Component } from "react";
import { getHelmets, addItemToCart } from "../../../ducks/reducers/products";
import { connect } from "react-redux";

export class Main extends Component {
  componentDidMount() {
    this.props.getHelmets();
  }

  render() {
    let mappedProducts = this.props.helmets.map((items, index) => {
      return (
        <div className="product-card" key={index}>
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
      <div className="helmets-body">
        <div className="helmets-container">{mappedProducts}</div>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    helmets: reduxState.products.helmets
  };
};

export default connect(
  mapStateToProps,
  { getHelmets, addItemToCart }
)(Main);
