const { User } = require('../database/models');

// POST
const login = async (loginData) => {
  const { email, password } = loginData;

  const user = await User.findOne({
    where: {email, password},
    raw: true
  });
  return user;
}


module.exports = {
  login,
}