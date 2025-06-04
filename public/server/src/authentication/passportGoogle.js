"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_1 = tslib_1.__importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const Registration_1 = tslib_1.__importDefault(require("./Registration"));
// import dotenv from 'dotenv';
// dotenv.config();
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: process.env.SSR_APP_GOOGLE_CLIENT_ID,
    clientSecret: process.env.SSR_APP_GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.SSR_APP_GOOGLE_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
    // Find or create user
    console.log('GOOGLE PROFILE:', JSON.stringify(profile, null, 2));
    try {
        const email = profile.emails?.[0]?.value;
        const firstName = profile.name?.givenName ?? '';
        const lastName = profile.name?.familyName ?? '';
        const photo = profile.photos?.[0]?.value ?? '';
        const googleId = profile.id;
        const name = [firstName, lastName].filter(Boolean).join(' ') || profile.displayName || '';
        let user = await Registration_1.default.findOne({ email });
        if (!user) {
            user = await new Registration_1.default({
                email,
                firstName,
                lastName,
                photo,
            }).save();
            console.log(user);
        }
        if (!user.googleId) {
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
    }
    catch (error) {
        done(error);
    }
}));
passport_1.default.serializeUser((user, done) => done(null, user.id));
passport_1.default.deserializeUser(async (id, done) => {
    try {
        const user = await Registration_1.default.findById(id);
        done(null, user);
    }
    catch (error) {
        done(error);
    }
});
