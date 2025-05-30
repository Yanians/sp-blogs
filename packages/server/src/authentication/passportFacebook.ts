import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import User from './Registration';
import { generateToken } from './auth';

interface PassportProps {
accessToken:string,
refreshToken:string,
profile:any,
done:any,
};

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID!,
      clientSecret: process.env.FACEBOOK_APP_SECRET!,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL!,
      profileFields: ['id', 'emails', 'name'],
    },
    async (accessToken, refreshToken, profile, done) => {

      const existingUser = await User.findOne({ email: profile.emails?.[0].value });
      if (existingUser) {
        return done(null, existingUser);
      }

      const user = new User({
        email: profile.emails?.[0].value,
        password: '', // No password needed
      });
      await user.save();
      return done(null, user);
    }
  )
);