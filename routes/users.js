
const usersRouter = require('express').Router();

const { findAllUsers, createUser, findUserById, updateUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, hashPassword, deleteUser } = require("../middlewares/users")
const { sendAllUsers, sendCreatedUsers, sendUserById, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users');
const { deleteCategory } = require('../middlewares/categories');
const { checkAuth } = require('../middlewares/auth');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.post('/users', findAllUsers, checkEmptyNameAndEmailAndPassword, checkAuth, hashPassword, createUser, sendCreatedUsers);
usersRouter.get('/users/:id', findUserById, sendUserById);
usersRouter.put('/users/:id', findUserById, checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated);
usersRouter.delete('/users/:id', checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
