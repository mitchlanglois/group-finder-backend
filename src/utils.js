const jwt = require('jsonwebtoken')

function getUserId(context) {
  const { token } = context.request.cookies
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET)
    return userId
  }
}

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

module.exports = {
  getUserId,
  AuthError
}
