"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const config_1 = require("../config");
const connectDatabase = async () => {
    try {
        await mongoose_1.default.connect(config_1.MONGOOSE_URI); // bypass TS strictness on connection options
        console.log('✅ MongoDB connected at', config_1.MONGOOSE_URI);
    }
    catch (error) {
        console.error('❌ MongoDB connection failed:', error);
        process.exit(1);
    }
};
exports.connectDatabase = connectDatabase;
