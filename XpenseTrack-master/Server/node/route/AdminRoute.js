const express = require("express");
const users = express.Router();

const AdminController = require('../controller/AdminController');


users.post("/adminregister",AdminController.register);

users.post("/adminlogin", AdminController.login);


module.exports = users;
 
 