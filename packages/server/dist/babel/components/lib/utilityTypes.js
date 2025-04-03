"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Buttonis = Buttonis;
exports.Cards = void 0;
exports.PassThrough = PassThrough;
exports.withPropsInheritance = exports.defaultProps = void 0;
var React = _interopRequireWildcard(require("react"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var Recompose = _interopRequireWildcard(require("recompose"));
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// combine all the props

/****************** USABLE SECTION**************/

;
function PassThrough(props) {
  const {
    children,
    variant,
    add: Component = 'div',
    condition,
    style,
    ...rest
  } = props;
  switch (condition) {
    case 'typography':
      {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          ...rest,
          children: children
        });
      }
    case 'textfield':
      {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
          ...rest,
          children: children
        });
      }
    case 'box':
      {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          ...rest,
          children: children
        });
      }
    case 'card':
      {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, {
          ...rest,
          children: children
        });
      }
    default:
      {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
          ...rest,
          style: style,
          children: children
        });
      }
  }
}

/********************* END USABLE SECTION***************/

// if you need to break the unknown options of the component or anything you want to exclude 
// use this signature

//@ts-ignore

/**
 * To disable custom properties, use module augmentation
 *
 * @example
 * declare module '@mui/material/styles' {
 *   interface CssThemeVariables {
 *     enabled: true;
 *   }
 * }
 */

/**
 * For internal usage in `@mui/system` package
 */

//@ts-ignore

// const Consumer2 = ({ as: Component }: Props) => {
//   return <Component />;
// };

// (Consumer2 as TRESComponent<Props>).props = {} as Props; // Satisfies TRES typing

// export { Consumer2 } ;

const Cards = _ref => {
  let {
    title,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    ...props,
    children: [title, ": ", children]
  });
};
exports.Cards = Cards;
/*#__PURE__*/(0, _jsxRuntime.jsx)(Cards, {
  title: "Name spae",
  children: "Someday"
});

/******************************************************************/

//need to ask usage from GPT

const defaultProps = (defaults, Component) => Recompose.defaultProps(defaults)(Component);
exports.defaultProps = defaultProps;
/*******************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
function Button(props) {
  const {
    as: Component,
    children,
    ...rest
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
    ...rest,
    children: children
  });
}
/*#__PURE__*/(0, _jsxRuntime.jsx)(Button, {
  as: _Typography.default,
  children: "click me"
});
const withPropsInheritance = (defaults, Component) => Recompose.defaultProps(defaults)(Component);
exports.withPropsInheritance = withPropsInheritance;
const ShadowsProps = (defaults, Component) => {
  const WrappedComponent = props => {
    const {
      fontFamily = {},
      style,
      ...rest
    } = props;
    const shadows = {
      '1px 1px 1px rgba(19, 16, 16, 0.96)': props.shadowblack,
      '1px 2px 1px black rgba(173, 167, 167, 0.43)': props.shadow1black,
      '1px 2px 2px black rgba(173, 167, 167, 0.43)': props.shadow2black,
      '2px 2px 2px black rgba(173, 167, 167, 0.43)': props.shadow3black,
      '1px 1px 1px red rgba(177, 23, 23, 0.57)': props.shadowred,
      '3px 3px 6px rgba(218, 109, 176, 0.47)': props.shadowsofia,
      '1px 2px 1px red': props.shadow1red,
      '1px 2px 2px red': props.shadow2red,
      '2px 2px 2px red': props.shadow3red,
      '1px 1px 1px grey': props.shadowgrey,
      '1px 1px 1px rgba(66, 95, 66, 0.16)': props.shadowgreylight,
      '1px 1px 2px grey': props.shadow1grey,
      '1px 2px 1px grey': props.shadow2grey,
      '2px 2px 2px grey': props.shadow3grey
    };
    const activeFont = Object.entries(shadows).find(_ref2 => {
      let [_, isEnabled] = _ref2;
      return isEnabled;
    })?.[0];
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
      ...defaults,
      ...rest,
      style: {
        ...style,
        ...(activeFont ? {
          textShadow: activeFont
        } : {})
      }
    });
  };
  WrappedComponent.displayName = `(${Component.displayName || Component.name || "Component"})`;
  return WrappedComponent;
};
;
function Buttonis(_ref3) {
  let {
    style,
    children
  } = _ref3;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    style: style,
    children: children
  });
}

// This applies to combining or chaining props between or across many Props declaration
// It can consume any other props from different function using it.
//refers to example below

/**
 * example usage of above type ComponentProps
 */

const defaultProp = {
  age: 25
};
const GreetComponent = _ref4 => {
  let {
    name,
    age
  } = _ref4;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: `Hello, my name is ${name}, ${age}`
  });
};
GreetComponent.defaultProp = defaultProp;
const TestComponent = props => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {});
};

// const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
//   return <h1 />;
// };

// Property 'age' is missing in type '{ name: string; }' but required in type '{ age: number; }'
const el = /*#__PURE__*/(0, _jsxRuntime.jsx)(TestComponent, {
  name: "foo",
  age: 0
});

// type WithFont = {
//   cursive?:boolean;
// }
//    export const Texts = DefaultProps<typeof Typography,{}, Shadows>({ variant:'h4'}, Typography);

;
const UserConsumer1 = _ref5 => {
  let {
    as: C
  } = _ref5;
  const {
    as: Component = 'div'
  } = C;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {});
};
/*#__PURE__*/(0, _jsxRuntime.jsx)(UserConsumer1, {
  as: _Typography.default
});

// declare namespace TRESS {
//   interface ElementAttributesProperty {
//     Props:React.ComponentType<any>;
//   }
// }

//not able to  recognise props from Component

function upperCaseFirst(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}
//@ts-ignore
function moduleIDToJSIdentifier(moduleID) {
  const delimiter = /(\.|-|\/)/;
  return moduleID.split(delimiter).filter(part => !delimiter.test(part)).map(part => part.length === 0 ? '$' : part).map(upperCaseFirst).join('');
}