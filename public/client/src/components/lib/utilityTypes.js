"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPropsInheritance = exports.Cards = void 0;
exports.PassThrough = PassThrough;
exports.Buttonis = Buttonis;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const react_router_dom_1 = require("react-router-dom");
const Button_1 = tslib_1.__importDefault(require("@mui/material/Button"));
const Paper_1 = tslib_1.__importDefault(require("@mui/material/Paper"));
const TextField_1 = tslib_1.__importDefault(require("@mui/material/TextField"));
const Card_1 = tslib_1.__importDefault(require("@mui/material/Card"));
;
function PassThrough(props) {
    const { children, variant, add: Component = 'div', condition, basename, to, style, ...rest } = props;
    switch (condition) {
        case 'typography': {
            return (0, jsx_runtime_1.jsx)(Typography_1.default, { ...rest, children: children });
        }
        case 'textfield': {
            return (0, jsx_runtime_1.jsx)(TextField_1.default, { ...rest, children: children });
        }
        case 'box': {
            return (0, jsx_runtime_1.jsx)(Box_1.default, { ...rest, children: children });
        }
        case 'paper': {
            return (0, jsx_runtime_1.jsx)(Paper_1.default, { ...rest, children: children });
        }
        case 'card': {
            return (0, jsx_runtime_1.jsx)(Card_1.default, { ...rest, children: children });
        }
        case 'button': {
            return (0, jsx_runtime_1.jsx)(Button_1.default, { ...rest, children: children });
        }
        case 'link': {
            return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { ...rest, to: to, basename: basename, children: children });
        }
        default: {
            return (0, jsx_runtime_1.jsx)(Component, { ...rest, style: style, children: children });
        }
    }
}
// const Consumer2 = ({ as: Component }: Props) => {
//   return <Component />;
// };
// (Consumer2 as TRESComponent<Props>).props = {} as Props; // Satisfies TRES typing
// export { Consumer2 } ;
const Cards = ({ title, children, ...props } // new utility, see below
) => ((0, jsx_runtime_1.jsxs)(Box_1.default, { ...props, children: [title, ": ", children] }));
exports.Cards = Cards;
(0, jsx_runtime_1.jsx)(exports.Cards, { title: "Name spae", children: "Someday" });
/******************************************************************/
/*******************>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
function Buttons(props) {
    const { as: Component, children, ...rest } = props;
    return (0, jsx_runtime_1.jsx)(Component, { ...rest, children: children });
}
(0, jsx_runtime_1.jsx)(Buttons, { as: Typography_1.default, children: "click me" });
const withPropsInheritance = () => { };
exports.withPropsInheritance = withPropsInheritance;
const ShadowsProps = (defaults, Component) => {
    const WrappedComponent = (props) => {
        const { fontFamily = {}, style, ...rest } = props;
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
            '2px 2px 2px grey': props.shadow3grey,
        };
        const activeFont = Object.entries(shadows).find(([_, isEnabled]) => isEnabled)?.[0];
        return ((0, jsx_runtime_1.jsx)(Component, { ...defaults, ...rest, style: {
                ...style,
                ...(activeFont ? { textShadow: activeFont } : {}),
            } }));
    };
    WrappedComponent.displayName = `(${Component.displayName || Component.name || "Component"})`;
    return WrappedComponent;
};
;
function Buttonis({ style, children }) {
    return (0, jsx_runtime_1.jsx)("button", { style: style, children: children });
}
const defaultProp = {
    age: 25,
};
const GreetComponent = ({ name, age }) => ((0, jsx_runtime_1.jsx)("div", { children: `Hello, my name is ${name}, ${age}` }));
GreetComponent.defaultProp = defaultProp;
const TestComponent = (props) => {
    return (0, jsx_runtime_1.jsx)("h1", {});
};
// const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
//   return <h1 />;
// };
// Property 'age' is missing in type '{ name: string; }' but required in type '{ age: number; }'
const el = (0, jsx_runtime_1.jsx)(TestComponent, { name: "foo", age: 0 });
;
const UserConsumer1 = ({ as: C, }) => {
    const { as: Component = 'div' } = C;
    return (0, jsx_runtime_1.jsx)(Component, {});
};
(0, jsx_runtime_1.jsx)(UserConsumer1, { as: Typography_1.default });
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
    return moduleID
        .split(delimiter)
        .filter((part) => !delimiter.test(part))
        .map((part) => (part.length === 0 ? '$' : part))
        .map(upperCaseFirst)
        .join('');
}
