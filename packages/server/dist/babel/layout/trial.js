"use strict";

var React = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Container(_ref) {
  let {
    sum,
    logMessage,
    doSomething
  } = _ref;
  const sums = sum(10, 24);
  const messages = logMessage('Hello world');
  const dosome = doSomething('nice!');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: "Hello Globe ?"
  });
}
function App() {
  const sum = (a, b) => {
    return a + b;
  };
  const logMessage = () => {
    console.log('Hello World');
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Container, {
      sum: sum,
      logMessage: logMessage,
      doSomething: logMessage
    })
  });
}
//   function Compromise(mode:Abs): any {
//       return mode;
//   }

//   function Employee({data}: EmployeeProps) {
//     return (
//       <div>
//         <h2>{data.name}</h2>
//         <h2>{data.age}</h2>
//         <h2>{data.country}</h2>
//       </div>
//     );
//   }

//   function AfterAll({monospace, gradient,directives}:AbsProps){
//     const modes = { monospace, gradient, directives };
//         return<Compromise  mode={modes} />
//   }