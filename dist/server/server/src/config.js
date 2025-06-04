"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALGOLIA_SEARCH_API_KEY = exports.ALGOLIA_APP_ID = exports.MONGOOSE_URI = exports.DATABASE_NAME = exports.MONGODB_URI = exports.SERVER_URL = exports.HOST = exports.PORT = void 0;
const env = process.env;
exports.PORT = env.PORT ?? 5000;
exports.HOST = env.HOST ?? "0.0.0.0";
exports.SERVER_URL = `http://${exports.HOST}:${exports.PORT}`;
exports.MONGODB_URI = env.SSR_APP_MONGODB_URI || "mongodb://127.0.0.1:27017/";
exports.DATABASE_NAME = env.DATABASE_NAME || "sp-blogs";
exports.MONGOOSE_URI = `${exports.MONGODB_URI}${exports.DATABASE_NAME}`;
exports.ALGOLIA_APP_ID = env.ALGOLIA_APP_ID || "EVC7066246";
exports.ALGOLIA_SEARCH_API_KEY = env.ALGOLIA_SEARCH_API_KEY || "1826afc9b79c2fb6ddac11cea816895c";
// export const ALGOLIA_ADMIN_API_KEY = env.ALGOLIA_ADMIN_API_KEY || ""
exports.default = {
    PORT: exports.PORT,
    HOST: exports.HOST,
    SERVER_URL: exports.SERVER_URL,
    MONGODB_URI: exports.MONGODB_URI,
    DATABASE_NAME: exports.DATABASE_NAME,
    ALGOLIA_APP_ID: exports.ALGOLIA_APP_ID,
    MONGOOSE_URI: exports.MONGOOSE_URI,
    ALGOLIA_SEARCH_API_KEY: exports.ALGOLIA_SEARCH_API_KEY,
};
