const router = require('express').Router();

const { getUserList } = require('../controllers/userController');
/** User API End Points **/
router.get('/userlist', getUserList);

module.exports = router;
