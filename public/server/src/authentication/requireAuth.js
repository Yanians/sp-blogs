"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const Registration_1 = tslib_1.__importDefault(require("./Registration")); // adjust the path
const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Unauthorized, no token' });
        return; // important!
    }
    try {
        const token = authHeader.split(' ')[1];
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const user = await Registration_1.default.findById(decoded.id).select('firstName lastName email photo facebookId createdAt');
        if (!user)
            throw new Error('User not found');
        req.user = {
            _id: user._id.toString(),
            //   facebookId: user.facebookId,
            //   firstName: user.firstName,
            //   lastName: user.lastName,
            email: user.email,
            //   photo: user.photo,
            //   createdAt: user.createdAt,
        };
        next();
    }
    catch (err) {
        res.status(401).json({ message: 'Unauthorized, token invalid' });
    }
};
exports.protect = protect;
