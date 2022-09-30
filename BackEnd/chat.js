const usersData = [];

const getCurrentUser = (id) => {
  return usersData.find((newUser) => newUser.id === id);
};

const onBoard = (id, username, room) => {
  const newUser = {id, username, room};
  usersData.push(newUser);
  console.log(usersData, "users");
  return newUser;
};

const userDisconnect = (id) => {
  const index = usersData.findIndex((newUser) => newUser.id === id);
  index > -1 && {return: usersData?.splice(index, 1)[0]};
};

module.exports = {
  onBoard,
  getCurrentUser,
  userDisconnect,
};
