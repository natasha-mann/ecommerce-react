const products = require("./products");
const product = require("./product");
const womensProducts = require("./womensProducts");
const mensProducts = require("./mensProducts");
const updateStock = require("./updateStock");

const resolvers = {
  Query: {
    products,
    product,
    womensProducts,
    mensProducts,
  },
  Mutation: {
    updateStock,
  },
};

module.exports = resolvers;
