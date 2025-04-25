import { gql } from "graphql-tag";

export const orderTypeDefs = gql`
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
