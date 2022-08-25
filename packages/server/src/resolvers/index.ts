import userResolver from './user';

const resolver = {
  Query: {
    ...userResolver,
  },
};

export default resolver;
