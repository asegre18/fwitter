const router = require('express').Router();
const connection = require('../../../config/connection');
const { insertUser } = require('../../../model/userQueries');
const { fetchUsers } = require('../../../model/userOrm');

// /api/users prepended to every route

// separation of concern
// anything that has to do with routing stays in routing
// anything that has to do with models, stays in models
// all of the logic that happens when an endpoint/API
// goes to the controller

router.route('/')
  .get(async (_req, res) => {
    try {
      const users = await fetchUsers();
      res.json(users);
    } catch (e) {
      res.status(400).json(e);
    }
    // const query = 'SELECT * FROM users;';
    // const [rows, fields] = await connection.query(query);
    // const [rows] = await connection.query(findAllUsers);
    // console.log('I AM ROWS', rows);
    // console.table(rows);
    // console.log('I AM FIELDS', fields);
    // res.json(rows);
  })
  .post(async (req, res) => {
    const userInput = req.body;
    // const query = 'INSERT INTO users SET ?;';
    try {
      const result = await connection.query(insertUser, userInput);
      res.json(result);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
