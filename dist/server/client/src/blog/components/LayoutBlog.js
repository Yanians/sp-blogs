"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authored = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
const react_router_dom_1 = require("react-router-dom");
const WithTextStyles_1 = tslib_1.__importDefault(require("../../components/lib/WithTextStyles"));
const system_1 = require("@mui/system");
const styles_2 = require("@mui/styles");
const customIcons_1 = require("../../components/lib/svg/customIcons");
const TextLink = WithTextStyles_1.default;
const MainGridContainer = (0, system_1.styled)('div') `
    display:grid;
    padding:1px;
    width:100px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
`;
const GridLeftItem = (0, system_1.styled)('div') `
    align-self:center;
    grid-column-start:1;
    grid-row-start:1;
`;
const GridCenterItem = (0, system_1.styled)('div') `
    margin:1px;
    grid-column-start:2;
    grid-row-start:1;
`;
const GridRightItem = (0, system_1.styled)('div') `
display:table;
grid-column-start:2;
grid-row-start:1;
`;
exports.authored = {
    'tres-paylas': {
        codename: `
          is an independent IT consultant working in the areas of client / server programming, High Performance 
          Computing and web development. He is an expert in C/C++, C# and JavaScript. Florian regularly gives talks at conferences 
          or user groups. You can find his blog at florian-rappl.de.
      `,
        name: 'Tressy Paylas',
        img: '/1707845731YccofxHOkc1gSycdBiCh9MMfgdNxk3et1eGwK2OO1U6lrVZJB-out-0-300x225.png',
        avatar: '/avatar23.jpg',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'danilo-leal': {
        codename: `is a blockchain developer and technical educator at the Web3 Foundation, the foundation that's building
       the next generation of the free people's internet. He's also a DX person at Diffbot. He runs two newsletters you 
       should subscribe to if you're interested in Web3.0: Dot Leap covers ecosystem and tech development of Web3,
        and NFT Review covers the evolution of the non-fungible token (digital collectibles)
       ecosystem inside this emerging new web. His current passion project is RMRK.app.`,
        name: 'Rolex',
        img: '/1700662284YJmoKnUgc0qaDpbOQ0mcZi5zEpf0QpyWvle2cz5fjq1eAorHB-out-0-300x179.png',
        avatar: '/creative.png',
        github: 'danilo-leal',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'ken-beltran': {
        codename: `I'm a JavaScript and Ruby Developer working in London, focusing on tooling, ES2015 and ReactJS.`,
        name: 'Kenneth Duremdez Beltran',
        img: '/1680044249wordpress-gallery-plugins-300x170.jpg',
        avatar: '/m1.png',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'ayan-fernandez': {
        codename: `I'm a (full-stack) web and app developer with more than 5 years' experience programming for the web using HTML, CSS, Sass, 
      JavaScript, and PHP. I'm an expert of JavaScript and HTML5 APIs but my interests include web security, 
      accessibility, performance, and SEO. I'm also a regular writer for several networks, speaker, 
      and author of the books jQuery in Action, third edition and Instant jQuery Selectors.`,
        name: 'Antonov Fernandez',
        img: '/1695018352best-programming-fonts-300x170.jpg',
        avatar: '/m31.jpeg',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'nikolai-makarov': {
        codename: ` is a writer and coder, working at Over. He usually works on application architecture, 
      though sometimes you'll find him building compilers or robots.`,
        name: 'Nikolaita Kolata Piangka',
        img: '/1630382754svg-media-queries-300x170.jpg',
        avatar: '/m29.jpeg',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'nani-gretchen': {
        codename: ` is co-Editor of the HTML/CSS Channel at SitePoint and a front-end web developer. 
      She enjoys tinkering with cool CSS standards and is curious about teaching approaches to front-end code. 
      When not coding for the web or not writing for the web, she enjoys philosophy books, long walks and good food.`,
        name: ' Maria Antonietta Perna',
        img: '/1586403493jquery-validate-300x170.png',
        avatar: '/avatar_11.jpg',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'jean-de-leon': {
        codename: `a Code-Lover and a student of Computer Engineering from Albania. Her short-term goal is that of becoming a full-stack developer, 
      ocusing on Android, Ruby technologies and DevOps techniques.`,
        name: 'Alexandrea Fauquette',
        avatar: '/f5.jpg',
        img: '/1723510090nextjs-surveyjs-300x170.jpg',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'peter-macarov': {
        name: 'Sam Sycamore',
        avatar: '/m10.jpg',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'arthur-mckaski': {
        codename: `is a full-stack web developer who has been working with computers and the web for over a decade. A former hardware technician, and network administrator. Nilson is now currently co-founder and developer of a company developing web applications for the construction industry. 
      You can also find Nilson on the SitePoint Forums as a mentor.`,
        name: 'Tressy Arthuro (thor) Mackenly',
        img: '/1581652829nvm-node-multiple-300x170.png',
        avatar: '/m8.jpg',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'arnold-peterson': {
        name: 'Rolex',
        img: '/1495475877javascript-quiz-300x167.png',
        avatar: './blogs-images/chess.jpg',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'ryan-sebastian': {
        codename: `
      I write clean, readable and modular code. I love learning new technologies that bring efficiencies and increased productivity to my workflow.
      `,
        img: '/1692401558pieces-copilot-300x170.jpg',
        name: 'Rey Ayan Sebastian',
        avatar: '/avatar_4.jpg',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'mell-yuston': {
        name: 'Mell Moore Yuston',
        codename: `
      Front-end Architect at The Force - specializing in JavaScript and AngularJS. 
      Developer Expert at Google. Gymnast. Dad. Family man. 
      Creator of Angular Express.
      `,
        avatar: '/m9.jpg',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'awnt-devercov': {
        codename: `Application developer based in Belfast, Northern Ireland. Focused on front end development especially JavaScript. 
      Been working in software development since 2010 and still learning and sharing everyday.`,
        name: 'Peter Devastrian',
        avatar: '/m2.jpg',
        img: '/1713857373calc-css-font-scaling-300x170.jpg',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
    'craig-butler': {
        codename: `is a freelance UK web consultant who built his first page for IE2.0 in 1995. Since that time he\'s 
      '\ been advocating standards, accessibility, and best-practice HTML5 techniques. He\'s created enterprise specifications, websites and online applications for companies and organisations including the UK Parliament, the European Parliament, the Department of Energy & Climate 
       Change, Microsoft, and more. He\'s written more than 1,000 articles for SitePoint and you can find him [@craigbuckler](https://google.com).`,
        name: 'Craig Buckler',
        avatar: '/craig.jpeg',
        img: '/1699976091VHQW9epSDxVxZae0BCLNMeiqD7H5UkBN2TLvIBvAccSM9gwjA-out-0-300x225.png',
        socialAccount: [
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.LinkedinIcon, {}),
                link: 'https://linkedin.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.TwitterIcon, {}),
                link: 'https://twitter.com/',
            },
            {
                icon: (0, jsx_runtime_1.jsx)(customIcons_1.GithubIcon, {}),
                link: 'https://github.com/',
            },
        ]
    },
};
const styles = (theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.mode === 'dark'
            ? `linear-gradient(180deg, ${theme.palette.primaryDark[900]} 0%, #001E3C 100%)`
            : `linear-gradient(180deg, ${theme.palette.grey[50]} 0%, #FFFFFF 100%)`,
        backgroundSize: 'auto 250px ',
        backgroundRepeat: 'no-repeat',
    },
    back: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(-1),
    },
    container: {
        paddingTop: 60 + 20,
        marginBottom: theme.spacing(8),
        maxWidth: `calc(740px + ${theme.spacing(12)})`,
        '& h1': {
            marginBottom: theme.spacing(3),
        },
        '& .markdown-body': {
            fontSize: theme.typography.pxToRem(16),
            lineHeight: 1.7,
        },
        '& img, & video': {
            display: 'block',
            margin: 'auto',
        },
        '& strong': {
            color: theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[900],
        },
        '& pre': {
            fontSize: theme.typography.pxToRem(16),
        },
        '& summary': {
            padding: 8,
            fontSize: theme.typography.pxToRem(14),
            fontWeight: theme.typography.fontWeightMedium,
            color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
        },
        '& details': {
            paddingLeft: 16,
            paddingRight: 16,
            background: theme.palette.mode === 'dark'
                ? (0, styles_1.alpha)(theme.palette.primary[900], 0.3)
                : (0, styles_1.alpha)(theme.palette.grey[50], 0.5),
            border: '1px solid',
            borderRadius: 10,
            borderColor: theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[200],
            transitionProperty: 'all',
            transitionTiming: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '200ms',
            '&:hover, &:focus-visible': {
                background: theme.palette.mode === 'dark'
                    ? (0, styles_1.alpha)(theme.palette.primary[900], 0.4)
                    : theme.palette.grey[50],
                borderColor: theme.palette.mode === 'dark' ? theme.palette.primaryDark[500] : theme.palette.grey[300],
            },
        },
        '& th': {
            textAlign: 'left',
            borderBottom: `3px solid rgba(62, 80, 96, 0.2) !important`,
        },
        '& .blog-description': {
            fontSize: theme.typography.pxToRem(13),
            textAlign: 'left',
            color: theme.palette.grey[600],
            '& a': {
                color: theme.palette.mode === 'dark' ? theme.palette.primary[300] : theme.palette.primary[600],
                textDecoration: 'underline',
            },
        },
    },
    time: {
        color: theme.palette.text.secondary,
        ...theme.typography.caption,
        fontWeight: 500,
    },
});
function LayoutBlog(props) {
    const { docs, directives, classes, } = props;
    console.log('line ---------------------', directives);
    const { description, toc, author, title, headers, rendered, } = docs;
    console.log('headers ---------------------', headers);
    return ((0, jsx_runtime_1.jsx)("div", { className: classes.root, children: directives.map((content, index) => {
            return ((0, jsx_runtime_1.jsx)(material_1.Paper, { variant: 'outlined', sx: { m: 1 }, children: (0, jsx_runtime_1.jsxs)(MainGridContainer, { children: [(0, jsx_runtime_1.jsx)(GridLeftItem, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { sx: { width: 36, height: 36 }, alt: "profile", src: "../../public/images/m16.jpg", srcSet: `${exports.authored[content.authors.find((author) => author)].avatar}?s=${32 * 2} 2x` }) }), (0, jsx_runtime_1.jsx)(GridRightItem, { children: (0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: 'column', sx: { ml: 2 }, children: [(0, jsx_runtime_1.jsx)(TextLink, { serve: react_router_dom_1.Link, to: "/", shadowsofia: true, comic: true, color: "success", textContent: (0, jsx_runtime_1.jsx)(TextLink, { types: 'typography', color: 'success', component: 'div', noWrap: true, sx: { flexGrow: 1 }, textContent: content.tags }) }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: 'caption', component: 'div', noWrap: true, children: content.authors.find((author) => author) })] }) })] }) }, index));
        }) }));
}
//  if(process.env.NODE_ENV !=='production'){
//   console.error(`Is this really a development ?`)
//  }
const defaultTheme = (0, styles_1.createTheme)();
exports.default = (0, styles_2.withStyles)(styles, { defaultTheme })(LayoutBlog);
