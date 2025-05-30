
import * as React from 'react';

import { 
    PublicIcon,
    DashboardCustomizeIcon,
    InventoryIcon,
    NewspaperIcon,
    Accountcircle,
    Bookmarkicon,
    AndroidIcon,
    ShowChartIcon,
    AddLocationIcon,
    Email,
    ConstructionIcon,
    RecentActorsIcon,
    FastRewindicon,
    ForumIcon,
    Setting,
 } from '@lib/iconLib';

import { PassThrough } from '@lib/utilityTypes'

const Icon = PassThrough;

export const Routes = [
	{
	"id":1,
	"link":"/public",
	"icon":<Icon add={PublicIcon} size='small' to={''} />,
	"Title":"public",		
	},
	{
	"id":2,
	"link":"/dashboard",
	"icon":<Icon add={DashboardCustomizeIcon} size='small' to={''} />,
	"Title":"Dashboard",		
	},
	{
	"id":3,
	"link":"/inventory",
	"icon":<Icon add={InventoryIcon} size='small' to={''} />,
	"Title":"Inventory",		
	},
	{
	"id":4,
	"link":"/community",
	"icon":<Icon add={ForumIcon} size='small' to={''} />,
	"Title":"Community",		
	},
	{
	"id":5,
	"link":"/analytics",
	"icon":<Icon add={ShowChartIcon} size='small' to={''} />,
	"Title":"Analytic",		
	},
	{
	"id":6,
	"link":"/dashboard/employee/profile",
	"icon":<Icon add={RecentActorsIcon} size='small' to={''} />,
	"Title":"Chart",		
	},
	{
	"id":7,
	"link":"/news",
	"icon":<Icon add={NewspaperIcon} size='small' to={''} />,
	"Title":"News",		
	},
	{
	"id":8,
	"link":"/system-info",
	"icon":<Icon add={AndroidIcon} size='small' to={''} />,
	"Title":"System Info",		
	},
	{
	"id":9,
	"link":"/transaction",
	"icon":<Icon add={AddLocationIcon} size='small' to={''} />,
	"Title":"Transaction",		
	},
	{
	"id":10,
	"link":"/tools",
	"icon":<Icon add={Accountcircle} size='small' to={''} />,
	"Title":"Tools",		
	},
	{
	"id":11,
	"link":"/faq",
	"icon":<Icon add={Bookmarkicon} size='small' to={''} />,
	"Title":"FAQ",		
	},
	{
	"id":12,
	"link":"/system-info",
	"icon":<Icon add={Setting} size='small' to={''} />,
	"Title":"System Info",		
	},
	{
	"id":13,
	"link":"/transaction",
	"icon":<Icon add={FastRewindicon} size='small' to={''} />,
	"Title":"Transaction",		
	},
	{
	"id":14,
	"link":"/tools",
	"icon":<Icon add={Email} size='small' to={''} />,
	"Title":"Tools",		
	},
	{
	"id":15,
	"link":"faq",
	"icon":<Icon add={ConstructionIcon} size='small' to={''} />,
	"Title":"FAQ",		
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

export default Routes;