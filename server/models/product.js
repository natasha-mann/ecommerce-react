const { Schema, model } = require("mongoose");

const schema = {
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  style: [
    {
      type: String,
      required: true,
    },
  ],
  color: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  sizes: [
    {
      size: { type: Number, required: true },
      stock: { type: Number, default: 0 },
    },
  ],
};

const productSchema = new Schema(schema);

const Product = model("Product", productSchema);

module.exports = Product;
