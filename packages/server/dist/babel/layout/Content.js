"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Content;
var React = _interopRequireWildcard(require("react"));
var _layoutCoreV = require("@treasury/layout-core-v5");
var _routes = require("@routes/routes");
var _utilityTypes = require("@lib/utilityTypes");
var _directives = _interopRequireDefault(require("@lib/directives"));
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Content(_ref) {
  let {
    children
  } = _ref;
  const {
    ListItemStyle,
    LinkModified
  } = (0, _directives.default)();
  const [headerMagnet, setHeaderMagnet] = React.useState(false);
  const ItemButton = _utilityTypes.PassThrough;
  const Text = _utilityTypes.PassThrough;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_layoutCoreV.Content, {
    sx: {
      bgcolor: 'Background.default'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_layoutCoreV.InsetContainer, {
      maxWidth: "xl",
      sx: {
        color: 'grey.600',
        bgcolor: 'background.paper'
      },
      leftSidebar: /*#__PURE__*/(0, _jsxRuntime.jsx)(_layoutCoreV.InsetSidebar, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            position: 'static',
            background: 'background.paper'
          },
          children: _routes.Routes.map((item, index) => {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(LinkModified, {
              to: item.link,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ItemButton, {
                dense: true,
                add: ListItemStyle,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
                  align: "center",
                  noWrap: true,
                  condition: "typography",
                  children: item.Title
                })
              }, index)
            });
          })
        })
      }),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        pl: 15,
        height: "1000px",
        width: "100%",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Scroll the content, then enable header magnet and scroll again"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.FormControlLabel, {
          label: "Header Magnet Enabled",
          control: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {}),
          onChange: (_, checked) => setHeaderMagnet(checked)
        }), children]
      })
    })
  })

  // <Contents>
  //      <InsetContainer
  //        maxWidth={"md"}
  //        leftSidebar={
  //          <InsetSidebar sx={{ bgcolor: "background.paper" }}>
  //            <Box p={2}>Hello test</Box>
  //          </InsetSidebar>
  //        }
  //      >
  //        <Box p={2} height={"1000px"} width="100%">
  //          <p>
  //            Scroll the content, then enable header magnet and scroll again
  //          </p>
  //          <FormControlLabel
  //            label="Header Magnet Enabled"
  //            control={<Checkbox />}
  //            onChange={(_, checked) => setHeaderMagnet(checked)}
  //          />
  //          {children}
  //        </Box>
  //      </InsetContainer>
  //    </Contents>
  ;
}