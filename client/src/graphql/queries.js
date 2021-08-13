import { gql } from "@apollo/client";

export const PRODUCTS = gql`
  query Query {
    products {
      id
      type
      style
      name
      color
      image
      price
      sizes {
        size
        stock
      }
    }
  }
`;

export const PRODUCT = gql`
  query Query($productId: ID!) {
    product(id: $productId) {
      id
      type
      name
      style
      color
      image
      price
      sizes {
        stock
        size
      }
    }
  }
`;

export const WOMENS_PRODUCTS = gql`
  query Query($womensProductsFilters: Filter) {
    womensProducts(filters: $womensProductsFilters) {
      type
      id
      name
      style
      color
      image
      price
      sizes {
        stock
        size
      }
    }
  }
`;
