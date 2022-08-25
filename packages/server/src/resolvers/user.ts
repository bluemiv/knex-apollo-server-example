const mockData = [
  { id: '1', email: 'test-user1@gmail.com', name: 'test-user1' },
  { id: '2', email: 'test-user2@gmail.com', name: 'test-user2' },
  { id: '3', email: 'test-user3@gmail.com', name: 'test-user3' },
];

// TODO DB에서 가지고 올 수 있도록 수정
const user = (parent, args, context, info) => mockData.find((u) => u.id === args.id);

// TODO DB에서 가지고 올 수 있도록 수정
const users = (parent, args, context, info) => {
  console.log(context.dataSources.db.getUsers());
  return mockData;
};

const userResolver = {
  user,
  users,
};

export default userResolver;
