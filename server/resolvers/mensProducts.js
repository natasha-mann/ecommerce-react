const { Product } = require("../models");

const mensProducts = async (_, { filters }) => {
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
    const searchFilters = { ...constructFilters(filters), type: "men" };
    const mensProducts = await Product.find(searchFilters);
    return mensProducts;
  } else {
    const mensProducts = await Product.find({ type: "men" });
    return mensProducts;
  }
};

module.exports = mensProducts;
