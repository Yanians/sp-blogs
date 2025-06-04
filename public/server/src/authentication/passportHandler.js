"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformUserForClient = transformUserForClient;
exports.passportGoogleCallbackHandler = passportGoogleCallbackHandler;
exports.passportFacebookCallbackHandler = passportFacebookCallbackHandler;
const tslib_1 = require("tslib");
const passport_1 = tslib_1.__importDefault(require("passport"));
const auth_1 = require("./auth");
// import dotenv from 'dotenv';
// dotenv.config({path:'../.env.local'});
function transformUserForClient(user) {
    return {
        name: user.name,
        email: user.email,
        photo: user.photo,
    };
}
function passportGoogleCallbackHandler(req, res, next) {
    passport_1.default.authenticate('google', {
        session: false,
    }, (err, user, info) => {
        if (err || !user || !('_id' in user)) {
            // return res.redirect('/authentication?error=missing_user');
            return res.send(generateOAuthFailureResponse('Login failed or user missing.'));
        }
        try {
            // Create JWT token for the user
            const token = (0, auth_1.generateToken)(user._id);
            const userData = transformUserForClient(user);
            return res.send(generateOAuthSuccessResponse(token, userData));
        }
        catch (error) {
            return res.send(generateOAuthFailureResponse('Server error during login.'));
        }
    })(req, res, next);
}
function passportFacebookCallbackHandler(req, res, next) {
    passport_1.default.authenticate('facebook', {
        session: false,
    }, (err, user, info) => {
        if (err || !user || !('_id' in user)) {
            // return res.redirect('/authentication?error=missing_user');
            return res.send(generateOAuthFailureResponse('Login failed or user missing.'));
        }
        try {
            const token = (0, auth_1.generateToken)(user._id);
            const userData = transformUserForClient(user);
            return res.send(generateOAuthSuccessResponse(token, userData));
        }
        catch (error) {
            return res.send(generateOAuthFailureResponse('Server error during login.'));
        }
    })(req, res, next);
}
function generateOAuthSuccessResponse(token, user) {
    return `
       <html>
          <body>
            <script>
              const token = ${JSON.stringify(token)};
              const user = ${JSON.stringify(user)};
              window.opener && window.opener.postMessage({ token, user }, window.opener.location.origin);
              window.close();
            </script>
          </body>
       </html>
  `;
}
function generateOAuthFailureResponse(message) {
    return `
    <html>
      <body>
        <script>
          window.opener && window.opener.postMessage({
            token: null,
            message: ${JSON.stringify(message)}
          }, window.location.origin);
          window.close();
        </script>
      </body>
    </html>
  `;
}
// Notes:
// ✅ passport.authenticate('facebook', { session: false }) disables server-side session usage.
// ✅ transformUserForClient(user) lets you unify user formatting (email, name, avatar).
// ✅ The response includes a fallback check window.opener && ... to avoid runtime errors.
// If you don’t have transformUserForClient, you can use this simple version:
// ts
// Copy
// Edit
// export function transformUserForClient(user: any) {
//   return {
//     name: user.name || '',
//     email: user.email || '',
//     photo: user.photo || '',
//   };
// }
