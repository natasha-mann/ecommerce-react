const { Product } = require("../models");

const womensProducts = async (_, { filters }) => {
  if (filters) {
    const womensProducts = await Product.find({ type: "women" }, filters);
    return womensProducts;
  } else {
    const womensProducts = await Product.find({ type: "women" });
    return womensProducts;
  }
};

module.exports = womensProducts;
