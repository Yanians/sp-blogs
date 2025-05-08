
import * as React from 'react';
import  SearchIcon  from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { useDocSearchKeyboardEvents } from '@docsearch/react';

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
      backgroundColor: alpha(theme.palette.grey[50], 0.6),
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(14),
      color: (theme.vars || theme).palette.text.secondary,
      border: `1px solid ${(theme.vars || theme).palette.grey[200]}`,
      borderRadius: (theme.vars || theme).shape.borderRadius,
      cursor: 'pointer',
      transitionProperty: 'all',
      transitionDuration: '150ms',
      boxShadow: `hsl(200, 0%, 100%) 0 1px 0 inset, ${alpha(theme.palette.grey[100], 0.4)} 0 -1px 0 inset, ${alpha(theme.palette.grey[200], 0.5)} 0 1px 2px 0`,
      '&:hover': {
        background: alpha(theme.palette.grey[100], 0.5),
        borderColor: (theme.vars || theme).palette.grey[300],
        boxShadow: 'none',
      },
      '&:focus-visible': {
        outline: `3px solid ${alpha(theme.palette.primary.main, 0.5)}`,
        outlineOffset: '1px',
      },
    },
    theme.applyStyles('dark',{
      backgroundColor: alpha(theme.palette.primary.dark, 0.4),
      borderColor: alpha(theme.palette.grey[500], 0.4),
      boxShadow: `${alpha(theme.palette.grey[400], 0.4)} 0 1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 -1px 0 inset, ${(theme.vars || theme).palette.common.black} 0 1px 2px 0`,
      '&:hover': {
        background: (theme.vars || theme).palette.secondary,
        borderColor: (theme.vars || theme).palette.grey[700],
        boxShadow: 'none',
      },
    }),
  ]);
  
  const SearchLabel = styled('span')(({ theme }) => ({
    marginRight: 'auto',
    marginBottom: '1px', // optical alignment
    color: (theme.vars || theme).palette.text.secondary,
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
      ...theme.applyStyles('dark',{
        borderColor: (theme.vars || theme).palette.grey[600],
        backgroundColor: (theme.vars || theme).palette.error.contrastText,
      }),
    };
  });

  function ToggleButton({willOpen}:{willOpen:()=>void}){
        const macOS = window.navigator.platform.toUpperCase().includes('MAC');
         const [isOpen, setIsOpen] = React.useState(false);
        const searchButtonRef = React.useRef(null);

        
      const onOpen = React.useCallback(() => {
          setIsOpen(true);
        }, [setIsOpen]);

        
    const onClose = React.useCallback(() => {
        setIsOpen(false); // DO NOT call setIsOpen inside a timeout (it causes scroll issue).
      }, [setIsOpen]);
      

        useDocSearchKeyboardEvents({
          isOpen,
          onOpen,
          onClose,
          searchButtonRef,
        });

    return (
         <SearchButton
            ref={searchButtonRef}
            onClick={willOpen}
            aria-labelledby="app-search-label"
           >
        <SearchIcon sx={{ fontSize: '1.125rem' }} />
            <SearchLabel id="app-search-label">Search anything</SearchLabel>
            <Shortcut aria-hidden="true">
                {/* eslint-disable-next-line material-ui/no-hardcoded-labels */}
                {macOS ? '⌘' : 'Ctrl+'}K
            </Shortcut>
        </SearchButton> 
    )
  }

  export default ToggleButton;