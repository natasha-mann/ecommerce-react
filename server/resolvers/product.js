const { Product } = require("../models");

const product = async ({ id }) => {
  const product = await Product.findById(id);
  return product;
};

module.exports = product;
