const products = require("./products");
const product = require("./product");

const resolvers = {
  Query: {
    products,
    product,
  },
};

module.exports = resolvers;
