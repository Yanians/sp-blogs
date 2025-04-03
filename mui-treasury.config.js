/** @type {import('@mui-treasury/layout-core').MuiTreasuryConfig} */
module.exports = {
    // Optional: set the default layout directory (commonly `client` for your React app)
    dir: './client',
  
    // Layout presets to use (optional — for tools or automation)
    layouts: [
      'layout-core-v5', // The one you cloned via `npx mui-treasury@latest clone layout-core-v5`
    ],
  
    // Custom theme overrides (used in ThemeProvider or passed into layouts)
    theme: {
      palette: {
        mode: 'light',
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#ff4081',
        },
        background: {
          default: 'rgba(255, 255, 255, 0.1)', // Glass effect
          paper: 'rgba(255, 255, 255, 0.05)',   // Glass effect for paper
        },
        text: {
          primary: '#fff',
          secondary: '#ccc',
        },
      },
      shape: {
        borderRadius: 12,
      },
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(255,255,255,0.05)',
            },
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.08)',
            },
          },
        },
      },
    },
  
    // Custom layout behavior if needed (e.g. sticky headers, permanent sidebars)
    scheme: {
      header: {
        config: {
          position: 'sticky',
          initialHeight: 64,
        },
      },
      edgeSidebar: {
        config: {
          left: {
            variant: 'permanent',
            width: 240,
          },
        },
      },
      insetSidebar: {
        config: {
          right: {
            position: 'sticky',
            width: 300,
            top: 64,
          },
        },
      },
      footer: {
        config: {
          position: 'sticky',
          initialHeight: 56,
        },
      },
    },
  };
  