import { MongoClient } from 'mongodb';

import { MONGODB_URI, DATABASE_NAME} from './config';

let connectedClient:any;

export const connectClient = async () => {
      if(connectedClient){
        return connectedClient.db(DATABASE_NAME);
      }
    const client = new MongoClient(MONGODB_URI);
    await client.connect() //async
    //ping
    await client.db(DATABASE_NAME).command({ping: 1});
    console.info("Connected to MongoDB");

    connectedClient = client;

    return connectedClient.db(DATABASE_NAME);
}

export const stopClient = async () =>{
    await connectedClient?.close();

}

// export const authored = {
  
//     'tres-paylas': {
//       codename:`
//           is an independent IT consultant working in the areas of client / server programming, High Performance 
//           Computing and web development. He is an expert in C/C++, C# and JavaScript. Florian regularly gives talks at conferences 
//           or user groups. You can find his blog at florian-rappl.de.
//       `,
//       name: 'Tressy Paylas',
//       avatar: '/m7.jpg',
//       img:'/1707845731YccofxHOkc1gSycdBiCh9MMfgdNxk3et1eGwK2OO1U6lrVZJB-out-0-300x225.png',
//     },

//     'danilo-leal': {
//       codename:`is a blockchain developer and technical educator at the Web3 Foundation, the foundation that's building
//        the next generation of the free people's internet. He's also a DX person at Diffbot. He runs two newsletters you 
//        should subscribe to if you're interested in Web3.0: Dot Leap covers ecosystem and tech development of Web3,
//         and NFT Review covers the evolution of the non-fungible token (digital collectibles)
//        ecosystem inside this emerging new web. His current passion project is RMRK.app.`,
//       name: 'Rolex',
//       avatar: '/creative.png',
//       img:'/1700662284YJmoKnUgc0qaDpbOQ0mcZi5zEpf0QpyWvle2cz5fjq1eAorHB-out-0-300x179.png',
//       github: 'danilo-leal',
//     },

//     'ken-beltran': {
//       codename: `I'm a JavaScript and Ruby Developer working in London, focusing on tooling, ES2015 and ReactJS.`,
//       name:'Kenneth Duremdez Beltran',
//       img:'/1680044249wordpress-gallery-plugins-300x170.jpg',
//       avatar: '/m1.png',
//     },
//     'ayan-fernandez': {
//       codename: `I'm a (full-stack) web and app developer with more than 5 years' experience programming for the web using HTML, CSS, Sass, 
//       JavaScript, and PHP. I'm an expert of JavaScript and HTML5 APIs but my interests include web security, 
//       accessibility, performance, and SEO. I'm also a regular writer for several networks, speaker, 
//       and author of the books jQuery in Action, third edition and Instant jQuery Selectors.`,
//       name:'Antonov Fernandez',
//       img:'/1695018352best-programming-fonts-300x170.jpg',
//       avatar: '/m31.jpeg',
//     },
//     'nikolai-makarov': {
//       codename: ` is a writer and coder, working at Over. He usually works on application architecture, 
//       though sometimes you'll find him building compilers or robots.`,
//       name:'Nikolaita Kolata Piangka',
//       img:'/1630382754svg-media-queries-300x170.jpg',
//       avatar: '/m29.jpeg',
//     },
//     'nani-gretchen': {
//       codename: ` is co-Editor of the HTML/CSS Channel at SitePoint and a front-end web developer. 
//       She enjoys tinkering with cool CSS standards and is curious about teaching approaches to front-end code. 
//       When not coding for the web or not writing for the web, she enjoys philosophy books, long walks and good food.`,
//       name:' Maria Antonietta Perna',
//       img:'/1586403493jquery-validate-300x170.png',
//       avatar: '/avatar_11.jpg',
//     },
//     'jean-de-leon': {
//       codename:`a Code-Lover and a student of Computer Engineering from Albania. Her short-term goal is that of becoming a full-stack developer, 
//       ocusing on Android, Ruby technologies and DevOps techniques.`,
//       name: 'Alexandrea Fauquette',
//       avatar: '/f5.jpg',
//       img:'/1723510090nextjs-surveyjs-300x170.jpg',
//     },
//     'peter-macarov': {
//       name: 'Sam Sycamore',
//       avatar: '/m10.jpg',
//     },
    
//     'arthur-mckaski': {
//       codename:`is a full-stack web developer who has been working with computers and the web for over a decade. A former hardware technician, and network administrator. Nilson is now currently co-founder and developer of a company developing web applications for the construction industry. 
//       You can also find Nilson on the SitePoint Forums as a mentor.`,
//       name: 'Tressy Arthuro (thor) Mackenly',
//       img:'/1581652829nvm-node-multiple-300x170.png',
//       avatar: '/m8.jpg',
       
//     },
//     'arnold-peterson': {
//       name: 'Rolex',
//       img:'/1495475877javascript-quiz-300x167.png',
//       avatar: './blogs-images/chess.jpg',
//     },
//     'ryan-sebastian': {
//       codename:`
//       I write clean, readable and modular code. I love learning new technologies that bring efficiencies and increased productivity to my workflow.
//       `,
//       img:'/1692401558pieces-copilot-300x170.jpg',
//       name: 'Rey Ayan Sebastian',
//       avatar: '/avatar_4.jpg',
//     },
//     'mell-yuston': {
//       name: 'Mell Moore Yuston',
//       codename:`
//       Front-end Architect at The Force - specializing in JavaScript and AngularJS. 
//       Developer Expert at Google. Gymnast. Dad. Family man. 
//       Creator of Angular Express.
//       `,
      
//       avatar: '/m9.jpg',
//     },
//     'awnt-devercov': {
//       codename:`Application developer based in Belfast, Northern Ireland. Focused on front end development especially JavaScript. 
//       Been working in software development since 2010 and still learning and sharing everyday.`,
//       name: 'Peter Devastrian',
//       avatar: '/m2.jpg',
//       img:'/1713857373calc-css-font-scaling-300x170.jpg',
//     },
//     'craig-butler': {
//       codename: `is a freelance UK web consultant who built his first page for IE2.0 in 1995. Since that time he\'s 
//       '\ been advocating standards, accessibility, and best-practice HTML5 techniques. He\'s created enterprise specifications, websites and online applications for companies and organisations including the UK Parliament, the European Parliament, the Department of Energy & Climate 
//        Change, Microsoft, and more. He\'s written more than 1,000 articles for SitePoint and you can find him [@craigbuckler](https://google.com).`,
//       name: 'Craig Buckler',
//       avatar: '/craig.jpeg',
//       img:'/1699976091VHQW9epSDxVxZae0BCLNMeiqD7H5UkBN2TLvIBvAccSM9gwjA-out-0-300x225.png',
//     },
//   } as any;
