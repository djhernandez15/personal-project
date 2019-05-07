import React, { Component } from "react";
import { getGoggles } from "../../../ducks/reducers/products";
import { connect } from "react-redux";

export class Main extends Component {
  componentDidMount() {
    this.props.getGoggles();
  }
  render() {
    let mappedProducts = this.props.goggles.map(items => {
      return (
        <div className="product-card">
          <div className="product-desc">{items.brand_name + items.model}</div>
          <img className="product-image" src={items.image} alt={items.model}/>
          <h6>${items.price}</h6>
          <button>Add to Cart</button>
        </div>
      );
    });
    return (
      <div className="goggles-body">
        <div className="goggles-container">{mappedProducts}</div>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return { goggles: reduxState.products.goggles };
};

export default connect(
  mapStateToProps,
  { getGoggles }
)(Main);

