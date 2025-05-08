// client/src/components/SearchModal.tsx
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
  Box,
  TextField,
  Chip,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import Fade from '@mui/material/Fade';
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { BlogProps } from "../components/lib/signatureProps";
import Fuse from 'fuse.js';

type SearchProps = {
  title:string;
  description:string;
} & Omit<BlogProps, "title"| "description">


export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')   // remove non-word characters
    .trim()
    .replace(/\s+/g, '-')       // replace spaces with -
}

const SearchModal = ({ open, onClose }:{open:boolean;onClose:()=> void,}): React.JSX.Element => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [allPosts, setAllPosts] = useState<SearchProps[] | any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = window.__PRELOADED_STATE__ || [];
    setAllPosts(data);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const q = query.toLowerCase();
      const matches = allPosts.filter(
        (post: { title: string; description: string; outputRender:string;authors:any,tags:any }) =>
          post.title.toLowerCase() === q ||
          post.description.toLowerCase() === q ||
          post.authors.find((author:string)=> author).toLowerCase() === q ||
          post.tags.find((tag:string)=>tag).toLowerCase() === q ||
          post.outputRender.toLowerCase().includes(` ${q} `) // strict-ish match
      );
      setResults(matches);
    } else {
      setResults([]);
    }
  }, [query, allPosts]);

  const handleSearchChange = (e: { target: { value: any; }; }) => {
    // Get the input value
    let value = e.target.value;
    // Replace spaces with hyphens
    // value = value.replace(/\s+/g, '-');
    setQuery(value);
  };

  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
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
          bgcolor: "#fff",
          p: 3,
          borderRadius: 2,
          boxShadow: 24,
          zIndex: 1300,
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
          margin="normal"
          label="Type to search"
          value={query}
          onChange={handleSearchChange}
        />

        <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
          {results.map((post:any) => (
            <Chip
              key={post.title}
              label={slugify(post.outputRender)}
              component={Link}
              to={`${slugify(post.title)}`}
              clickable
              onClick={() => {
                onClose(); // trigger modal closing
                setTimeout(() => {
                  navigate(`blogs/${slugify(post.title)}/searchId`);
                }, 100); // wait for transition (adjust if needed)
              }}
            />
          ))}
        </Box>
      </Box>
      </Fade>
    </Modal>
  );
};

export default SearchModal;
