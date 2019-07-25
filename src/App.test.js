import React from "react";
import ReactDOM from "react-dom";
import { formatTitleLength, formatPriceTag, totalSumOfProducts } from "./utils";

test("format the title of products", () => {
  expect(typeof formatTitleLength("I am a product")).toBe("object");
});

test("format the price tag", () => {
  expect(typeof formatPriceTag(1299)).toBe("string");
});

test("total sum", () => {
  expect(
    totalSumOfProducts(
      [1, 2, 3],
      [{ id: 1, price: 1000 }, { id: 2, price: 4000 }, { id: 3, price: 5000 }]
    )
  ).toBe(10000);
});
