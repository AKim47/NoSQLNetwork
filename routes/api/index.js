const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes')

// add prefix of `/user` to routes treated in `user-routes.js`
router.use('/users', userRoutes); 
router.use('/thoughts', thoughtRoutes);

module.exports = router;