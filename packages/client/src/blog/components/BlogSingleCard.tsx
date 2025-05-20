
import * as React from 'react';

import Icon from '@mui/icons-material/Mood';
import eyeFill from '@mui/icons-material/Visibility';
import { Link as RouterLink, LinkProps as RouterLinkProps} from 'react-router-dom';
import shareFill from '@mui/icons-material/Share';
import messageCircleFill from '@mui/icons-material/ForwardToInbox';
import { authored } from './LayoutBlog';
import { useMediaQuery } from '@mui/system';
// material
import { alpha, styled, useTheme } from '@mui/material/styles';

import { slugify } from '../../components/BlogSearch';

import { Box, Card, Grid, Avatar, Typography, CardContent } from '@mui/material';
import Link, { LinkProps } from '@mui/material/Link'
// utils
import SvgIconStyle from './SvgIconStyle';
import { PortraitSharp } from '@mui/icons-material';

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)'
});

type muiProps = LinkProps & RouterLinkProps;

const TitleStyle = styled((props:muiProps) => {
    const { children, ...other } = props;
    return <Link {...other}>{children}</Link>
})(({theme})=>({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical'
}));

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2)
}));

const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled
}));

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position:'absolute',
});

 const POST_INFO = [
    { number: 1, icon: messageCircleFill },
    { number: 2, icon: eyeFill },
    { number: 3, icon: shareFill }
  ];

// ----------------------------------------------------------------------

type postProps = {
    data?:any;
    index?:number;
};

export default function BlogPostCard(props:postProps) {
     const { data, index } = props;

    const indexZero = index === 0;
    const largeImage = index === 1 || index === 2;
    const theme = useTheme();
     const mdDown = useMediaQuery(theme.breakpoints.down('md'),{noSsr:false})     
  return (
    <Grid size={{xs:6, sm:4, md: 3}}> 
      <Card sx={{ position: 'relative' }}>
        <CardMediaStyle
          sx={{
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => ({bgColor:alpha(theme.palette.warning[700], 0.72)})
              },
               ...(indexZero && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)'
              }
            })
          }}
        >
          <SvgIconStyle

            color="paper"
            src="/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
            }}
          />
          <AvatarStyle
            alt={authored[slugify(data.authors.find((author:any)=>author))].avatar}
            src={authored[slugify(data.authors.find((author:any)=>author))].avatar}
            sx={{
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40
            }}
          />

          <CoverImgStyle alt={data.title} src={authored[slugify(data.authors.find((author:any)=>author))].img} />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
              bottom: 0,
              width: '100%',
              position: 'absolute'
          }}
        >
          <Typography
            gutterBottom
            variant="caption"
            sx={{ color: 'text.disabled', display: 'block' }}
          >
            {data.date}
          </Typography>

          <TitleStyle
            to="#"
            color="inherit"
            variant="subtitle2"
            underline="hover"
            component={RouterLink}
            sx={{
              typography: 'h5', 
                height: 60,
                color: 'common.white'
            }}
          >
            {data.title}
          </TitleStyle>

          <InfoStyle>
            {POST_INFO.map((info:{icon:any,number:any}, index:number) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: index === 0 ? 0 : 1.5,
                 color: 'grey.500'
                }}
              >
                <Box component={Icon} sx={{ width: 16, height: 16, mr: 0.5 }}>
                    {info.icon}
                </Box>
                <Typography variant="caption">{info.number}</Typography>
              </Box>
            ))}
          </InfoStyle>
        </CardContent>
      </Card>
    </Grid>
  );
// });
//  return output;  
}
