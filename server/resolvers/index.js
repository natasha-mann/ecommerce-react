const products = require("./products");
const product = require("./product");
const womensProducts = require("./womensProducts");

const resolvers = {
  Query: {
    products,
    product,
    womensProducts,
  },
};

module.exports = resolvers;
