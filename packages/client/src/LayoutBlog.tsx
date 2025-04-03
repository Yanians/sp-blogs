import * as React from 'react';

import { alpha, createTheme, styled, } from "@mui/material/styles";
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { withStyles } from '@mui/styles';
interface pageProps {
 classes:object;
 docs:any;
 [key:string]:any;
}

const authors = {
    oliviertassinari: {
      name: 'James Bond',
      avatar: 'https://avatars.githubusercontent.com/u/3165635',
      github: 'oliviertassinari',
    },
    mbrookes: {
      name: 'Matt Brookes',
      avatar: 'https://avatars.githubusercontent.com/u/357702',
      github: 'mbrookes',
    },
    eps1lon: {
      name: 'Sebastian Silbermann',
      avatar: 'https://avatars.githubusercontent.com/u/12292047',
      github: 'eps1lon',
    },
    mnajdova: {
      name: 'Marija Najdova',
      avatar: 'https://avatars.githubusercontent.com/u/4512430',
      github: 'mnajdova',
    },
    michaldudak: {
      name: 'Michał Dudak',
      avatar: 'https://avatars.githubusercontent.com/u/4696105',
      github: 'michaldudak',
    },
    siriwatknp: {
      name: 'Siriwat Kunaporn',
      avatar: 'https://avatars.githubusercontent.com/u/18292247',
      github: 'siriwatknp',
    },
    'danilo-leal': {
      name: 'Danilo Leal',
      avatar: 'https://avatars.githubusercontent.com/u/67129314',
      github: 'danilo-leal',
    },
    m4theushw: {
      name: 'Matheus Wichman',
      avatar: 'https://avatars.githubusercontent.com/u/42154031',
      github: 'm4theushw',
    },
    flaviendelangle: {
      name: 'Flavien Delangle',
      avatar: 'https://avatars.githubusercontent.com/u/3309670',
      github: 'flaviendelangle',
    },
    jamesbond: {
      name: 'Danail Hadjiatanasov',
      avatar: 'https://avatars.githubusercontent.com/u/5858539',
      github: 'DanailH',
    },
    alexfauquette: {
      name: 'Alexandre Fauquette',
      avatar: 'https://avatars.githubusercontent.com/u/45398769',
      github: 'alexfauquette',
    },
    samuelsycamore: {
      name: 'Sam Sycamore',
      avatar: 'https://avatars.githubusercontent.com/u/71297412',
      github: 'samuelsycamore',
    },
  } as any;

  
const styles = (theme:any) => ({
  root: {
    flexGrow: 1,
    background:
      theme.palette.mode === 'dark'
        ? `linear-gradient(180deg, ${theme.palette.primaryDark[900]} 0%, #001E3C 100%)`
        : `linear-gradient(180deg, ${theme.palette.grey[50]} 0%, #FFFFFF 100%)`,
    backgroundSize: 'auto 250px ',
    backgroundRepeat: 'no-repeat',
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(-1),
  },
  container: {
    paddingTop: 60 + 20,
    marginBottom: theme.spacing(8),
    maxWidth: `calc(740px + ${theme.spacing(12)})`,
    '& h1': {
      marginBottom: theme.spacing(3),
    },
    '& .markdown-body': {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 1.7,
    },
    '& img, & video': {
      display: 'block',
      margin: 'auto',
    },
    '& strong': {
      color: theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[900],
    },
    '& pre': {
      fontSize: theme.typography.pxToRem(16),
    },
    '& summary': {
      padding: 8,
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
    },
    '& details': {
      paddingLeft: 16,
      paddingRight: 16,
      background:
        theme.palette.mode === 'dark'
          ? alpha(theme.palette.primary[900], 0.3)
          : alpha(theme.palette.grey[50], 0.5),
      border: '1px solid',
      borderRadius: 10,
      borderColor:
        theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[200],
      transitionProperty: 'all',
      transitionTiming: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '200ms',
      '&:hover, &:focus-visible': {
        background:
          theme.palette.mode === 'dark'
            ? alpha(theme.palette.primary[900], 0.4)
            : theme.palette.grey[50],
        borderColor:
          theme.palette.mode === 'dark' ? theme.palette.primaryDark[500] : theme.palette.grey[300],
      },
    },
    '& th': {
      textAlign: 'left',
      borderBottom: `3px solid rgba(62, 80, 96, 0.2) !important`,
    },
    '& .blog-description': {
      fontSize: theme.typography.pxToRem(13),
      textAlign: 'left',
      color: theme.palette.grey[600],
      '& a': {
        color:
          theme.palette.mode === 'dark' ? theme.palette.primary[300] : theme.palette.primary[600],
        textDecoration: 'underline',
      },
    },
  },
  time: {
    color: theme.palette.text.secondary,
    ...theme.typography.caption,
    fontWeight: 500,
  },
});
  
 function TopLayoutBlog(props:pageProps) {
    const { docs } = props;

    const { description,  author, title, headers, location, rendered,} = docs.en;
    // const finalTitle = title || headers.title;

    console.log(location)
    return (
                <div>
                  {headers.authors.map((author:any) => (
                      <div key={author} className="author">
                        <Avatar
                          sx={{ width: 36, height: 36 }}
                          alt=""
                          src={`${authors[author].avatar}?s=${32}`}
                          srcSet={`${authors[author].avatar}?s=${32 * 2} 2x`}
                        />
                        <div>
                          <Typography variant="body2" fontWeight="500">
                            {authors[author].name}
                          </Typography>
                          <Link
                            to={`https://github.com/${authors[author].github}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            color="text.secondary"
                          >
                            {/* @{authors[author].github} */}
                          </Link>
                        </div>
                      </div>
                    )) as any}

                 <Typography variant="body2" fontWeight="500">
                        Title: {title} {author}
                 </Typography>

                 <Typography variant="body2" fontWeight="500">
                    Description: {description}
                 </Typography>
                  

                 {/* {props.docs} */}
                 Simply like this
            </div>
    );
  }

const defaultTheme = createTheme()
  export default withStyles(styles, {defaultTheme})(TopLayoutBlog);

