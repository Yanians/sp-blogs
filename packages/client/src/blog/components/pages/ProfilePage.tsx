
import * as React from 'react';
import ProfileDetails from '../ProfileLayout';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

export default function ProfilePage({sSrData}:{sSrData:any[]}){
     return(
        <ProfileDetails sSrData={sSrData} />
     )
}