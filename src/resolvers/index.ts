import { productResolver } from './productResolver';
import { customerResolver } from './customerResolver';
import { orderResolver } from './orderResolver';

export const resolvers = {
  Query: {
    ...productResolver.Query,
    ...customerResolver.Query,
    ...orderResolver.Query,
  },
  Mutation: {
    ...productResolver.Mutation,
    ...customerResolver.Mutation,
    ...orderResolver.Mutation,
  },
};