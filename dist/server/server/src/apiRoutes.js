"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cors_1 = tslib_1.__importDefault(require("cors"));
const express_1 = tslib_1.__importDefault(require("express"));
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const db_1 = require("./db");
const requireAuth_1 = require("./authentication/requireAuth");
const Registration_1 = tslib_1.__importDefault(require("./authentication/Registration"));
const Analytics_1 = tslib_1.__importDefault(require("./authentication/Analytics"));
const passport_1 = tslib_1.__importDefault(require("passport"));
const auth_1 = require("./authentication/auth");
const passportHandler_1 = require("./authentication/passportHandler");
const asyncHandler_1 = tslib_1.__importDefault(require("./authentication/asyncHandler"));
const router = express_1.default.Router();
router.use((0, cors_1.default)());
router.use(express_1.default.json());
router.get('/api/companies', async (req, res) => {
    //  get the data from MongoDB
    try {
        const client = await (0, db_1.connectClient)();
        const company = await client.collection('companies')
            .find({})
            .project({
            _id: 1,
            permalink: 1,
            name: 1,
            category_code: 1,
            number_of_employees: 1,
            founded_year: 1,
            tag_list: 1,
            email_address: 1,
            phone_number: 1,
            description: 1,
            overview: 1,
            images: 1,
            acquisition: 1,
        })
            .limit(6).toArray();
        if (company) {
            res.send({ company });
        }
        else {
            res.status(500);
        }
    }
    catch (err) {
        res.status(400);
        console.warn('Error found! ', err);
    }
});
router.post('/auth/register', (0, asyncHandler_1.default)(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log('Register body:', req.body);
    const existingUser = await Registration_1.default.findOne({ email });
    if (existingUser) {
        return res.status(400).send('Email already in use');
    }
    const newUser = new Registration_1.default({ firstName, lastName, email, password });
    try {
        const savedUser = await newUser.save();
        console.log("✅ User saved:", savedUser);
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        console.error("❌ Error saving user:", error);
        res.status(500).json({ message: "Database save failed" });
    }
}));
// router.post('/auth/register', AsyncHandler (async(req:Request, res:Response) => {
//   const { firstName, lastName, email, password } = req.body as any;
// try{
//     const client = await connectClient();
//     const collection = client.collection('register');
//     // Check if user already exists
//     const existingUser = await collection.findOne({ email });
//     if (existingUser) {
//       return res.status(400).send('Email already in use');
//     }
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log("Hashed password:", hashedPassword);
//     // Insert new user with hashed password
//     const newUser = {
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//     };
//     const result = await collection.insertOne(newUser);
//     if (!result.acknowledged) {
//       return res.status(500).send('Failed to register user');
//     }
//     // Generate token
//     const token = generateToken(result.insertedId);
//     return res.status(201).json({ token });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send('Internal Server Error');
//   }
// }));
// router.post('/auth/login',
//    (req, res, next) => {
//     console.log('Login route hit'); // check if request hits route
//     next();
//   },
//    passport.authenticate('local', { session: false }),
//    // @ts-ignore
//     (req, res) => {
//     console.log('Authenticated user:', req.user);
//   if (!req.user || !req.user._id) {
//      return res.status(401).send('Unauthorized');
//   }
//   const token = generateToken(req?.user?._id);
//     res.send({ token });
// },
// // @ts-ignore
// (err, req, res, next) => {
//     console.error('Login failed:', err.message);
//     res.status(401).send('Unauthorized');
//   }
// );
router.post('/auth/login', (req, res, next) => {
    console.log('Login route hit');
    next();
}, passport_1.default.authenticate('local', { session: false }), 
//@ts-ignore
(req, res) => {
    console.log('Authenticated user:', req.user);
    if (!req.user || !req.user._id) {
        return res.status(401).send('Unauthorized');
    }
    const token = (0, auth_1.generateToken)(req.user._id);
    res.send({ token });
});
// Google Login Route
router.get('/auth/google', (req, res, next) => {
    // const secure = req.query.secure === 'true';
    passport_1.default.authenticate('google', {
        session: false,
        scope: ['profile', 'email'],
        prompt: 'login',
    })(req, res, next);
});
router.get('/auth/google/callback', passportHandler_1.passportGoogleCallbackHandler);
// Instagram Login Route
/**
router.get('/auth/instagram', passport.authenticate('instagram',{ scope: ['user_profile', 'user_media', 'email'] }));
router.get(
  '/auth/instagram/callback',
  passport.authenticate('instagram', { session: false }),
  (req, res) => {
    const token = generateToken(req?.user._id);
    res.redirect(`http://localhost:3000/login?token=${token}`);
  }
);
 */
// Facebook Login Route
router.get('/auth/facebook', (req, res, next) => {
    const authType = req.query.auth_type === 'reauthenticate' ? 'reauthenticate' : 'rerequest';
    const authenticate = passport_1.default.authenticate('facebook', {
        scope: ['email'],
        authType,
        display: 'popup',
    });
    authenticate(req, res, next);
});
router.get('/auth/facebook/callback', passportHandler_1.passportFacebookCallbackHandler);
// passport.authenticate('facebook',
//   {
//     failureRedirect: '/authentication?error=login_failed',
//     // successRedirect: '/',  
//    session: false 
//   }
// ),
// AsyncHandler(async(req:Request, res:Response) => {
//    if (!req.user || !('_id' in req.user)) {
//     return res.redirect('/authentication?error=missing_user');
//     //  return res.status(401).json({ error: 'missing_user' });
//   }  
//     //  const token = generateToken((req.user as any)._id);
//     //  const user = req.user as any;
//       const token = generateToken(req.user._id);
//       const user = req.user as any;
//  res.json({
//     token,
//     user: {
//       name: user.name,
//       email: user.email,
//       photo: user.photo,
//     },
//   });
//   const html = `
//     <script>
//       window.opener.postMessage(${JSON.stringify(
//         { token, user: { name: user.name, email: user.email, photo: user.photo } },
//       )}, "*");
//       window.close();
//     </script>
//   `;
//   res.setHeader('Content-Type','text/html');
//   res.send(html);
//     // const html = `
//     //         <!DOCTYPE html>
//     //         <html>
//     //           <head><title>Authenticating...</title></head>
//     //           <body>
//     //             <script>
//     //               (function () {
//     //                 const data = ${JSON.stringify({
//     //                   token,
//     //                   user: { name: user.name, email: user.email, photo: user.photo },
//     //                 })};
//     //                 if (window.opener) {
//     //                   window.opener.postMessage(data, ${process.env.REACT_APP_SERVER_URL});
//     //                   window.close();
//     //                 } else {
//     //                   document.body.innerText = "Login successful. You can close this tab.";
//     //                 }
//     //               })();
//     //             </script>
//     //           </body>
//     //         </html>
//     //       `;
//     // res.setHeader('Content-Type', 'text/html');
//     // res.send(html);
//   }
// ));
router.get('/auth/me', requireAuth_1.protect, (0, asyncHandler_1.default)(async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const user = req.user;
    res.json({ user });
}));
// router.get('/auth/me', AsyncHandler(async(req:Request, res:Response) => {
//   const authHeader = req.headers.authorization;
//   const token = authHeader?.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'No token' });
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
//     const user = await User.findById(decoded.userId);
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json({ user:{
//       name: req.user.email,
//     } });
//   } catch (err) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// }));
// Log a custom event
router.post('/analytics/log-event', async (req, res) => {
    const { event, data } = req.body;
    const newEvent = new Analytics_1.default({ event, data });
    await newEvent.save();
    res.status(201).send('Event logged successfully');
});
router.post('/auth/facebook/data-delete', (0, asyncHandler_1.default)(async (req, res) => {
    const signedRequest = req.body.signed_request;
    if (!signedRequest)
        return res.status(400).json({ error: 'Missing signed_request' });
    const [encodedSig, payload] = signedRequest.split('.');
    const appSecret = process.env.FACEBOOK_APP_SECRET || 't9ombajtiwsiatapmantomebatti';
    // Recalculate the signature
    const expectedSig = crypto_1.default
        .createHmac('sha256', appSecret)
        .update(payload)
        .digest('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    if (encodedSig !== expectedSig) {
        return res.status(400).json({ error: 'Invalid signature' });
    }
    const decodedPayload = JSON.parse(Buffer.from(payload, 'base64').toString('utf8'));
    const facebookUserId = decodedPayload.user_id;
    // Delete the user from your database
    await Registration_1.default.findOneAndDelete({ facebookId: facebookUserId });
    // Generate a request ID (can be UUID or random string)
    const requestId = crypto_1.default.randomBytes(16).toString('hex');
    const statusUrl = `https://facebook-compliance.vercel.app/index.html?request_id=${requestId}`;
    return res.json({
        url: statusUrl,
        confirmation_code: requestId,
    });
}));
router.get('/data-deletion-status', (req, res) => {
    const { request_id } = req.query;
    res.send(`Your data deletion request (${request_id}) has been processed.`);
});
exports.default = router;
// const algoliaClient = algoliasearch("EVC7066246", "1826afc9b79c2fb6ddac11cea816895c");
// const algoliaIndex = algoliaClient.initIndex('companies');
// interface companyProps {
//   _id: ObjectId,
//   permalink: string;
//   name: string;
//   category_code: number;
//   number_of_employees: number;
//   founded_year: number;
//   tag_list: string;
//   email_address: string;
//   phone_number: number;
//   description: string;
//   overview: string,
//   images: object[],
//   acquisition: object[],
// }
// const syncDataToAlgolia = async (companies:any) => {
//   const algoliaRecords = companies.map((doc: any) => ({
//     objectID: doc._id,
//     name: doc.name,
//     category_code: doc.category_code,
//     permalink: doc.permalink
//   }));
//   await algoliaIndex.saveObjects(algoliaRecords);
// };
// router.get('/sort-options', async (req, res) => {
//   try {
//         const companies = await connectClient();
//         const company = await companies.find({})
//                         .project({
//                           _id: 1,
//                           permalink: 1,
//                           name: 1,
//                           category_code: 1,
//                           number_of_employees: 1,
//                           founded_year: 1,
//                           tag_list: 1,
//                           email_address: 1,
//                           phone_number: 1,
//                           description: 1,
//                           overview: 1,
//                           images: 1,
//                           acquisition: 1,
//                         }).limit(5).toArray();
//                       syncDataToAlgolia(company)
//       }catch (err){
//         console.error('error coming from ',err)
//   }        
// })
// const SRC_DIR = path.resolve(__dirname, '../../client/src');
// // Helper function to recursively get all files and folders inside `src`
// const mapFilesAndFolders = (dir: string) => {
//   const entries = fs.readdirSync(dir, { withFileTypes: true });
//   return entries
//     .filter((entry) => ![
//       'profile', 
//       'redux',
//       'webpack.config.js',
//       'webpack.build.js',
//       'tsconfig.json',
//       'babel.config.js',
//       'package-lock.json',
//       'dist',
//       'commerse',
//       'node_modules',
//       'public',
//     ].includes(entry.name))
//     .map((entry): any => {
//       const fullPath = path.join(dir, entry.name);
//       if (entry.isDirectory()) {
//         return { name: entry.name, path: fullPath, children: mapFilesAndFolders(fullPath) };
//       }
//       return { name: entry.name, path: fullPath };
//     });
// };
// const blogroutes = [
//   {
//     category: {
//       name: 'sp-blogs-routes',
//     },
//     items: [
//       {
//         name: 'blogs',
//         href: `/blogs/${blogsId}`,
//         icon: <DownloadRoundedIcon className="DocSearch-NewStartScreenTitleIcon" />,
//       },
//       {
//         name: 'Components',
//         href: '/material-ui/getting-started/supported-components/',
//         icon: <SmartButtonRoundedIcon className="DocSearch-NewStartScreenTitleIcon" />,
//       },
//       {
//         name: 'Example projects',
//         href: '/material-ui/getting-started/example-projects/',
//         icon: <LibraryBooksRoundedIcon className="DocSearch-NewStartScreenTitleIcon" />,
//       },
//       {
//         name: 'Templates',
//         href: '/material-ui/getting-started/templates/',
//         icon: <CollectionsBookmarkRoundedIcon className="DocSearch-NewStartScreenTitleIcon" />,
//       },
//     ],
//   },
// ]
// router.get('/files', (_, res)=> {
//   const mappedFiles = mapFilesAndFolders(SRC_DIR);
//   res.json(mappedFiles);
// });
// router.get("/blogs", (req, res) => {
//   const srcPath = path.join(__dirname, "../../../client/src/blog");
//   const fileTree = createFileTree(srcPath);
//   res.json(fileTree);
// });
