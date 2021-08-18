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
        id
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
        id
      }
    }
  }
`;

export const WOMENS_PRODUCTS = gql`
  query Query(
    $womensProductsOrderBy: PriceOrder
    $womensProductsFilters: Filter
  ) {
    womensProducts(
      orderBy: $womensProductsOrderBy
      filters: $womensProductsFilters
    ) {
      id
      type
      name
      style
      color
      image
      price
      brand
      sizes {
        stock
        size
      }
    }
  }
`;

export const UPDATE_PRODUCTS = gql`
  mutation Mutation($updateStockInput: [stockInput!]) {
    updateStock(input: $updateStockInput) {
      id
      name
      sizes {
        size
        stock
        id
      }
    }
  }
`;
