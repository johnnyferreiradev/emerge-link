import jwt from 'jsonwebtoken';

export default function verifyJWT(request) {
  const authorization = 'authorization';
  const token = request.headers[authorization];

  if (!token) return false;

  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    if (!decoded) return false;

    return true;
  } catch (e) {
    return false;
  }
}
