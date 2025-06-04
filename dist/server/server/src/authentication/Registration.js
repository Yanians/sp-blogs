"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
const { Schema } = mongoose_1.default;
const UserSchema = new Schema({
    facebookId: { type: String, unique: true, sparse: true },
    googleId: { type: String, unique: true, sparse: true },
    firstName: { type: String },
    lastName: { type: String },
    photo: { type: String, required: false, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false, },
    createdAt: { type: Date, default: Date.now },
});
// Hash password before saving
UserSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password'))
        return next();
    try {
        const salt = await bcryptjs_1.default.genSalt(10);
        user.password = await bcryptjs_1.default.hash(user.password, salt);
        next();
    }
    catch (err) {
        next(err);
    }
});
const User = mongoose_1.default.model('registers', UserSchema);
exports.default = User;
