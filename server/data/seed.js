const db = require("../config/connection");
const { Product } = require("../models");
const products = require("./products.json");

db.once("open", async () => {
  try {
    await Product.deleteMany({});

    console.log("Products deleted!!!");

    await Product.insertMany(products);

    console.log("Products seeded successfully!!!");

    process.exit(0);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
});
