const calculateSubtotal = (products) => {
  if (products.length) {
    const subtotal = products.reduce((acc, product) => {
      console.log(acc, product.price);
      return (acc += product.price);
    }, 0);

    return subtotal;
  } else {
    return "£0.00";
  }
};

export default calculateSubtotal;
