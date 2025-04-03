"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = XHero;
var React = _interopRequireWildcard(require("react"));
var _xDataGridPro = require("@mui/x-data-grid-pro");
var _xDataGridGenerator = require("@mui/x-data-grid-generator");
var _colors = require("@mui/material/colors");
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _Divider = _interopRequireDefault(require("@mui/material/Divider"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _StaticDateRangePicker = require("@mui/x-date-pickers-pro/StaticDateRangePicker");
var _AdapterDateFns = require("@mui/x-date-pickers/AdapterDateFns");
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _GradientText = _interopRequireDefault(require("docs/src/components/typography/GradientText"));
var _GetStartedButtons = _interopRequireDefault(require("docs/src/components/home/GetStartedButtons"));
var _HeroContainer = _interopRequireDefault(require("docs/src/layouts/HeroContainer"));
var _IconImage = _interopRequireDefault(require("docs/src/components/icon/IconImage"));
var _FolderTreeView = _interopRequireDefault(require("docs/src/components/showcase/FolderTreeView"));
var _route = _interopRequireDefault(require("docs/src/route"));
var _styles = require("@mui/material/styles");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const startDate = new Date();
startDate.setDate(10);
const endDate = new Date();
endDate.setDate(endDate.getDate() + 28);
function XHero() {
  const {
    loading,
    data
  } = (0, _xDataGridGenerator.useDemoData)({
    dataSet: 'Commodity',
    rowLength: 10000,
    maxColumns: 40,
    editable: true
  });
  const [value, setValue] = React.useState([startDate, endDate]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_HeroContainer.default, {
    left: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        textAlign: {
          xs: 'center',
          md: 'left'
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
        fontWeight: "bold",
        variant: "body2",
        color: theme => theme.palette.mode === 'dark' ? 'primary.400' : 'primary.600',
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: {
            xs: 'center',
            md: 'flex-start'
          },
          '& > *': {
            mr: 1,
            width: 28,
            height: 28
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_IconImage.default, {
          name: "product-advanced"
        }), " MUI X"]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
        variant: "h1",
        sx: {
          my: 2,
          maxWidth: 500
        },
        children: ["Performant", /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_GradientText.default, {
          children: "advanced"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), " components"]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        color: "text.secondary",
        sx: {
          mb: 3,
          maxWidth: 500
        },
        children: "Build complex and data-rich applications using a growing list of advanced React components. We're kicking it off with the most powerful Data Grid on the market."
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_GetStartedButtons.default, {
        installation: "npm install @mui/x-data-grid",
        to: _route.default.dataGridDocs,
        sx: {
          justifyContent: {
            xs: 'center',
            md: 'flex-start'
          }
        }
      })]
    }),
    rightSx: {
      p: {
        md: 2,
        lg: 3,
        xl: 4
      },
      overflow: 'scroll'
    },
    right: /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Paper.default, {
        sx: {
          backgroundColor: theme => theme.palette.mode === 'dark' ? 'primaryDark.800' : '#fff',
          border: theme => `1px solid ${theme.palette.mode === 'dark' ? theme.palette.primaryDark[600] : theme.palette.grey[200]}`,
          boxShadow: theme => `0px 4px 20px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(170, 180, 190, 0.3)'}`,
          mb: {
            md: 2,
            lg: 3,
            xl: 4
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            textAlign: 'center',
            py: 1.5,
            position: 'relative',
            borderRadius: 0,
            borderBottom: theme => `1px solid ${theme.palette.mode === 'dark' ? theme.palette.primaryDark[600] : theme.palette.grey[200]}`
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            fontWeight: 500,
            children: "Trades, October 2020"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            height: {
              md: 300,
              xl: 370
            },
            '& .MuiDataGrid-root': {
              borderRadius: 1,
              border: 0,
              color: 'text.secondary',
              '& .MuiCheckbox-root': {
                p: 0.5,
                '& > svg': {
                  fontSize: '1.25rem'
                }
              },
              '& .MuiDataGrid-columnHeaders': {
                borderBottom: theme => `1px solid ${theme.palette.mode === 'dark' ? theme.palette.primaryDark[600] : theme.palette.grey[200]}`
              },
              '& .MuiDataGrid-columnHeaderTitleContainer': {
                padding: 0,
                color: 'text.primary'
              },
              '& .MuiDataGrid-columnHeaderTitle': {
                flexGrow: 1,
                fontSize: '0.875rem'
              },
              '& button, & button > svg': {
                fontSize: 16
              },
              '& .MuiDataGrid-cell': {
                fontSize: '0.875rem',
                color: 'text.secondary',
                borderBottom: theme => `1px solid ${theme.palette.mode === 'dark' ? (0, _styles.alpha)(theme.palette.primaryDark[600], 0.5) : theme.palette.grey[200]}`
              },
              '& .MuiDataGrid-viewport': {
                '& .MuiDataGrid-cell': {
                  fontSize: '0.875rem',
                  color: 'text.secondary'
                },
                '& .MuiInputBase-input': {
                  fontSize: '0.875rem',
                  px: 0.5
                }
              },
              '& .MuiDataGrid-cell[data-field="status"][data-value="Rejected"]': {
                '& .MuiChip-root': {
                  color: theme => theme.palette.mode === 'dark' ? _colors.red[300] : _colors.red[500]
                }
              }
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_xDataGridPro.DataGridPro, {
            ...data,
            disableSelectionOnClick: true,
            checkboxSelection: true,
            hideFooter: true,
            loading: loading,
            density: "compact"
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          display: 'flex',
          overflow: {
            md: 'auto',
            xl: 'unset'
          },
          m: {
            md: -2,
            lg: -3,
            xl: 0
          },
          p: {
            md: 2,
            lg: 3,
            xl: 0
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Paper.default, {
          sx: {
            backgroundColor: theme => theme.palette.mode === 'dark' ? 'primaryDark.800' : '#fff',
            border: theme => `1px solid ${theme.palette.mode === 'dark' ? theme.palette.primaryDark[600] : theme.palette.grey[200]}`,
            boxShadow: theme => `0px 4px 20px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(170, 180, 190, 0.3)'}`,
            minWidth: 300,
            mr: {
              md: 2,
              lg: 3,
              xl: 4
            },
            flexGrow: 1
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              p: 2
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              fontWeight: 500,
              children: "Cool Project"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FolderTreeView.default, {})]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Paper.default, {
          sx: {
            border: theme => `1px solid ${theme.palette.mode === 'dark' ? theme.palette.primaryDark[600] : theme.palette.grey[200]}`,
            boxShadow: theme => `0px 4px 20px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(170, 180, 190, 0.3)'}`,
            '& > div': {
              borderRadius: 1,
              overflow: 'auto',
              backgroundColor: theme => theme.palette.mode === 'dark' ? 'primaryDark.800' : 'initial'
            },
            '& .MuiTypography-subtitle1': {
              fontSize: '0.875rem'
            },
            '& .MuiTypography-caption': {
              width: {
                xs: 28,
                xl: 32
              },
              height: 32
            },
            '& .PrivatePickersSlideTransition-root': {
              minWidth: {
                xs: 268,
                xl: 300
              },
              minHeight: {
                xs: 238,
                xl: 288
              }
            },
            '& [role="row"]': {
              margin: {
                xs: '4px 0',
                xl: '6px 0'
              }
            },
            '& .MuiDateRangePickerDay-root': {
              lineHeight: 0,
              margin: 0
            },
            '& .MuiPickersDay-root': {
              width: {
                xs: 28,
                xl: 32
              },
              height: {
                xs: 28,
                xl: 32
              },
              fontWeight: 400
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LocalizationProvider.LocalizationProvider, {
            dateAdapter: _AdapterDateFns.AdapterDateFns,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_StaticDateRangePicker.StaticDateRangePicker, {
              displayStaticWrapperAs: "desktop",
              value: value,
              onChange: newValue => {
                setValue(newValue);
              },
              renderInput: (startProps, endProps) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
                  ...startProps
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
                  sx: {
                    mx: 2
                  },
                  children: " to "
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
                  ...endProps
                })]
              })
            })
          })
        })]
      })]
    })
  });
}