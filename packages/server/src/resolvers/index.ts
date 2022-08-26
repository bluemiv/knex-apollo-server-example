import { userQueryResolver, userMutationResolver } from './user';

const resolver = {
  Query: {
    ...userQueryResolver,
  },
  Mutation: {
    ...userMutationResolver,
  },
};

export default resolver;
