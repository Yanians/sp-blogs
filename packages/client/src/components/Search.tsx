import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import { useNavigate,useLocation, } from 'react-router-dom';
// import MuiLink from '@mui/material/Link';
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react';
import SearchIcon from '@mui/icons-material/Search';
import SearchModal from './SearchModal';

import GlobalStyles from '@mui/material/GlobalStyles';
import { alpha, styled } from '@mui/material/styles';
import { BlogProps } from '../components/lib/signatureProps';

  const SearchButton = styled('button')(({ theme }) => [
    {
      minHeight: 32,
      minWidth: 32,
      margin: 0,
      paddingLeft: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      [theme.breakpoints.only('xs')]: {
        backgroundColor: 'transparent',
        padding: 0,
        justifyContent: 'center',
        '& > *:not(.MuiSvgIcon-root)': {
          display: 'none',
        },
      },
      position: 'relative',
      // backgroundColor: alpha(theme.palette.grey[50], 0.6),
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(14),
      color: (theme.vars || theme).palette.text.secondary,
      // border: `1px solid ${(theme.vars || theme).palette.grey[200]}`,
      borderRadius: (theme.vars || theme).shape.borderRadius,
      cursor: 'pointer',
      transitionProperty: 'all',
      transitionDuration: '150ms',
      // boxShadow: `hsl(200, 0%, 100%) 0 1px 0 inset, ${alpha(theme.palette.grey[100], 0.4)} 0 -1px 0 inset, ${alpha(theme.palette.grey[200], 0.5)} 0 1px 2px 0`,
      '&:hover': {
        // background: alpha(theme.palette.grey[100], 0.5),
        // borderColor: (theme.vars || theme).palette.grey[300],
        boxShadow: 'none',
      },
      '&:focus-visible': {
        // outline: `3px solid ${alpha(theme.palette.primary[500], 0.5)}`,
        outlineOffset: '2px',
      },
    },
    theme.applyDarkStyles({
      backgroundColor: alpha(theme.palette.primaryDark[700], 0.4),
      borderColor: alpha(theme.palette.primaryDark[600], 0.4),
      boxShadow: `${alpha(theme.palette.primaryDark[600], 0.1)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
      '&:hover': {
        background: (theme.vars || theme).palette.primaryDark[700],
        borderColor: (theme.vars || theme).palette.primaryDark[600],
        boxShadow: 'none',
      },
    }),
  ]);
  
  const SearchLabel = styled('span')(({ theme }) => ({
    marginRight: 'auto',
    marginBottom: '1px', // optical alignment
    color: (theme.vars || theme).palette.text.tertiary,
    lineHeight: 1,
  }));

const Shortcut = styled('kbd')(({ theme }) => {
    return {
      all: 'unset',
      fontSize: theme.typography.pxToRem(12),
      fontWeight: 'bold',
      lineHeight: '19px',
      marginLeft: theme.spacing(0.5),
      border: `1px solid ${(theme.vars || theme).palette.grey[200]}`,
      backgroundColor: '#FFF',
      padding: theme.spacing(0, 0.5),
      borderRadius: 7,
      ...theme.applyDarkStyles({
        borderColor: (theme.vars || theme).palette.primaryDark[600],
        backgroundColor: (theme.vars || theme).palette.primaryDark[800],
      }),
    };
  });
 
function Search(files:any){

    const Navigate = useNavigate();
    const location = useLocation();
    const FADE_DURATION = 200; //ms
    const searchButtonRef = React.useRef(null);
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState<any>([]);
    const [posts, setPosts] = React.useState<any>([]);
    const [isOpen, setIsOpen] = React.useState(false);
    const [initialQuery, setInitialQuery] = React.useState(undefined);
    const macOS = window.navigator.platform.toUpperCase().includes('MAC');
   
    const onOpen = React.useCallback(() => {
        setIsOpen(true);
      }, [setIsOpen]);

    const onClose = React.useCallback(() => {
        const modal:any = document.querySelector('.DocSearch-Container');
        if (modal) {
          // fade out transition
          modal.style.opacity = 0;
        }
        setIsOpen(false); // DO NOT call setIsOpen inside a timeout (it causes scroll issue).
      }, [setIsOpen]);
    
      const onInput = React.useCallback(
        (event:any) => {
          setIsOpen(true);
          setInitialQuery(event.key);
        },
        [setIsOpen, setInitialQuery],
      );

      
  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

    return(
        <>
            <SearchButton
                ref={searchButtonRef}
                onClick={onOpen}
                aria-labelledby="app-search-label"
                // {...props}
            >
                <SearchIcon color="primary" sx={{ fontSize: '1.125rem' }} />
                <SearchLabel id="app-search-label">Search anything</SearchLabel>
                <Shortcut aria-hidden="true">
                  {/* eslint-disable-next-line material-ui/no-hardcoded-labels */}
                  {macOS ? '⌘' : 'Ctrl+'}K
                </Shortcut>
            </SearchButton>
            <button onClick={() => setIsOpen(true)}>Open Search</button>
               { isOpen && ReactDOM.createPortal(
                      <SearchModal open={isOpen} onClose={onClose} />,
                          document.body
                      ) 
                }
                          
               <GlobalStyles
                styles={(theme) => ({
                  html: {
                    ':root': {
                      '--docsearch-primary-color': (theme.vars || theme).palette.primary[600],
                      '--docsearch-text-color': (theme.vars || theme).palette.text.primary,
                      '--docsearch-muted-color': (theme.vars || theme).palette.grey[600],
                      '--docsearch-searchbox-shadow': 0,
                      '--docsearch-hit-shadow': 0,
                      '--docsearch-footer-shadow': 0,
                      '--docsearch-spacing': theme.spacing(1.5),
                      '--docsearch-hit-active-color': (theme.vars || theme).palette.primary[600],
                      '--docsearch-logo-color': (theme.vars || theme).palette.grey[600],
                      '--docsearch-searchbox-focus-background': 'unset',
                      '--docsearch-footer-background': 'unset',
                      '--docsearch-modal-background': (theme.vars || theme).palette.background.paper,
                    },
                  },
                  body: {
                    '.DocSearch-Container': {
                      transition: `opacity ${FADE_DURATION}ms`,
                      position:'fixed',
                      top:0,
                      left:0,
                      opacity: 0,
                      zIndex: theme.zIndex.tooltip + 100,
                      backgroundColor: alpha(theme.palette.grey[700], 0.5),
                      backdropFilter: 'blur(2px)',
                    },
                    '& .DocSearch-StartScreen': {
                      display: 'none',
                    },
                    '& .DocSearch-NewStartScreen': {
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: theme.spacing(2),
                      paddingBottom: theme.spacing(2),
                    },
                    '& .DocSearch-NewStartScreenCategory': {
                      display: 'flex',
                      flexDirection: 'column',
                    },
                    '& .DocSearch-NewStartScreenTitle': {
                      display: 'flex',
                      alignItems: 'center',
                      padding: theme.spacing(2, 3, 1.5, 2),
                      fontSize: theme.typography.pxToRem(11),
                      fontWeight: theme.typography.fontWeightBold,
                      textTransform: 'uppercase',
                      letterSpacing: '.1rem',
                      color: (theme.vars || theme).palette.text.tertiary,
                    },
                    '& .DocSearch-NewStartScreenTitleIcon': {
                      fontSize: theme.typography.pxToRem(18),
                      color: (theme.vars || theme).palette.primary[500],
                      marginRight: theme.spacing(1.5),
                      opacity: 0.6,
                      // Redefine SvgIcon-root style as ReactDOMServer.renderToStaticMarkup doesn't
                      // Generate the CSS.
                      // TODO v6: This hack should no longer be needed with static CSS rendering.
                      userSelect: 'none',
                      width: '1em',
                      height: '1em',
                      display: 'inline-block',
                      flexShrink: 0,
                      fill: 'currentColor',
                    },
                    '& .DocSearch-NewStartScreenItem': {
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      width: '100%',
                      height: '42px',
                      color: (theme.vars || theme).palette.primary[600],
                      fontSize: theme.typography.pxToRem(14),
                      fontWeight: theme.typography.fontWeightMedium,
                      padding: theme.spacing(0.25, 0),
                      paddingLeft: theme.spacing(2),
                      border: '1px solid transparent',
                      borderRadius: theme.shape.borderRadius,
                      backgroundColor: alpha(theme.palette.grey[50], 0.4),
                      borderColor: alpha(theme.palette.grey[100], 0.5),
                      marginBottom: theme.spacing(1),
                      '&:hover, &:focus': {
                        backgroundColor: (theme.vars || theme).palette.primary[50],
                        borderColor: (theme.vars || theme).palette.primary[300],
                      },
                      '&:focus-visible': {
                        outline: '3px solid',
                        outlineColor: (theme.vars || theme).palette.primary[200],
                        outlineOffset: 0,
                      },
                    },
                    '& .DocSearch-Modal': {
                      // docsearch.css: <= 750px will be full screen modal
                      maxWidth: '640px',
                      boxShadow: `0px 4px 16px ${alpha(theme.palette.common.black, 0.2)}`,
                      borderRadius: theme.shape.borderRadius,
                      border: '1px solid',
                      borderColor: (theme.vars || theme).palette.grey[300],
                    },
                    '& .DocSearch-SearchBar': {
                      borderBottom: '1px solid',
                      borderColor: (theme.vars || theme).palette.grey[200],
                      padding: theme.spacing(0.5, 1),
                    },
                    '& .DocSearch-Form': {
                      '& .DocSearch-Reset': {
                        display: 'none',
                      },
                      '& .DocSearch-Input': {
                        paddingLeft: theme.spacing(2),
                        fontSize: theme.typography.pxToRem(16),
                        fontWeight: theme.typography.fontWeightMedium,
                      },
                      '& .DocSearch-Search-Icon': {
                        width: '18px',
                        height: '18px',
                      },
                      '& .DocSearch-VisuallyHiddenForAccessibility': {
                        width: 0,
                        visibility: 'hidden',
                      },
                    },
                    '& .DocSearch-Cancel': {
                      display: 'block',
                      alignSelf: 'center',
                      cursor: 'pointer',
                      height: '1.5rem',
                      marginRight: theme.spacing(1),
                      padding: theme.spacing(0.3, 0.8, 0.6, 0.8),
                      fontSize: 0,
                      borderRadius: 6,
                      backgroundColor: (theme.vars || theme).palette.grey[50],
                      border: '1px solid',
                      borderColor: (theme.vars || theme).palette.grey[200],
                      '&::before': {
                        content: '"esc"',
                        fontFamily: theme.typography.fontFamily,
                        fontSize: theme.typography.pxToRem(12),
                        fontWeight: theme.typography.fontWeightBold,
                        color: (theme.vars || theme).palette.text.secondary,
                      },
                    },
                    '& .DocSearch-Dropdown': {
                      minHeight: 384, // = StartScreen height, to prevent layout shift when first char
                      '&::-webkit-scrollbar-thumb': {
                        borderColor: (theme.vars || theme).palette.background.paper,
                        backgroundColor: (theme.vars || theme).palette.grey[500],
                      },
                      '&::-webkit-scrollbar-track': {
                        backgroundColor: (theme.vars || theme).palette.background.paper,
                      },
                      '* ul': {
                        marginTop: theme.spacing(1),
                      },
                    },
                    '& .DocSearch-Dropdown-Container': {
                      '& .DocSearch-Hits:first-of-type': {
                        '& .DocSearch-Hit-source': {
                          paddingTop: theme.spacing(2.5),
                          paddingBottom: theme.spacing(0.5),
                        },
                      },
                    },
                    '& .DocSearch-Hit-source': {
                      top: 'initial',
                      padding: theme.spacing(1.5, 3, 1.5, 3),
                      background: 'transparent',
                      fontSize: theme.typography.pxToRem(11),
                      fontWeight: theme.typography.fontWeightBold,
                      textTransform: 'uppercase',
                      lineHeight: 1,
                      letterSpacing: '.1rem',
                      color: (theme.vars || theme).palette.text.tertiary,
                    },
                    '& .DocSearch-Hit': {
                      paddingBottom: 8,
                      '&:not(:first-of-type)': {
                        marginTop: -1,
                      },
                      '& .DocSearch-Hit-Container': {
                        height: '52px',
                      },
                    },
                    '& .DocSearch-Hit a': {
                      padding: theme.spacing(0.25, 0),
                      paddingLeft: theme.spacing(2),
                      border: '1px solid transparent',
                      borderRadius: theme.shape.borderRadius,
                      backgroundColor: alpha(theme.palette.grey[50], 0.4),
                      borderColor: alpha(theme.palette.grey[100], 0.5),
                      '&:focus-visible': {
                        outline: '3px solid',
                        outlineColor: (theme.vars || theme).palette.primary[200],
                        outlineOffset: 0,
                        backgroundColor: (theme.vars || theme).palette.primary[50],
                        borderColor: (theme.vars || theme).palette.primary[300],
                      },
                    },
                    '& .DocSearch-Hit-content-wrapper': {
                      paddingLeft: theme.spacing(1),
                    },
                    '& .DocSearch-Hit-title': {
                      fontSize: theme.typography.pxToRem(14),
                      fontWeight: theme.typography.fontWeightMedium,
                      color: (theme.vars || theme).palette.text.primary,
                    },
                    '& .DocSearch-Hit-path': {
                      fontSize: theme.typography.pxToRem(12),
                      color: (theme.vars || theme).palette.text.secondary,
                    },
                    '& .DocSearch-Hit-icon': {
                      '> svg': {
                        height: '16px',
                        width: '16px',
                        margin: 0,
                      },
                    },
                    '& .DocSearch-Hit-Select-Icon': {
                      height: '14px',
                      width: '14px',
                    },
                    '& .DocSearch-Hit[aria-selected="true"] a': {
                      backgroundColor: (theme.vars || theme).palette.primary[50],
                      borderColor: (theme.vars || theme).palette.primary[300],
                    },
                    '& .DocSearch-Hit-action, & .DocSearch-Hits mark': {
                      color: (theme.vars || theme).palette.primary[500],
                      '& .DocSearch-Hit-action-button': {
                        display: 'flex',
                        width: '24px',
                        borderRadius: '6px',
                        border: '1px solid transparent',
                        '> svg': {
                          margin: 0,
                        },
                        '&:hover': {
                          backgroundColor: (theme.vars || theme).palette.primary[100],
                          borderColor: (theme.vars || theme).palette.primary[300],
                        },
                      },
                    },
                    '& .DocSearch-Footer': {
                      borderTop: '1px solid',
                      borderColor: (theme.vars || theme).palette.grey[200],
                      '& .DocSearch-Commands': {
                        display: 'none',
                      },
                    },
                  },
                })}
              />
              <GlobalStyles
                styles={(theme) => [
                  {
                    [theme.vars ? '[data-mui-color-scheme="dark"]:root' : '.mode-dark']: {
                      '--docsearch-primary-color': (theme.vars || theme).palette.primaryDark[300],
                      '--docsearch-hit-active-color': (theme.vars || theme).palette.primary[300],
                    },
                  },
                  {
                    [theme.vars ? '[data-mui-color-scheme="dark"] body' : '.mode-dark']: {
                      '.DocSearch-Container': {
                        backgroundColor: alpha(theme.palette.grey[900], 0.6),
                      },
                      '& .DocSearch-NewStartScreenTitleIcon': {
                        color: (theme.vars || theme).palette.primary[300],
                      },
                      '& .DocSearch-NewStartScreenItem': {
                        color: (theme.vars || theme).palette.primary[300],
                        backgroundColor: alpha(theme.palette.primaryDark[800], 0.5),
                        borderColor: alpha(theme.palette.primaryDark[700], 0.8),
                        '&:hover, &:focus': {
                          backgroundColor: alpha(theme.palette.primary[900], 0.4),
                          borderColor: alpha(theme.palette.primary[700], 0.6),
                        },
                        '&:focus-visible': {
                          outlineColor: (theme.vars || theme).palette.primary[700],
                        },
                      },
                      '& .DocSearch-Modal': {
                        backgroundColor: (theme.vars || theme).palette.primaryDark[900],
                        boxShadow: `0px 4px 16px ${alpha(theme.palette.common.black, 0.8)}`,
                        border: '1px solid',
                        borderColor: (theme.vars || theme).palette.primaryDark[700],
                      },
                      '& .DocSearch-SearchBar': {
                        borderColor: (theme.vars || theme).palette.primaryDark[700],
                      },
                      '& .DocSearch-Cancel': {
                        backgroundColor: (theme.vars || theme).palette.primaryDark[800],
                        borderColor: (theme.vars || theme).palette.primaryDark[600],
                      },
                      '& .DocSearch-Dropdown': {
                        '&::-webkit-scrollbar-thumb': {
                          borderColor: (theme.vars || theme).palette.primaryDark[900],
                          backgroundColor: (theme.vars || theme).palette.primaryDark[100],
                        },
                      },
                      '& .DocSearch-Hit a': {
                        backgroundColor: alpha(theme.palette.primaryDark[800], 0.5),
                        borderColor: alpha(theme.palette.primaryDark[700], 0.8),
                        '&:focus-visible': {
                          outlineColor: alpha(theme.palette.primary[400], 0.5),
                          backgroundColor: alpha(theme.palette.primary[900], 0.4),
                          borderColor: alpha(theme.palette.primary[700], 0.6),
                        },
                      },
                      '& .DocSearch-Hit[aria-selected="true"] a': {
                        color: (theme.vars || theme).palette.primary[300],
                        backgroundColor: alpha(theme.palette.primary[900], 0.4),
                        borderColor: alpha(theme.palette.primary[700], 0.6),
                      },
                      '& .DocSearch-Hit-action, & .DocSearch-Hits mark': {
                        color: (theme.vars || theme).palette.primary[400],
                        '& .DocSearch-Hit-action-button': {
                          '&:hover': {
                            backgroundColor: alpha(theme.palette.primary[900], 0.8),
                            borderColor: alpha(theme.palette.primary[700], 0.8),
                          },
                        },
                      },
                      '& .DocSearch-Footer': {
                        borderColor: (theme.vars || theme).palette.primaryDark[700],
                      },
                    },
                  },
                ]}
              />
        </>
    )
}
export default Search;