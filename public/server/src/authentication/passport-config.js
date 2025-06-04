"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_1 = tslib_1.__importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
const Registration_1 = tslib_1.__importDefault(require("./Registration")); // This should be your Mongoose model
passport_1.default.use(new passport_local_1.Strategy({ usernameField: 'email' }, // tell Passport to use `email` instead of `username`
async (email, password, done) => {
    try {
        const user = await Registration_1.default.findOne({ email });
        if (!user) {
            return done(null, false, { message: 'Invalid email or password' });
        }
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return done(null, false, { message: 'Invalid email or password' });
        }
        return done(null, user); // success
    }
    catch (err) {
        return done(err);
    }
}));
