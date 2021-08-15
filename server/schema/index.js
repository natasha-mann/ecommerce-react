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
  }

  input Filter {
    type: String
    style: [String]
    color: [String]
  }

  type Query {
    products(sortBy: String, top: Int, filters: Filter): [Product]
    womensProducts(filters: Filter): [Product]
    product(id: ID!): Product
  }
`;

module.exports = typeDefs;
