const calculateSubtotal = (products) => {
  if (products.length) {
    const subtotal = products.reduce((acc, product) => {
      return (acc += product.price * product.qty);
    }, 0);

    return subtotal;
  } else {
    return "0.00";
  }
};

export default calculateSubtotal;
