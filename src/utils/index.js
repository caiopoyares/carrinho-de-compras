export function formatTitleLength(title, maxNumOfWords) {
  //title MUST be a String!
  // This function will return an array, the first is the title, the second is the subtitle
  return [
    title
      .split(" ")
      .slice(0, maxNumOfWords)
      .join(" "),
    title
      .split(" ")
      .slice(maxNumOfWords, maxNumOfWords + 9)
      .join(" ")
  ];
}

export function formatPriceTag(price) {
  return price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });
}

export const totalSumOfProducts = (ids, products) => {
  let sum = 0;
  ids.forEach(id => {
    const match = products.find(product => product.id === id);
    sum = match.price + sum;
  });
  return sum;
};
