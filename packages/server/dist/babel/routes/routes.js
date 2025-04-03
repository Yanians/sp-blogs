"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Routes = void 0;
var React = _interopRequireWildcard(require("react"));
var _iconLib = require("@lib/iconLib");
var _utilityTypes = require("@lib/utilityTypes");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Icon = _utilityTypes.PassThrough;
const Routes = exports.Routes = [{
  "id": 1,
  "link": "/public",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.PublicIcon,
    size: "small"
  }),
  "Title": "public"
}, {
  "id": 2,
  "link": "/dashboard",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.DashboardCustomizeIcon,
    size: "small"
  }),
  "Title": "Dashboard"
}, {
  "id": 3,
  "link": "/inventory",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.InventoryIcon,
    size: "small"
  }),
  "Title": "Inventory"
}, {
  "id": 4,
  "link": "/community",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.ForumIcon,
    size: "small"
  }),
  "Title": "Community"
}, {
  "id": 5,
  "link": "/analytics",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.ShowChartIcon,
    size: "small"
  }),
  "Title": "Analytic"
}, {
  "id": 6,
  "link": "/dashboard/employee/profile",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.RecentActorsIcon,
    size: "small"
  }),
  "Title": "Chart"
}, {
  "id": 7,
  "link": "/news",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.NewspaperIcon,
    size: "small"
  }),
  "Title": "News"
}, {
  "id": 8,
  "link": "/system-info",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.AndroidIcon,
    size: "small"
  }),
  "Title": "System Info"
}, {
  "id": 9,
  "link": "/transaction",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.AddLocationIcon,
    size: "small"
  }),
  "Title": "Transaction"
}, {
  "id": 10,
  "link": "/tools",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.Accountcircle,
    size: "small"
  }),
  "Title": "Tools"
}, {
  "id": 11,
  "link": "/faq",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.Bookmarkicon,
    size: "small"
  }),
  "Title": "FAQ"
}, {
  "id": 12,
  "link": "/system-info",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.Setting,
    size: "small"
  }),
  "Title": "System Info"
}, {
  "id": 13,
  "link": "/transaction",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.FastRewindicon,
    size: "small"
  }),
  "Title": "Transaction"
}, {
  "id": 14,
  "link": "/tools",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.Email,
    size: "small"
  }),
  "Title": "Tools"
}, {
  "id": 15,
  "link": "faq",
  "icon": /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
    add: _iconLib.ConstructionIcon,
    size: "small"
  }),
  "Title": "FAQ"
}];

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
var _default = exports.default = Routes;