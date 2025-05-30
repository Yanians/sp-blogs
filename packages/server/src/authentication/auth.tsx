import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import User from './Registration';
import jwt from 'jsonwebtoken';

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email: string, password: string, done:any) => {
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false, { message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return done(null, false, { message: 'Invalid email or password' });
    }

    return done(null, user);
  })
);

// JWT token generation
export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
};

// JWT authentication middleware
export const protect = (req: any, res: any, next: any) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
};