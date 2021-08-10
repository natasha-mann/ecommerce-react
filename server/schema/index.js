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
    style: String!
    color: String!
    image: String!
    price: Float!
    sizes: [Size]
  }

  type Query {
    products(sortBy: String, top: Int): [Product]
    product(id: ID!): Product
  }
`;

module.exports = typeDefs;
