import React, { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import styled from "styled-components";
import Cart from "./Cart";
import { connect } from "react-redux";
import { totalSumOfProducts, formatPriceTag } from "../utils";

const ShoppingCart = ({ cart, products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  const totalSum = formatPriceTag(totalSumOfProducts(cart.itemsId, products));
  return (
    <>
      <Cart open={isOpen} />
      <Container>
        <Wrapper>
          <Logo>Amazônia</Logo>
          <div>
            <Subtotal>
              <strong>Subtotal: </strong>
              {totalSum}
            </Subtotal>
            <CartWrapper onClick={toggleCart}>
              <CartIcon />
              <Alert>{cart.itemsId.length}</Alert>
            </CartWrapper>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.items
  };
};

export default connect(mapStateToProps)(ShoppingCart);

//Styled components setup below
const Container = styled.div`
  position: relative;
  text-align: right;
  margin-bottom: 0;
`;

const Logo = styled.h2`
  position: absolute;
  padding: 1rem;
`;

const Wrapper = styled.div`
  position: fixed;
  height: 4rem;
  background-color: #f4f4f4;
  width: 100%;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  right: 0;
`;

const CartWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 1.5rem;
  margin-top: 1rem;
`;

const Subtotal = styled.p`
  position: absolute;
  top: 1.5rem;
  right: 5rem;
`;

const Alert = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -0.4rem;
  right: -0.2rem;
  width: 20px;
  font-size: 0.8rem;
  height: 20px;
  line-height: 20px;
  background-color: crimson;
  color: white;
  border-radius: 50%;
`;

const CartIcon = styled(TiShoppingCart)`
  font-size: 2rem;
  text-align: right;
`;
