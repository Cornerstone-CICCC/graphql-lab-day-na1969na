import { gql } from "graphql-tag";

export const productTypeDefs = gql`
  type Product {
    id: ID!
    productName: String!
    productPrice: Float!
  }

  type Query {
    products: [Product!]!
    getProductById(id: ID!): Product
  }

  type Mutation {
    addProduct(productName: String!, productPrice: Float!): Product!
    editProduct(id: ID!, productName: String, productPrice: Float): Product
    removeProduct(id: ID!): Boolean
  }
`;
