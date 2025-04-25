"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.customerTypeDefs = (0, graphql_tag_1.gql) `
  type Customer {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    customers: [Customer!]!
    getCustomerById(id: ID!): Customer
  }

  type Mutation {
    addCustomer(firstName: String!, lastName: String!, email: String!): Customer!
    editCustomer(id: ID!, firstName: String, lastName: String, email: String): Customer
    removeCustomer(id: ID!): Boolean
  }
`;
