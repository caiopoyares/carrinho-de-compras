import React, { useState } from "react";
import styled from "styled-components";
//the "classnames" package lets you toggle classes depending on variables
import classNames from "classnames";
import { connect } from "react-redux";
import {
  formatTitleLength,
  formatPriceTag,
  totalSumOfProducts
} from "../utils";
import uuid from "uuid";
import { addItem, removeItem } from "../actions/cartActions";

const Cart = ({ open, cart, products, dispatch }) => {
  //Check utilities folder to see which parameters the fn "totalSumOfProducts" accepts.
  const totalSum = totalSumOfProducts(cart.itemsId, products);

  const handleRemoveItem = (id, quantity) => {
    dispatch(removeItem(id, quantity));
  };

  const handleAddItem = (id, quantity, maxQuantity) => {
    dispatch(addItem(id, quantity, maxQuantity));
  };

  return (
    <CartContainer className={classNames({ open: open })}>
      <h2 style={{ marginBottom: "1rem" }}>Meu carrinho</h2>
      <div>
        <ul>
          {cart.itemsId.length === 0 ? (
            <li>O carrinho está vazio.</li>
          ) : (
            cart.itemsOnCart.map(id => {
              const maxQuantity = products.find(product => product.id === id)
                .quantity;
              const quantity = cart.itemsId.filter(item => item === id).length;
              const item = products.filter(product => product.id === id);
              const title = formatTitleLength(item[0].title, 4)[0];
              const itemPrice = products.find(product => product.id === id)
                .price;
              return (
                <CartListItem key={uuid()}>
                  <p>
                    <button
                      className="quantity-btn"
                      onClick={() => handleRemoveItem(id, quantity)}
                    >
                      -
                    </button>
                    <strong className="quantity">{quantity}</strong>
                    {quantity === maxQuantity ? null : (
                      <button
                        className="quantity-btn"
                        onClick={() => handleAddItem(id, quantity, maxQuantity)}
                      >
                        +
                      </button>
                    )}
                  </p>
                  <p style={{ marginLeft: "auto" }}>
                    <i style={{ borderBottom: "1px solid #333" }}>{title}</i>
                  </p>
                  <p className="product-price">
                    {formatPriceTag(quantity * itemPrice)}
                  </p>
                </CartListItem>
              );
            })
          )}
        </ul>
      </div>
      <h3 className="total">
        {cart.itemsOnCart.length === 0
          ? null
          : `Total: ${formatPriceTag(totalSum)}`}
      </h3>
    </CartContainer>
  );
};

const mapStateToProps = store => {
  return {
    cart: store.cart,
    products: store.items
  };
};

export default connect(mapStateToProps)(Cart);

//Styled component setup below
//Add padding-top to subtract the navbar height
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
  padding-bottom: 0.5rem;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fefefe;
  color: #333;
  border-left: 1px solid #aaa;
  min-width: 100%;
  min-height: 100vh;
  transform: translateX(500px);
  transition: transform 0.5s ease-out;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
  @media (min-width: 650px) {
    min-width: 450px;
  }

  &.open {
    overflow: hidden;
    transform: translateX(0);
  }

  & .total {
    margin-top: 2rem;
    align-self: flex-end;
    margin-right: 1rem;
  }

  & .product-price {
    margin-right: 0.5rem;
  }

  & .quantity {
    border: 1px solid #aaa;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
  }

  & .quantity-btn {
    font-size: 1rem;
    padding: 0 0.2rem;
    margin: 0 0.3rem;
    background-color: #fff;
    border: #ddd;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

const CartListItem = styled.li`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  & p {
    padding: 0.5rem;
  }
`;
