import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { formatTitleLength, formatPriceTag } from "../utils";
import { addToCart } from "../actions/cartActions";

const Product = ({ product, dispatch, cart }) => {
  // Toggle to true if the button "details" is clicked
  const [showDetails, setShowDetails] = useState(false);
  // Check to see if a product is sold out
  //const [soldOut, setSoldOut] = useState(false);
  const handleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleAddToCart = (productId, maxQuantity) => {
    const quantity = cart.itemsId.filter(itemId => itemId === productId).length;
    if (quantity < maxQuantity) {
      dispatch(addToCart(product.id));
    }
  };
  // Check utilities folder to see how formatTitleLength works
  const title = formatTitleLength(product.title, 4)[0];
  const subtitle = formatTitleLength(product.title, 4)[1];
  return (
    <ProductDescription>
      <Img src={product.picture} alt={product.title} />
      <h4>
        <p className="title">{title}</p>
        <small>{subtitle}</small>
        <p className="details-btn" onClick={handleDetails}>
          {showDetails ? "< Ocultar detalhes" : "> Mostrar detalhes"}
        </p>
        {showDetails && (
          <div className="details">
            <p>
              <strong>Marca/Fabricante: </strong>
              {product.brand}
            </p>
            <p>
              <strong>Memória do aparelho: </strong>
              {product.memory}
            </p>
            <p>
              <strong>Chipe: </strong>
              {product.chipType}
            </p>
            <p>
              <strong>Descrição: </strong>
              {product.description}
            </p>
          </div>
        )}
      </h4>

      {/* Check utilities folder to see how formatPriceTag works */}
      <p className="price-tag">{formatPriceTag(product.price)}</p>
      <div className="buy-btn-box">
        <button
          className="buy-btn"
          disabled={product.quantity === 0}
          onClick={() => handleAddToCart(product.id, product.quantity)}
        >
          {product.quantity === 0 ? "Esgotado" : "Comprar"}
        </button>
      </div>
    </ProductDescription>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Product);

//styled components setup below
const Img = styled.img`
  display: block;
  max-width: 100px;
  margin-left: auto;
  margin-right: auto;
  align-self: flex-start;
  margin-bottom: 1rem;
  @media (min-width: 650px) {
    margin-bottom: 0;
  }
`;

const ProductDescription = styled.li`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.75rem;
  border: 1px solid #e7e7e7;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 650px) {
    flex-direction: row;
    text-align: left;
  }

  & > h4 {
    margin-left: 1rem;
    flex: 1;
    & small {
      display: inline-block;
      color: #999;
      margin-top: 0.3rem;
      font-weight: 500;
      font-size: 0.9rem;
    }
  }

  & > * {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  & .price-tag {
    padding-right: 1.5rem;
    align-self: center;
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    @media (min-width: 650px) {
      font-size: 1.1rem;
      margin-bottom: 0;
      align-self: flex-start;
      margin-top: 1.75rem;
    }
  }

  & .buy-btn-box {
    margin-right: 1rem;
    align-self: center;
    @media (min-width: 650px) {
      margin-top: 1.5rem;
      align-self: flex-start;
    }
  }

  & .buy-btn {
    padding: 0.5rem 1.2rem;
    background-color: #f2c75c;
    color: #382d10;
    border-color: #a88734;
    border-radius: 2px;

    cursor: pointer;
    font-size: 0.9rem;
    line-height: 1rem;
    width: 200px;

    &:disabled {
      background-color: #bd983a;
      cursor: not-allowed;
      &:hover {
        background-color: #bd983a;
      }
    }

    &:hover {
      background-color: #e3b952;
    }
    @media (min-width: 650px) {
      width: auto;
    }
  }

  & .details-btn {
    text-transform: uppercase;
    font-size: 0.7rem;
    margin-top: 1rem;
    color: #333;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  & .details {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    font-weight: 300;
    line-height: 1.6;
    text-align: left;
    & p {
      margin-bottom: 0.5rem;
    }
  }
`;
