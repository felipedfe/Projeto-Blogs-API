const { User } = require('../database/models');

// POST
const addUser = async (data) => {
  const { email } = data;
  
  const user = await User.findOne({
    where: { email },
    raw: true,
  });
  console.log('==========>', {user});

  if (!user) User.create(data);
  // if (!user) {
  //   User.create(data);
  //   return user
  // }


  return {user};
};

module.exports = {
  addUser,
};
