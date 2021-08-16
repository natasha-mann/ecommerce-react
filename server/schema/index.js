const { gql } = require("apollo-server");

const typeDefs = gql`
  type Size {
    size: Int!
    stock: Int!
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

  type Query {
    products(sortBy: String, top: Int, filters: Filter): [Product]
    womensProducts(filters: Filter, orderBy: PriceOrder): [Product]
    product(id: ID!): Product
  }
`;

module.exports = typeDefs;
