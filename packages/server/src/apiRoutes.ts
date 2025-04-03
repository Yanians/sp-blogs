
import express from 'express'
import cors from 'cors';
import { connectClient } from './db';
import algoliasearch from 'algoliasearch';
import { ObjectId } from 'mongoose'

const router = express.Router();
router.use(cors());
router.use(express.json());

const algoliaClient = algoliasearch("EVC7066246", "1826afc9b79c2fb6ddac11cea816895c");

const algoliaIndex = algoliaClient.initIndex('companies');

interface companyProps {
  _id: ObjectId,
  permalink: string;
  name: string;
  category_code: number;
  number_of_employees: number;
  founded_year: number;
  tag_list: string;
  email_address: string;
  phone_number: number;
  description: string;
  overview: string,
  images: object[],
  acquisition: object[],

}

const syncDataToAlgolia = async (companies:any) => {

  const algoliaRecords = companies.map((doc: any) => ({
    objectID: doc._id,
    name: doc.name,
    category_code: doc.category_code,
    permalink: doc.permalink
  }));
  await algoliaIndex.saveObjects(algoliaRecords);
};

router.get('/sort-options', async (req, res) => {
  try {
        const companies = await connectClient();
        const company = await companies.find({})
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
                        }).limit(5).toArray();
                      syncDataToAlgolia(company)
      }catch (err){
        console.error('error coming from ',err)
  }        
})

router.get('/companies', async (req, res) => {
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
})
router.get('/companies/:name', async (req, res) => {
  console.log(req.params);
  const client = await connectClient();
  const customers = await client.collection("companies")
    .findOne({ name: req.params.name });
  res.send({ customers });
});

// router.get('/contest',async(req,res)=>{
//   const client = await connectClient();
//   const contest = await client.collection("contests").find().toArray();
//   res.send({contest});
// });

// router.post('/contest/:contestId',async(req,res)=>{
//   const client = await connectClient();

//   const { newNameValue } = req.body;

//   const doc = await client.collection("store")
//   .findOneAndUpdate(
//     { id:req.params.contestId },
//     { $push:{
//       names:{
//                id:newNameValue.toLowerCase().replace(/\s/g,'-'),
//              name:newNameValue,
//         timestamp:new Date(),
//       }
//     }
//   },
//   { returnDocument:"after"},
//   );
//   res.send({updatedContest:doc.value}); 
// });

// router.post('/store/',async(req,res)=>{
//   const { contestName, categoryName, description  } = req.body;

//   const client = await connectClient();
//   const doc = await client.collection("companies").insertOne({
//   id: contestName.toLowerCase.replace(/\s/g,"-"),
//   contestName,
//   categoryName,
//   description,
//   names:[],
//   });

//   const contest = await client.collection("store").find({_id:doc.insertedId});
//   res.send({ contest }); 
// });

export default router;

