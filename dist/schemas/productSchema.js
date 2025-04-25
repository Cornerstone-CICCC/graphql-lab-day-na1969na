"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.productTypeDefs = (0, graphql_tag_1.gql) `
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
