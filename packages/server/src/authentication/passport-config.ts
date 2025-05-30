import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import User from './Registration'; // This should be your Mongoose model

passport.use(
  new LocalStrategy(
    { usernameField: 'email' }, // tell Passport to use `email` instead of `username`
    async (email, password, done) => {
      try {
        const user:any = await User.findOne({ email });
        if (!user) {
          return done(null, false, { message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: 'Invalid email or password' });
        }

        return done(null, user); // success
      } catch (err) {
        return done(err);
      }
    }
  )
);
