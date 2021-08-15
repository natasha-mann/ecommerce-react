const { Product } = require("../models");

const womensProducts = async (_, { filters }) => {
  // console.log(filters);

  const constructFilters = (filters) => {
    const array = Object.entries(filters);

    const filterObject = array.reduce((acc, each) => {
      return {
        ...acc,
        [each[0]]: { $in: each[1] },
      };
    }, []);

    return filterObject;
  };

  if (filters) {
    const searchFilters = { ...constructFilters(filters), type: "women" };
    const womensProducts = await Product.find(searchFilters);
    return womensProducts;
  } else {
    const womensProducts = await Product.find({ type: "women" });
    return womensProducts;
  }
};

module.exports = womensProducts;
