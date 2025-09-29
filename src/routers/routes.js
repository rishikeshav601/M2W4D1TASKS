const express = require('express');
const router = express.Router();
const {basicServer,helloWorld, greet, addUser, getAllUsers, getUserById, updateUserById, deleteUserById, countUsers} = require('../controllers/controller');

router.get('/server', basicServer);

router.get('/hello', helloWorld);

router.post('/greet', greet);

router.post('/users', addUser);

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.put('/users/:id', updateUserById);

router.delete('/users/:id', deleteUserById);

router.get('/users/count', countUsers);

module.exports = router;

