const { ApolloError } = require("apollo-server");
const { Product } = require("../models");

const updateStock = async (_, { input }) => {
  const updatedProducts = await Promise.all(
    input.map(async (product) => {
      const foundProduct = await Product.findOne({
        "sizes._id": product.sizeId,
      });

      const currentSize = foundProduct.sizes.find((object) => {
        return object._id == product.sizeId;
      });

      const currentStock = currentSize.stock;
      let newQuantity;

      if (currentStock > 0) {
        newQuantity = currentStock - product.qty;
      } else {
        throw new ApolloError("Out of stock!");
      }

      const newProduct = await Product.findOneAndUpdate(
        { "sizes._id": product.sizeId },
        { $set: { "sizes.$.stock": newQuantity } },
        { new: true }
      );

      return newProduct;
    })
  );

  return updatedProducts;
};

module.exports = updateStock;
