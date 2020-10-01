const findAllUsers = 'SELECT * FROM users;';
const insertUser = 'INSERT INTO users SET ?;';

module.export = {
  findAllUsers,
  insertUser,
};
