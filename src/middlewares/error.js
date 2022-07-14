const statusByErrorCode = {
  badRequest: 400,
  notFound: 404,
  alreadyExists: 409,
  unprocessableEntity: 422,
};

const statusByErrorMessage = {
  '"quantity" must be greater than or equal to 1':
    422,
  '"quantity" is required': 400,
  '"productId" is required': 400,
  '"name" is required': 400,
  '"name" length must be at least 5 characters long': 422,
};
  
module.exports = (err, req, res, _next) => {
  if (err.isJoi) {
    const errorMessage = err.details.message;

    const statusJoi = statusByErrorMessage[errorMessage];
    return res.status(statusJoi)
      .json({ message: errorMessage });
  }

  const status = statusByErrorCode[err.code] || 500;

  return res.status(status).json({ message: err.message });
};
