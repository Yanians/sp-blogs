"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_1 = tslib_1.__importDefault(require("passport"));
const passport_instagram_1 = require("passport-instagram");
const Registration_1 = tslib_1.__importDefault(require("./Registration"));
passport_1.default.use(new passport_instagram_1.Strategy({
    clientID: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    callbackURL: process.env.INSTAGRAM_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await Registration_1.default.findOne({ email: profile._json.data.email });
    if (existingUser) {
        return done(null, existingUser);
    }
    const user = new Registration_1.default({
        email: profile._json.data.email,
        password: '', // No password needed
    });
    await user.save();
    return done(null, user);
}));
