// Carousel.tsx
import React from 'react';
import Slider from 'react-slick';
import BlogSingleCard from './BlogCard';
import { authored } from './LayoutBlog';
import { slugify } from '../../components/searchComponents/BlogSearch';
import { Card, CardContent, CardMedia, Typography, Button, Box, Stack } from '@mui/material';


function Carousel({item}:{item:any}) {
  const [isClient, setIsClient] = React.useState(false);

React.useEffect(() => {
  setIsClient(true);
}, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '10%',
    arrows:true,
     responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4,}}>
      {  isClient && <Slider {...settings}>
            {item.map((blog:any, index:React.Key) => (
                <BlogSingleCard data={blog} key={index} />
            ))} 
          </Slider>
      }
    </Box>
  );
};

export default Carousel;
