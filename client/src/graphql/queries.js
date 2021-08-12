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
