"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.orderTypeDefs = (0, graphql_tag_1.gql) `
  type Order {
    id: ID!
    product: Product!
    customer: Customer!
  }

  type Query {
    orders: [Order!]!
    getOrderById(id: ID!): Order
  }

  type Mutation {
    addOrder(productId: ID!, customerId: ID!): Order!
    editOrder(id: ID!, productId: ID, customerId: ID): Order
    removeOrder(id: ID!): Boolean
  }
`;
