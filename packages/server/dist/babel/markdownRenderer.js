"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _mark = require("./mark");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const MarkdownRenderer = markdownText => {
  const [parsedData, setParsedData] = React.useState(null);
  React.useEffect(() => {
    if (markdownText) {
      const config = {
        getHeaders: true,
        getDescription: true,
        getContent: true
      };
      setParsedData((0, _mark.render)(markdownText, config));
    }
  }, [markdownText]);
  if (!parsedData) return /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
    children: "Loading..."
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "markdown-container",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: parsedData?.title
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: "Description:"
      }), " ", parsedData?.description]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: "Authors:"
      }), " ", parsedData?.headers?.authors.join(", ")]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      dangerouslySetInnerHTML: {
        __html: parsedData?.content
      }
    })]
  });
};
var _default = exports.default = MarkdownRenderer;