
import * as React from 'react';

import TopLayoutBlog from "../LayoutBlog.js";

import { docs } from './firstImplementation.md?@marking';

export default function Page(){
    console.log('+++++++++++++++++++',docs);
    return <TopLayoutBlog docs={docs} />
}
