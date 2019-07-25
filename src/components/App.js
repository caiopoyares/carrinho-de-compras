import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setItems } from "../actions/itemsActions";
import styled from "styled-components";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

function App({ dispatch }) {
  //API url
  const endpoint = "http://api-desafio-front.justdigital.com.br/";
  //Store items in state
  useEffect(() => {
    const fetchItems = async url => {
      const response = await fetch(url);
      const items = await response.json();
      //dispatching action imported from actions folder
      dispatch(setItems(items.products));
    };
    fetchItems(endpoint);
  }, []);

  return (
    <div className="App">
      <ShoppingCart />
      <Wrapper>
        <Title className="shopping-cart">Catálogo de Produtos</Title>
        <Products />
      </Wrapper>
    </div>
  );
}

export default connect()(App);

//styled components setup below
const Wrapper = styled.div`
  padding: 1rem;
  padding-top: 4rem;
  max-width: 1000px;
  @media (min-width: 650px) {
    padding-left: 3.5rem;
  }
`;

const Title = styled.h1`
  padding: 2rem 0 1rem;
`;
