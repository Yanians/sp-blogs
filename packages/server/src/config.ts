const env = process.env;

export const PORT = env.PORT ?? 5000;
export const HOST = env.HOST ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}`;
export const MONGODB_URI = env.MONGODB_URI || "mongodb://127.0.0.1:27017/";
export const DATABASE_NAME = env.DATABASE_NAME || "sp-blogs";
export const MONGOOSE_URI = `${MONGODB_URI}${DATABASE_NAME}`;

export const ALGOLIA_APP_ID = env.ALGOLIA_APP_ID || "EVC7066246";
export const ALGOLIA_SEARCH_API_KEY = env.ALGOLIA_SEARCH_API_KEY || "1826afc9b79c2fb6ddac11cea816895c"
// export const ALGOLIA_ADMIN_API_KEY = env.ALGOLIA_ADMIN_API_KEY || ""
export default {
         PORT,
           HOST,
        SERVER_URL,
        MONGODB_URI,
        DATABASE_NAME,
        ALGOLIA_APP_ID,
        MONGOOSE_URI,
        ALGOLIA_SEARCH_API_KEY,
     };
