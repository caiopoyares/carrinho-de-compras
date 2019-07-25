import React from "react";
import { connect } from "react-redux";
import Product from "./Product";

const Products = ({ dispatch, products }) => {
  return (
    <ul>
      {products &&
        products.map(product => {
          return <Product product={product} key={product.id} />;
        })}
    </ul>
  );
};

const mapStateToProps = store => {
  //importing all the products from redux store as props
  return {
    products: store.items
  };
};

export default connect(mapStateToProps)(Products);
