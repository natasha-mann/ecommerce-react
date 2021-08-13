const { Product } = require("../models");

const products = async () => {
  const products = await Product.find();
  return products;
};

module.exports = products;
