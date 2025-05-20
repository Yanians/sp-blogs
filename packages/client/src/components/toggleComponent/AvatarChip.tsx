import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'
export default function AvatarChips({link,sx, altTitle, tags, img,onClick}:
  {onClick?:()=>void,link?:string| undefined,sx?:any, tags?:string, altTitle?:string, img?:any,}) {
    return(
      <Stack direction="row" spacing={1}>
      <Link to={link as any}>
              <Chip 
                  avatar={<Avatar sizes='small' alt={altTitle} src={img} />}
                  label={tags}
                  sx={sx}
                  onClick={onClick}
                  variant="outlined"
              />
        </Link>   
      </Stack>
    );
}