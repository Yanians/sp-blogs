import React, { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import type { FuseResult, FuseResultMatch } from 'fuse.js';
import { TextField, Chip, Typography, Box, Modal, Fade, Backdrop, IconButton } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";

type SearchProps = {
  item?: { title?:string; description:string};
  [key:string]:any;
}

export function slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')   // remove non-word characters
      .trim()
      .replace(/\s+/g, '-')       // replace spaces with -
  }

export default function BlogSearch({sSrData, open, onClose, }:{sSrData:any[]; open:boolean; onClose:()=>void}) {
  const [query, setQuery] = useState('');
  // const [blogPosts, setBlogPost ] = React.useState<SearchProps[]>([sSrData]);
  const navigate = useNavigate();

    // React.useEffect(() => {
    //   const data:BlogProps[] | undefined =  window.__PRELOADED_STATE__ || [];
    //   setBlogPost(data);
    // }, []);
    console.log(Array.isArray(sSrData), sSrData)
  const fuse = useMemo(() => new Fuse(sSrData, {
    keys: ['title', 'description', 'tags'],
    includeMatches: true,
    threshold: 0.4,
    ignoreLocation: true,
    minMatchCharLength: 2,
  }), [sSrData]);

  const results = query.trim() ? fuse.search(query) : sSrData?.map((item: any) => ({ item }));

  const highlightMatch = (
    text: string, 
    matches: ReadonlyArray<FuseResultMatch> | undefined, 
    key: string) => {

    const match = matches?.find(m => m.key === key);
    if (!match?.indices.length) return text;

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    match.indices.forEach(([start, end], i) => {
      if (start > lastIndex) {
        parts.push(text.slice(lastIndex, start));
      }
      parts.push(<mark key={i}>{text.slice(start, end + 1)}</mark>);
      lastIndex = end + 1;
    });

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  return (
    <Modal 
       open={open} 
        onClose={onClose} closeAfterTransition
           slots={{backdrop:Backdrop}}
           slotProps={{
            backdrop:{
              timeout:300,
            }
           }}
        >
       <Fade in={open} appear>
            <Box
            sx={{
                position: "fixed",
                top: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                maxHeight: "80%",
                overflowY: "auto",
                bgcolor: "hsl(150, 8.10%, 85.50%)",
                p: 3,
                borderRadius: 2,
                boxShadow: 24,
                zIndex: 1300,
              }}
            >
                <Box
                    sx={{
                        position: 'sticky',
                        top: 0,
                        height:'auto',
                        backgroundColor: 'transparent',
                        borderRadius: 2,
                        zIndex: 1000,
                        pb:-2,
                    }}
                >
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">Search Posts</Typography>
                    <IconButton onClick={onClose}>
                         <CloseIcon />
                    </IconButton>
                  </Box>
                    <TextField
                        fullWidth
                        autoFocus
                        size="medium"
                        color='success'
                         helperText
                        label="Search blog posts"
                        variant="outlined"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        sx={{
                            input: {
                                color: 'black', // or any custom color
                              },
                            '& .MuiOutlinedInput-root': {
                                backgroundColor:'background.paper',
                              '& fieldset': {
                                color:'blanchedalmond',
                                borderColor: 'primary.main', // or any other color like '#1976d2'
                                borderWidth: '2px',
                              },
                              '&:hover fieldset': {
                                borderColor: 'primary.main',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: 'primary.main',
                              },
                            },
                          }}
                    />
                </Box>
                {results.map((res:any,index:React.Key) => {
                    const { item, matches } = res as FuseResult<SearchProps>;
                    return (
                    <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="h6">
                        {highlightMatch(item.title, matches, 'title')}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                        {highlightMatch(item.description, matches, 'description')}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            <Chip 
                             sx={{
                                '&:hover': {
                                  backgroundColor: 'background.paper', // red background
                                  textDecoration: 'underline',   // underline text
                                  color:'error.main',
                                },
                                textDecoration: 'none',          // prevent underline by default
                              }}
                            key={index} 
                            component={Link}
                                to={`${slugify(item.title)}`}
                                    clickable
                                    onClick={() => {
                                        onClose(); // trigger modal closing
                                        setTimeout(() => {
                                            navigate(`blogs/${slugify(item.title)}/searchId`);
                                        }, 100); // wait for transition (adjust if needed)
                                    }
                                }  
                            label={highlightMatch(item.outputRender, matches, 'tags')}
                                />
                    </Box>
                    </Box>
                    );
                })}
            </Box> 
      </Fade>   
  </Modal> 
  );
}
