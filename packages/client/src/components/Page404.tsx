import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Typography,Stack, Paper, Container } from '@mui/material';
// components
import { MotionContainer, varBounceIn } from '../components/animate';

// ----------------------------------------------------------------------
const RootStyle = styled(Paper)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(3)
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <RootStyle title="404 Page Not Found | Minimal-UI">
        <Container className="animate tada">
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <Stack direction={'row'}>
              <Typography variant="h3">
                Sorry, page not found!
              </Typography>
            </Stack>
            <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
              Be sure to check your spelling.
            </Typography>
           <div className="animated tada">
              <Stack direction={'row'}>
                <Box
                  component="img"
                  src="/illustration_404.svg"
                  sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
                  sizes='small'
                />
              </Stack>
            </div>
            <Button to="/" size="large" variant="contained" component={RouterLink}>
              Go to Home
            </Button>
          </Box>
      </Container>
    </RootStyle>
  );
}
