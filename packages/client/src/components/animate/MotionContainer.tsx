// import PropTypes from 'prop-types';
// import { motion } from 'framer-motion';
// material
import Box  from '@mui/material/Box';
//
import { varWrapEnter,varWrapBoth } from './variants';
import React from 'react';

// ----------------------------------------------------------------------
interface MOTIONPROPS {
open?:boolean;
children?:React.ReactNode;

}

export default function MotionContainer(props:MOTIONPROPS):React.JSX.Element {
    const { open, children,...rest } = props;
  return (
    <Box
      component={'div'}
      initial={false}
      animate={open ? 'animate' : 'exit'}
      variants={varWrapBoth}
      {...rest}
    >
      {children}
    </Box>
  );
}
