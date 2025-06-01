import jwt from 'jsonwebtoken';
import User from './Registration'; // adjust the path
import { Request, Response, NextFunction } from 'express';

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized, no token' });
    return; // important!
  }

  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const user = await User.findById(decoded.id).select('firstName lastName email photo facebookId createdAt');
    
    if (!user) throw new Error('User not found');

    req.user = {
      _id: user._id.toString(),
    //   facebookId: user.facebookId,
    //   firstName: user.firstName,
    //   lastName: user.lastName,
      email: user.email,
    //   photo: user.photo,
    //   createdAt: user.createdAt,
    };

    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized, token invalid' });
  }
};
