const { getStarterData } = require('../../database/queries/getStarterData');
const { throwError } = require('../../utilities');

const isAuth = (req, res, next) => {
  const { userID } = req;
  getStarterData(userID)
    .then((data) => {
      if (!data.profileData) {
        throw throwError(400, 'no data for this user yet ');
      }
      res.json({
        status: 200,
        message: 'All user data has been found profileData , favoriteData , cartProducts , role',
        data,
      });
    })
    .catch(next);
};

module.exports = isAuth;
