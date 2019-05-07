import React, { Component } from "react";
import { getPants } from "../../../ducks/reducers/products";
import { connect } from "react-redux";

export class Main extends Component {
  componentDidMount() {
    this.props.getPants();
  }
  render() {
    let mappedProducts = this.props.pants.map(items => {
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
      <div className="pants-body">
        <div className="pants-container">{mappedProducts}</div>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return { pants: reduxState.products.pants };
};

export default connect(
  mapStateToProps,
  { getPants }
)(Main);
