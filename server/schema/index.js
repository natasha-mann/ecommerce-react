const { gql } = require("apollo-server");

const typeDefs = gql`
  type Size {
    size: Int!
    stock: Int!
    id: ID
  }

  type Product {
    id: ID!
    type: String!
    name: String!
    style: [String!]
    color: String!
    image: String!
    price: Float!
    sizes: [Size]
    brand: String!
  }

  input Filter {
    type: String
    style: [String]
    color: [String]
    brand: [String]
  }

  input PriceOrder {
    price: Sort
  }

  enum Sort {
    asc
    desc
  }

  input stockInput {
    id: ID
    size: Int
    qty: Int!
    color: String
    sizeId: ID!
    image: String
    name: String
    price: Int
  }

  type Query {
    products(sortBy: String, top: Int, filters: Filter): [Product]
    womensProducts(filters: Filter, orderBy: PriceOrder): [Product]
    mensProducts(filters: Filter, orderBy: PriceOrder): [Product]
    product(id: ID!): Product
  }

  type Mutation {
    updateStock(input: [stockInput!]): [Product!]
  }
`;

module.exports = typeDefs;
