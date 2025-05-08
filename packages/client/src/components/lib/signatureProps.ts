//@ts-ignore
import * as React from "react";

export interface BlogProps {
    slug:string;
    title:string;
    sSrData?:any[];
    description:string;
    textContents?:string;
    outputRender?:any;
    blogPost?:string;
    details?:[];
    render?:string;
    renderMarkdown?:string;
    image?:string;
    blogsContent?:string | undefined;
    tags:Array<string>;
    authors?:Array<string>;
    files?: Array<{
         name: string;
         path: string;
         children?: any[];
        }>;  
    date?:string;
};

export interface MarkdownProps extends BlogProps {
  content?:string;
}

export type FontFamilyProps = {
    sofia?: boolean;
    impact?:boolean;
    andali?:boolean;
    platino?:boolean;
    gadget?:boolean;
    serif?:boolean;
    monaco?:boolean;
    verdana?:boolean;
    comic?:boolean;
    monospace?: boolean;
    sansserif?: boolean;
    arial?: boolean;
    timesnewroman?: boolean;
    tahoma?: boolean;
    georgia?: boolean;
    fantasy?: boolean;
    garamond?: boolean;
    cursive?: boolean;
    cursive_mt?: boolean;
  };

  export type Shadows = {
       mui?:boolean;
       sheen?:boolean;
       gas?:boolean;
       ruby?:boolean;
       potion?:boolean;
       pumpkin?:boolean;
       beaver?:boolean;
       seinna?:boolean;
       rose?:boolean;
       razzmatazz?:boolean;
       dungeon?:boolean;
        shadowblack?:boolean;
        innocent?:boolean;
        shadow2black?:boolean;
        shadow3black?:boolean;
        shadowred?:boolean;
        shadowsofia?:boolean;
        scripture?:boolean;
        shadow2red?:boolean;
        shadow3red?:boolean;
        shadowgrey?:boolean;
        focus?:boolean;
        shadowgreylight?:boolean;
        shadow1grey?:boolean;
        shadow2grey?:boolean;
        shadow3grey?:boolean;
  }

  type Experienced = | 'Average' | 'Newbie'
        | 'Well Verse' | 'Junior' | 'Senior' | 'Legend' | 'expert' | 'Intermidiate';
  type Gender = | 'MALE' | 'FEMALE';
  type Status = | 'MARRIED' | 'WIDOW' | 'SINGLE' | 'INFORMAL';
  type Education = | 'POST GRADUATE' | 'COLLEGE DEGREE'
        | 'MASTERS DEGREE' | 'HIGH SCHOOL DEGREE'
        | 'BACHELORS DEGREE';
  type CareerField = | 'Cellphone Technician' 
        | 'IT Technician' | 'Engineering' | 'Administration'
        | 'Acounting' | 'Finance' | 'Network Engineer' | 'Software Engineer'
        | 'Programmer' | 'Web Developer' | 'Teachear';
  type ModelType = | 'Lenovo' | 'Samsung' | 'Acer' | 'HP' | 'Ace' | 'China Type'
        | 'Mac'| 'Toshiba'| 'ROG';
  type DeviceStatus = | 'renewable' | 'permanent' | 'request' | 'false*positive' | 'remediated';
  type Department = | 'IT' | 'Accounting' | 'Finance' | 'Human Resource'
        | 'Utility' | 'Admin' | 'Security' | 'Sales' | 'Engineering'
        | 'Contributor' | 'Mechanics';
 type Position =  | 'IT Staff' | 'Sales Manager'
        | 'Admin Spelialist' | 'Gen Manager' | 'HR Staff' | 'HR Head' | 'Head Guard'
        | 'Company Driver' | 'Janitor' | 'Janitress' | 'Sales Staff';
type Contract =  | 'Regular' | 'Probationary' | 'Project Based';
 export namespace SIGNATUREPROPS {
    
    export interface User {
      fname:string;
      lname:string;
      age:number;
      career_field:CareerField;
      gender?:Gender | undefined;
      status:Status;
      level_of_experienced:Experienced;
      education:Education;
    }

    export interface HomeAddress {
      address1:string;
      address2?:string;
      contact:string;
      email?:string;
      social_media_account?:string;
    }

    export interface UserPosition {
      department:Department | undefined;
      position:Position | undefined;
      contractType:Contract | undefined;
    }
    
    export interface DeviceRecord {
      serial:string | number;
      deviceName:string;
      model:string;
      modelType:ModelType | undefined;
      date_issued:Date;
      device_status:DeviceStatus | undefined;
    }

    export interface BlogProps {
      date_posted?:Date;
      description:string;
      title:string;
      img:string;
      paragraph:string | undefined | any;
      comment?:string;
    };
 };



 