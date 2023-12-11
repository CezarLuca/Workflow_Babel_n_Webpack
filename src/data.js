const users = [
  { id: 1, name: 'John', age: 29, premium: true },
  { id: 2, name: 'Jane', age: 42, premium: false },
  { id: 3, name: 'Fred', age: 17, premium: true },
  { id: 4, name: 'Bob', age: 25, premium: false },
  { id: 5, name: 'Alice', age: 32, premium: false },
  { id: 6, name: 'Zoe', age: 19, premium: true },
];

export const getPremiumUsers = (users) => {
  return users.filter((user) => user.premium);
};

export default users;

// export { users as default, getPremiumUsers}; // this is the same as the above two lines