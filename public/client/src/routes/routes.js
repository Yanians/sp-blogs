"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lib_1 = require("../components/lib");
const lib_2 = require("../components/lib");
const Icon = lib_2.PassThrough;
exports.Routes = [
    {
        "id": 1,
        "link": "/public",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.PublicIcon, size: 'small', to: '' }),
        "Title": "public",
    },
    {
        "id": 2,
        "link": "/dashboard",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.DashboardCustomizeIcon, size: 'small', to: '' }),
        "Title": "Dashboard",
    },
    {
        "id": 3,
        "link": "/inventory",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.InventoryIcon, size: 'small', to: '' }),
        "Title": "Inventory",
    },
    {
        "id": 4,
        "link": "/community",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.ForumIcon, size: 'small', to: '' }),
        "Title": "Community",
    },
    {
        "id": 5,
        "link": "/analytics",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.ShowChartIcon, size: 'small', to: '' }),
        "Title": "Analytic",
    },
    {
        "id": 6,
        "link": "/dashboard/employee/profile",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.RecentActorsIcon, size: 'small', to: '' }),
        "Title": "Chart",
    },
    {
        "id": 7,
        "link": "/news",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.NewspaperIcon, size: 'small', to: '' }),
        "Title": "News",
    },
    {
        "id": 8,
        "link": "/system-info",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.AndroidIcon, size: 'small', to: '' }),
        "Title": "System Info",
    },
    {
        "id": 9,
        "link": "/transaction",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.AddLocationIcon, size: 'small', to: '' }),
        "Title": "Transaction",
    },
    {
        "id": 10,
        "link": "/tools",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.Accountcircle, size: 'small', to: '' }),
        "Title": "Tools",
    },
    {
        "id": 11,
        "link": "/faq",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.Bookmarkicon, size: 'small', to: '' }),
        "Title": "FAQ",
    },
    {
        "id": 12,
        "link": "/system-info",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.Setting, size: 'small', to: '' }),
        "Title": "System Info",
    },
    {
        "id": 13,
        "link": "/transaction",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.FastRewindicon, size: 'small', to: '' }),
        "Title": "Transaction",
    },
    {
        "id": 14,
        "link": "/tools",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.Email, size: 'small', to: '' }),
        "Title": "Tools",
    },
    {
        "id": 15,
        "link": "faq",
        "icon": (0, jsx_runtime_1.jsx)(Icon, { add: lib_1.ConstructionIcon, size: 'small', to: '' }),
        "Title": "FAQ",
    },
];
// export const blogRoute = [
// 	{
// 	"id":1,
// 	"link":"/public",
// 	"icon":<L.Public />,
// 	"Title":"Employee's review",		
// 	},
// 	{
// 	"id":2,
// 	"link":"/dashboard",
// 	"icon":<L.DasboardIcon/>,
// 	"Title":"Analytical View",		
// 	},
// 	{
// 	"id":3,
// 	"link":"/inventory",
// 	"icon":<L.Inventoryicon/>,
// 	"Title":"Modification on stage",		
// 	},
// 	{
// 	"id":4,
// 	"link":"/community",
// 	"icon":<L.Community />,
// 	"Title":"Technology Upgrade Incoming",		
// 	},
// 	{
// 	"id":5,
// 	"link":"/analytics",
// 	"icon":<L.Analytics/>,
// 	"Title":"Year's 3,000 prediction",		
// 	},
// 	{
// 	"id":6,
// 	"link":"/chart",
// 	"icon":<L.ChartIcon />,
// 	"Title":"Watch Tower News",		
// 	},
// 	{
// 	"id":7,
// 	"link":"/news",
// 	"icon":<L.News />,
// 	"Title":"Anonymouse World Update",		
// 	},
// 	{
// 	"id":8,
// 	"link":"/system-info",
// 	"icon":<L.SystemInfo />,
// 	"Title":"The fall of New World Order",		
// 	},
// 	{
// 	"id":9,
// 	"link":"/transaction",
// 	"icon":<L.Transaction />,
// 	"Title":"1,000 years Reighn spotted",		
// 	},
// 	{
// 	"id":10,
// 	"link":"/tools",
// 	"icon":<L.Tools />,
// 	"Title":"The prophycie's Mark",		
// 	},
// ];
// export const newsRoute = [
// 	{
// 	"id":1,
// 	"link":"/public",
// 	"icon":<L.Public />,
// 	"Title":"Times New Magazine",		
// 	},
// 	{
// 	"id":2,
// 	"link":"/dashboard",
// 	"icon":<L.DasboardIcon/>,
// 	"Title":"Analytical View",		
// 	},
// 	{
// 	"id":3,
// 	"link":"/inventory",
// 	"icon":<L.Inventoryicon/>,
// 	"Title":"Modification on stage",		
// 	},
// 	{
// 	"id":4,
// 	"link":"/community",
// 	"icon":<L.Community />,
// 	"Title":"Technology Upgrade Incoming",		
// 	},
// 	{
// 	"id":5,
// 	"link":"/analytics",
// 	"icon":<L.Analytics/>,
// 	"Title":"Year's 3,000 prediction",		
// 	},
// 	{
// 	"id":6,
// 	"link":"/chart",
// 	"icon":<L.ChartIcon />,
// 	"Title":"Watch Tower News",		
// 	},
// 	{
// 	"id":7,
// 	"link":"/news",
// 	"icon":<L.News />,
// 	"Title":"Anonymouse World Update",		
// 	},
// 	{
// 	"id":8,
// 	"link":"/system-info",
// 	"icon":<L.SystemInfo />,
// 	"Title":"The fall of New World Order",		
// 	},
// 	{
// 	"id":9,
// 	"link":"/transaction",
// 	"icon":<L.Transaction />,
// 	"Title":"1,000 years Reighn spotted",		
// 	},
// 	{
// 	"id":10,
// 	"link":"/tools",
// 	"icon":<L.Tools />,
// 	"Title":"The prophycie's Mark",		
// 	},
// ];
// export const SportsRoute = [
// 	{
// 	"id":1,
// 	"link":"/public",
// 	"icon":<L.Public />,
// 	"Title":"FIFA int News Spotlight",		
// 	},
// 	{
// 	"id":2,
// 	"link":"/dashboard",
// 	"icon":<L.DasboardIcon/>,
// 	"Title":"Analytical View",		
// 	},
// 	{
// 	"id":3,
// 	"link":"/inventory",
// 	"icon":<L.Inventoryicon/>,
// 	"Title":"Modification on stage",		
// 	},
// 	{
// 	"id":4,
// 	"link":"/community",
// 	"icon":<L.Community />,
// 	"Title":"Technology Upgrade Incoming",		
// 	},
// 	{
// 	"id":5,
// 	"link":"/analytics",
// 	"icon":<L.Analytics/>,
// 	"Title":"Year's 3,000 prediction",		
// 	},
// 	{
// 	"id":6,
// 	"link":"/chart",
// 	"icon":<L.ChartIcon />,
// 	"Title":"Watch Tower News",		
// 	},
// 	{
// 	"id":7,
// 	"link":"/news",
// 	"icon":<L.News />,
// 	"Title":"Anonymouse World Update",		
// 	},
// 	{
// 	"id":8,
// 	"link":"/system-info",
// 	"icon":<L.SystemInfo />,
// 	"Title":"The fall of New World Order",		
// 	},
// 	{
// 	"id":9,
// 	"link":"/transaction",
// 	"icon":<L.Transaction />,
// 	"Title":"1,000 years Reighn spotted",		
// 	},
// 	{
// 	"id":10,
// 	"link":"/tools",
// 	"icon":<L.Tools />,
// 	"Title":"The prophycie's Mark",		
// 	},
// ];
exports.default = exports.Routes;
