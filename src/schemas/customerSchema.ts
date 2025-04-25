import { gql } from "graphql-tag";

export const customerTypeDefs = gql`
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
