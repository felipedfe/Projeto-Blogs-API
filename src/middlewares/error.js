const statusByErrorCode = {
  badRequest: 400,
  unauthorized: 401,
  notFound: 404,
  alreadyExists: 409,
  unprocessableEntity: 422,
};

const statusByErrorMessage = {
  '"displayName" length must be at least 8 characters long':
    400,
  '"password" length must be at least 6 characters long': 400,
  '"image" is required': 400,
  '"name" is required': 400,
};
  
module.exports = (err, req, res, _next) => {
  if (err.isJoi) {
    console.log(err.isJoi);
    const errorMessage = err.message;
    console.log('--->', errorMessage);
    
    const statusJoi = statusByErrorMessage[errorMessage];
    return res.status(statusJoi)
    .json({ message: errorMessage });
  }

  const status = statusByErrorCode[err.code] || 500;

  return res.status(status).json({ message: err.message });
};
