import * as React from 'react';
// material
import { Grid, Button, Container, Stack, Typography, ButtonGroup } from '@mui/material';
// components
import { Link as RouterLink } from 'react-router-dom';
import BlogPostCard from './BlogCard';

import BlogPostsSort from './BlogPostSearch';

import Icon from '@mui/material/Icon';

import PlusFill from '@mui/icons-material/Share';

import BlogPostsSearch  from './BlogPostSearch';
//
export type optionsProps = {
    value:string;
    label:string;
}

interface blogProps {
    posts?:blogProps[];
};

function BlogCards(props:blogProps){
    const { posts } = props;
    return(
        <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
             <ButtonGroup>
                <Button
                    variant="contained"
                    component={RouterLink}
                    to="#"
                    startIcon={
                    <Icon><PlusFill /></Icon>}
                >
                    New Post
                </Button>
            </ButtonGroup>    
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        </Stack>

        <Grid container spacing={3}>
           {posts?.map((item:any,index:number)=>{
               return <BlogPostCard key={index} data={item} index={index} />
           })} 
        </Grid>
      </Container>
    )
}

export default BlogCards;
