import * as React from 'react';
// material
import { Paper, Typography } from '@mui/material';

// ----------------------------------------------------------------------
interface NotFounPROPS {
    searchQuery:string;
};


export default function SearchNotFound(props:NotFounPROPS) {
    const { searchQuery, ...other } = props;
    console.log(searchQuery)
  return (
    <Paper {...other}>
      <Typography gutterBottom align="center" variant="subtitle1">
        Not found
      </Typography>
      <Typography variant="body2" align="center">
        No results found for &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or using complete words.
      </Typography>
    </Paper>
  );
}
