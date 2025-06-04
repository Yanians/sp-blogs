"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = exports.generateToken = void 0;
const tslib_1 = require("tslib");
const passport_1 = tslib_1.__importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
const Registration_1 = tslib_1.__importDefault(require("./Registration"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
passport_1.default.use(new passport_local_1.Strategy({ usernameField: 'email' }, async (email, password, done) => {
    const user = await Registration_1.default.findOne({ email });
    if (!user) {
        return done(null, false, { message: 'Invalid email or password' });
    }
    const isMatch = await bcryptjs_1.default.compare(password, user.password);
    if (!isMatch) {
        return done(null, false, { message: 'Invalid email or password' });
    }
    return done(null, user);
}));
// JWT token generation
const generateToken = (userId) => {
    return jsonwebtoken_1.default.sign({ id: userId }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
};
exports.generateToken = generateToken;
// JWT authentication middleware
const protect = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token)
        return res.status(401).send('Access denied');
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'secret');
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(400).send('Invalid token');
    }
};
exports.protect = protect;
