const db = require('../connection');

let User = function (data) {
  this.data = data; //Pass temporary data as parameter
};

User.prototype.getUser = function () {
  return new Promise(async (resolve, reject) => {
    try {
      let sqlString = 'Select * From useraccounts';
      db.query(sqlString, (err, result) => {
        if (err) {
          console.log(err);
          return reject('Failed');
        } else {
          console.log(result);
          return resolve(result);
        }
      });
    } catch (error) {
      console.log(error);
      return reject('Internal Server Error');
    }
  });
};

module.exports = User;
