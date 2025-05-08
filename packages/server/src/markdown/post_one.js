
import * as React from 'react';

import TopLayoutBlog from "../LayoutBlog";

import { docs } from './first.md?@marking';

export default function Page(){
    console.log('+++++++++++++++++++',docs);
    return <TopLayoutBlog docs={docs} />
}
