"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _reactRouterDom = require("react-router-dom");
var _styles2 = require("@mui/styles");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const authors = {
  oliviertassinari: {
    name: 'James Bond',
    avatar: 'https://avatars.githubusercontent.com/u/3165635',
    github: 'oliviertassinari'
  },
  mbrookes: {
    name: 'Matt Brookes',
    avatar: 'https://avatars.githubusercontent.com/u/357702',
    github: 'mbrookes'
  },
  eps1lon: {
    name: 'Sebastian Silbermann',
    avatar: 'https://avatars.githubusercontent.com/u/12292047',
    github: 'eps1lon'
  },
  mnajdova: {
    name: 'Marija Najdova',
    avatar: 'https://avatars.githubusercontent.com/u/4512430',
    github: 'mnajdova'
  },
  michaldudak: {
    name: 'Michał Dudak',
    avatar: 'https://avatars.githubusercontent.com/u/4696105',
    github: 'michaldudak'
  },
  siriwatknp: {
    name: 'Siriwat Kunaporn',
    avatar: 'https://avatars.githubusercontent.com/u/18292247',
    github: 'siriwatknp'
  },
  'danilo-leal': {
    name: 'Danilo Leal',
    avatar: 'https://avatars.githubusercontent.com/u/67129314',
    github: 'danilo-leal'
  },
  m4theushw: {
    name: 'Matheus Wichman',
    avatar: 'https://avatars.githubusercontent.com/u/42154031',
    github: 'm4theushw'
  },
  flaviendelangle: {
    name: 'Flavien Delangle',
    avatar: 'https://avatars.githubusercontent.com/u/3309670',
    github: 'flaviendelangle'
  },
  jamesbond: {
    name: 'Danail Hadjiatanasov',
    avatar: 'https://avatars.githubusercontent.com/u/5858539',
    github: 'DanailH'
  },
  alexfauquette: {
    name: 'Alexandre Fauquette',
    avatar: 'https://avatars.githubusercontent.com/u/45398769',
    github: 'alexfauquette'
  },
  samuelsycamore: {
    name: 'Sam Sycamore',
    avatar: 'https://avatars.githubusercontent.com/u/71297412',
    github: 'samuelsycamore'
  }
};
const styles = theme => ({
  root: {
    flexGrow: 1,
    background: theme.palette.mode === 'dark' ? `linear-gradient(180deg, ${theme.palette.primaryDark[900]} 0%, #001E3C 100%)` : `linear-gradient(180deg, ${theme.palette.grey[50]} 0%, #FFFFFF 100%)`,
    backgroundSize: 'auto 250px ',
    backgroundRepeat: 'no-repeat'
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(-1)
  },
  container: {
    paddingTop: 60 + 20,
    marginBottom: theme.spacing(8),
    maxWidth: `calc(740px + ${theme.spacing(12)})`,
    '& h1': {
      marginBottom: theme.spacing(3)
    },
    '& .markdown-body': {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 1.7
    },
    '& img, & video': {
      display: 'block',
      margin: 'auto'
    },
    '& strong': {
      color: theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[900]
    },
    '& pre': {
      fontSize: theme.typography.pxToRem(16)
    },
    '& summary': {
      padding: 8,
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900]
    },
    '& details': {
      paddingLeft: 16,
      paddingRight: 16,
      background: theme.palette.mode === 'dark' ? (0, _styles.alpha)(theme.palette.primary[900], 0.3) : (0, _styles.alpha)(theme.palette.grey[50], 0.5),
      border: '1px solid',
      borderRadius: 10,
      borderColor: theme.palette.mode === 'dark' ? theme.palette.primaryDark[700] : theme.palette.grey[200],
      transitionProperty: 'all',
      transitionTiming: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: '200ms',
      '&:hover, &:focus-visible': {
        background: theme.palette.mode === 'dark' ? (0, _styles.alpha)(theme.palette.primary[900], 0.4) : theme.palette.grey[50],
        borderColor: theme.palette.mode === 'dark' ? theme.palette.primaryDark[500] : theme.palette.grey[300]
      }
    },
    '& th': {
      textAlign: 'left',
      borderBottom: `3px solid rgba(62, 80, 96, 0.2) !important`
    },
    '& .blog-description': {
      fontSize: theme.typography.pxToRem(13),
      textAlign: 'left',
      color: theme.palette.grey[600],
      '& a': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary[300] : theme.palette.primary[600],
        textDecoration: 'underline'
      }
    }
  },
  time: {
    color: theme.palette.text.secondary,
    ...theme.typography.caption,
    fontWeight: 500
  }
});
function TopLayoutBlog(props) {
  const {
    docs
  } = props;
  const {
    description,
    author,
    title,
    headers,
    location,
    rendered
  } = docs.en;
  // const finalTitle = title || headers.title;

  console.log(location);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [headers.authors.map(author => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "author",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Avatar, {
        sx: {
          width: 36,
          height: 36
        },
        alt: "",
        src: `${authors[author].avatar}?s=${32}`,
        srcSet: `${authors[author].avatar}?s=${32 * 2} 2x`
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "body2",
          fontWeight: "500",
          children: authors[author].name
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
          to: `https://github.com/${authors[author].github}`,
          target: "_blank",
          rel: "noreferrer noopener",
          color: "text.secondary"
        })]
      })]
    }, author)), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
      variant: "body2",
      fontWeight: "500",
      children: ["Title: ", title, " ", author]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
      variant: "body2",
      fontWeight: "500",
      children: ["Description: ", description]
    }), "Simply like this"]
  });
}
const defaultTheme = (0, _styles.createTheme)();
var _default = exports.default = (0, _styles2.withStyles)(styles, {
  defaultTheme
})(TopLayoutBlog);