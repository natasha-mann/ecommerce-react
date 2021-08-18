const products = require("./products");
const product = require("./product");
const womensProducts = require("./womensProducts");
const updateStock = require("./updateStock");

const resolvers = {
  Query: {
    products,
    product,
    womensProducts,
  },
  Mutation: {
    updateStock,
  },
};

module.exports = resolvers;
