import * as React from 'react';
import { authored } from '../blog/components/LayoutBlog';
import GridContainerBox from '../layout/Skeleton/GridContainerBox';

// type CheckProps = {
//   sSrData:any;
// } & ImgProps & GridProps;


export default function PhotographyImage({sSrData}:{sSrData:any[]}){

     return sSrData.map((item:{image:string, title:string, authors:any[],})=>(
         <GridContainerBox src={item.image} alt={item.title} name={
            authored[item.authors.find((author:string)=>author)].name
             } />
     ))

}
