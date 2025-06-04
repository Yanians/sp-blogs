import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import User from './Registration';
import { generateToken } from './auth';
// import dotenv from 'dotenv';

// dotenv.config();

interface PassportProps {
accessToken:string,
refreshToken:string,
profile:any,
done:any,
};

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.SSR_APP_FACEBOOK_APP_ID!,
      clientSecret: process.env.SSR_APP_FACEBOOK_APP_SECRET!,
      callbackURL: process.env.SSR_APP_FACEBOOK_CALLBACK_URL!,
      profileFields: ['id', 'emails', 'name','photos'],
        enableProof: true, // <--- IMPORTANT
    },
    async (accessToken, refreshToken, profile, done) => {
   try {
      const email = profile.emails?.[0]?.value;
      const facebookId = profile.id;

      let user = await User.findOne({ $or:[{facebookId},{ email }] });

      if (user) {
           user.facebookId = facebookId;
          user.photo = profile.photos?.[0]?.value || user.photo;
          await user.save();
          return done(null, user);
      }

      console.log('Facebook profile ', profile);

      const newUser = new User({
        facebookId: profile.id,
          name: profile.displayName,
          email: profile.emails?.[0]?.value || '',
          photo: profile.photos?.[0]?.value || '',
      });
      await newUser.save();
      return done(null, newUser);
   }catch(error)  {
      done(error as any);
   }
    }
  )
);