// src/components/ParallaxCarousel.tsx

import React, { useEffect, useState } from 'react';
import { Card, CardContent, Box } from '@mui/material';

const images = [
  '/images/pic1.jpg',
  '/images/pic2.jpg',
  '/images/pic3.jpg',
  '/images/pic4.jpg',
];

export default function ParallaxCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card elevation={4} sx={{ overflow: 'hidden', height: 300, position: 'relative' }}>
      <CardContent sx={{ p: 0 }}>
        <Box
          sx={{
            display: 'flex',
            transform: `translateX(-${index * 100}%)`,
            transition: 'transform 1s ease-in-out',
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((src, idx) => (
            <Box
              key={idx}
              component="img"
              src={src}
              alt={`carousel-${idx}`}
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
