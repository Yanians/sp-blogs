import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from './Registration';
import { generateToken } from './auth';
// import dotenv from 'dotenv';

// dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.SSR_APP_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.SSR_APP_GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.SSR_APP_GOOGLE_CALLBACK_URL!,
    },
    async (accessToken:string, refreshToken:string, profile:any, done:any) => {

      // Find or create user
      console.log('GOOGLE PROFILE:', JSON.stringify(profile, null, 2));
     try {
        const email = profile.emails?.[0]?.value;
        const firstName = profile.name?.givenName ?? '';
        const lastName = profile.name?.familyName ?? '';
        const photo = profile.photos?.[0]?.value ?? '';
        const googleId = profile.id;
        const name = [firstName, lastName].filter(Boolean).join(' ') || profile.displayName || '';
        let user = await User.findOne({ email });

       
        if (!user) {
          user = await new User({
            email,
            firstName,
            lastName,
            photo,
          }).save();
          console.log(user)
        }

        if(!user.googleId){
            user.googleId = googleId;
             await user.save();
        }

        // ✅ Return only the fields the frontend expects
        return done(null, {
          _id: user._id,
          name,
          email,
          photo,
        });

      } catch (error) {
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

