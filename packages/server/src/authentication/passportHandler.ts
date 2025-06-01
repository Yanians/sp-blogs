import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { generateToken } from './auth';
// import dotenv from 'dotenv';
// dotenv.config({path:'../.env.local'});

export function transformUserForClient(user: any) {
  return {
    name: user.name,
    email: user.email,
    photo: user.photo,
  };
}

export function passportGoogleCallbackHandler(req: Request, res: Response, next: NextFunction) {
  passport.authenticate('google', {
     session: false,
     }, (err, user, info) => {

    if (err || !user || !('_id' in user)) {
      // return res.redirect('/authentication?error=missing_user');
      return res.send(generateOAuthFailureResponse('Login failed or user missing.'));
    }

    try {
      // Create JWT token for the user
      const token = generateToken((user as any)._id);
      const userData = transformUserForClient(user);
      return res.send(generateOAuthSuccessResponse(token, userData));
    } catch(error){
     return res.send(generateOAuthFailureResponse('Server error during login.'));
    }

  })(req, res, next);
}

export function passportFacebookCallbackHandler(req: Request, res: Response, next: NextFunction) {
  passport.authenticate('facebook', {
      session: false,
     }, (err: any, user: any, info: any) => {
    
    if (err || !user || !('_id' in user)) {
      // return res.redirect('/authentication?error=missing_user');
      return res.send(generateOAuthFailureResponse('Login failed or user missing.'));
    }

  try {
      const token = generateToken((user as any)._id);
      const userData = transformUserForClient(user);
      return res.send(generateOAuthSuccessResponse(token, userData));
    } catch (error) {
        return res.send(generateOAuthFailureResponse('Server error during login.'));
    }  
  })(req, res, next);
}

function generateOAuthSuccessResponse(token: string, user: any) {
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

function generateOAuthFailureResponse(message: string) {
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
