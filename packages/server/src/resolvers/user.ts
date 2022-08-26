const user = (parent, args, context, info) => {
  const { db } = context.dataSources;
  const { id } = args;
  return db.findUserById(id);
};

const users = (parent, args, context, info) => {
  const { db } = context.dataSources;
  return db.findAllUser();
};

const createUser = (parent, args, context, info) => {
  const { email, name, address } = args;
  const { db } = context.dataSources;
  return db.insertUser(email, name, address);
};

export const userQueryResolver = {
  user,
  users,
};

export const userMutationResolver = {
  createUser,
};
