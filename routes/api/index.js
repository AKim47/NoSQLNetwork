const router = require('express').Router();
const userRoutes = require('./user-routes');

// add prefix of `/user` to routes treated in `user-routes.js`
router.use('/user', userRoutes); 