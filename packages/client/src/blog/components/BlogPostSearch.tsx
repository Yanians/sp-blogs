import * as React from 'react';
import Icon from '@mui/icons-material/Mood';
import SearchFill from '@mui/icons-material/PersonSearch';

// material
import { styled } from '@mui/material/styles';
import { Box, TextField, Autocomplete, InputAdornment, Button, } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  '& .MuiAutocomplete-root': {
    width: 200,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter
    }),
    '&.Mui-focused': {
      width: 240,
      '& .MuiAutocomplete-inputRoot': {
        boxShadow: theme.shadows[10],
      }
    }
  },
  '& .MuiAutocomplete-inputRoot': {
    '& fieldset': {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500]} !important`
    }
  },
  '& .MuiAutocomplete-option': {
    '&:not(:last-child)': {
      borderBottom: `solid 1px ${theme.palette.divider}`
    }
  }
}));

// ----------------------------------------------------------------------
interface dataProps {
    posts?:dataProps[]
}

export default function BlogPostsSearch(data:dataProps) {
    const { posts } = data;
    const outs = posts?.map((item:any,index:React.Key)=>({
        id:index,
        title:item.title,
        description:item.description,
    }));
    console.log(outs)
  return (
    <RootStyle>
      <Autocomplete
        size="small"
        disablePortal
        popupIcon={null}
        options={posts?.filter((item:any)=>item.title) as any}
        getOptionLabel={posts?.filter((item:any)=>item.title) as any}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search post..."
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <>
                    <InputAdornment position="start">
                        <Button
                        component={Icon}
                        startIcon={<SearchFill />}
                        sx={{
                            ml: 1,
                            width: 20,
                            height: 20,
                            color: 'text.disabled'
                        }}
                        />
                    </InputAdornment>
                    {params.InputProps.startAdornment}
                {params.InputProps.startAdornment}
                </>
              )
            }}
          />
        )}
      />
    </RootStyle>
  );
}
