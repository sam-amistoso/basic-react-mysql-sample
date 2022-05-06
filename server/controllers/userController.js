const User = require('../models/Users');

exports.getUserList = (req, res) => {
  let user = new User(req.body);

  user
    .getUser()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};
