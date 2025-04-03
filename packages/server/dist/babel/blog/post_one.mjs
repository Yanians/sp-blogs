import * as React from 'react';
import TopLayoutBlog from "../LayoutBlog.tsx";
import { docs } from './post_one.md?@markdown';

export default function Page(){
    console.log(docs);
    return <TopLayoutBlog docs={docs} />
}
