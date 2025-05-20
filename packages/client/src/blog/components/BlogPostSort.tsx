import * as React from 'react';
// material
import { MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------
interface optionProps {
    options?:any;
    onSort?:() => void;
}

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
] as any;

export default function BlogPostsSort(props:optionProps){
    const { options, onSort, } = props;
        console.log(Array.isArray(options))
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {SORT_OPTIONS.map((option:any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
