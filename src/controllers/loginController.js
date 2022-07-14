const login = async (req, res) => {
  console.log('teste');
  return res.status(200).send('OK!');
};

module.exports = {
  login,
};