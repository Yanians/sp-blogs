import passport from 'passport';
import { Strategy as InstagramStrategy } from 'passport-instagram';
import User from './Registration';
import { generateToken } from './auth';

passport.use(
  new InstagramStrategy(
    {
      clientID: process.env.INSTAGRAM_CLIENT_ID!,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
      callbackURL: process.env.INSTAGRAM_CALLBACK_URL!,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ email: profile._json.data.email });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = new User({
        email: profile._json.data.email,
        password: '', // No password needed
      });
      await user.save();
      return done(null, user);
    }
  )
);