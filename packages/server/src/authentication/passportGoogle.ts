import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from './Registration';
import { generateToken } from './auth';
import dotenv from 'dotenv';

dotenv.config({path:'../.env.local'});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
    },
    async (accessToken:string, refreshToken:string, profile:any, done:any) => {
      // Find or create user
    try{
      const existingUser = await User.findOne({ email: profile.emails?.[0].value });
      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser  = new User({
         email: profile.emails?.[0].value,
          firstName: profile.name?.givenName,
          lastName: profile.name?.familyName,
          avatar: profile.photos?.[0].value,
      });
      await newUser.save();

      return done(null, newUser);
    }catch(error){
      done(error);
    }
   }
 )
);

passport.serializeUser((user: any, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user:any = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

