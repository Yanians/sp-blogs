"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_1 = tslib_1.__importDefault(require("passport"));
const passport_facebook_1 = require("passport-facebook");
const Registration_1 = tslib_1.__importDefault(require("./Registration"));
;
passport_1.default.use(new passport_facebook_1.Strategy({
    clientID: process.env.SSR_APP_FACEBOOK_APP_ID,
    clientSecret: process.env.SSR_APP_FACEBOOK_APP_SECRET,
    callbackURL: process.env.SSR_APP_FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'emails', 'name', 'photos'],
    enableProof: true, // <--- IMPORTANT
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const email = profile.emails?.[0]?.value;
        const facebookId = profile.id;
        let user = await Registration_1.default.findOne({ $or: [{ facebookId }, { email }] });
        if (user) {
            user.facebookId = facebookId;
            user.photo = profile.photos?.[0]?.value || user.photo;
            await user.save();
            return done(null, user);
        }
        console.log('Facebook profile ', profile);
        const newUser = new Registration_1.default({
            facebookId: profile.id,
            name: profile.displayName,
            email: profile.emails?.[0]?.value || '',
            photo: profile.photos?.[0]?.value || '',
        });
        await newUser.save();
        return done(null, newUser);
    }
    catch (error) {
        done(error);
    }
}));
