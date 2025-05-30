import cors from 'cors';
import express, { Request, Response } from 'express'
import { connectClient } from './db';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from "uuid";
// import { authored } from './db';
import bcrypt from 'bcryptjs';
import  User from './authentication/Registration';
import Analytics from './authentication/Analytics';
import passport from 'passport';
import { generateToken } from './authentication/auth';
const router = express.Router();
router.use(cors());
router.use(express.json());

export const config = {
  MONGO_URI: process.env.MONGO_URI,
  API_BLOG_IMAGES: process.env.API_BLOG_IMAGES,
  API_PROFILE_IMAGES: process.env.API_PROFILE_IMAGES,
  API_SVG_IMAGES: process.env.API_SVG_IMAGES,
  API_BACKGROUND_IMAGES: process.env.API_BACKGROUND_IMAGES,
};


router.get('/api/companies', async(req, res) => {
  //  get the data from MongoDB
  try {
    const client = await connectClient();
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

      res.send({ company })

    } else {
      res.status(500);
    }

  } catch (err) {
    res.status(400)
    console.warn('Error found! ', err);
  }
});
const id = Buffer.from(uuidv4()).toString("base64");

router.get('/blogs/images', async (req, res) => {
   const imageDir = {
    id:id.split('').sort((a:string,b:string): any => a.length > b.length).join('').toString(),
    blogImage:config.API_BLOG_IMAGES,
    svgImage:config.API_SVG_IMAGES,
    profileImage:config.API_PROFILE_IMAGES,
    backgroundImage:config.API_BACKGROUND_IMAGES,
   };  
  // const client = await connectClient();
  // const customers = await client.collection("companies")
  //   .findOne({ name: req.params.name });
  // res.send({ customers });

    res.json({imageDir});

  });

  interface RegisterRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const asyncHandler = (fn:any) => (req:Request, res:Response, next:any) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

router.post('/auth/register', asyncHandler(async (req:Request, res:Response) => {
  const { firstName, lastName, email, password } = req.body;
console.log('Register body:', req.body);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email already in use');
    }

    const newUser = new User({ firstName, lastName, email, password });
    try {
  const savedUser = await newUser.save();
  console.log("✅ User saved:", savedUser);
  res.status(201).json({ message: "User registered successfully" });
} catch (error) {
  console.error("❌ Error saving user:", error);
  res.status(500).json({ message: "Database save failed" });
}

 

    // console.error('Save failed:', error);
    // res.status(500).send('Could not save user');

    // res.status(201).json({ message: 'User registered successfully' });
    // res.status(500).json({ message: 'Server error' }); // ✅ still safe
}));


// router.post('/auth/register', asyncHandler (async(req:Request, res:Response) => {
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


router.post(
  '/auth/login',
  (req, res, next) => {
    console.log('Login route hit');
    next();
  },
  passport.authenticate('local', { session: false }),
  //@ts-ignore
  (req, res) => {
    console.log('Authenticated user:', req.user);
    if (!req.user || !req.user._id) {
      return res.status(401).send('Unauthorized');
    }
    const token = generateToken(req.user._id);
    res.send({ token });
  }
);

// Google Login Route
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { 
    session: false,
    failureRedirect:'/redirecting',
   }),
  (req:Request, res:Response) => {
    const token = generateToken((req.user as any)?._id); //JWT generator
    const redirectUrl = process.env.FRONTEND_SUCCESS_URL || 'http://localhost:5000/redirecting';
    res.redirect(`${redirectUrl}?token=${token}`);
  }
);


// Facebook Login Route
router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { session: false }),
  (req, res) => {
    const token = generateToken(req.user._id);
    res.redirect(`http://localhost:3000/login?token=${token}`);
  }
);
// Instagram Login Route
router.get('/auth/instagram', passport.authenticate('instagram'));
router.get(
  '/auth/instagram/callback',
  passport.authenticate('instagram', { session: false }),
  (req, res) => {
    const token = generateToken(req.user._id);
    res.redirect(`http://localhost:3000/login?token=${token}`);
  }
);

// Log a custom event
router.post('/analytics/log-event', async (req, res) => {
  const { event, data } = req.body;

  const newEvent = new Analytics({ event, data });
  await newEvent.save();

  res.status(201).send('Event logged successfully');
});


export default router;


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


