const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const userPageRoutes = require('./user-page-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/user-page', userPageRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;