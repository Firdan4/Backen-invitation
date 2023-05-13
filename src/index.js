require('dotenv').config();
const express = require('express');
const cors = require('cors');

const user = require('./routes/userRouter');
const { sequelize } = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

// sequelize
sequelize
  .authenticate()
  .then(function (err) {
    console.log('Database Connection has been established succesfuly');
  })
  .catch(function (err) {
    console.log('Unable to connect the database');
  });

app.use('/', user);

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server Running');
});
