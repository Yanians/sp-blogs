"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = Button;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const ListItemButton_1 = tslib_1.__importDefault(require("@mui/material/ListItemButton"));
const InputBase_1 = tslib_1.__importDefault(require("@mui/material/InputBase"));
const react_router_dom_1 = require("react-router-dom");
// export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
//     specialProp?: string;
// }
// type OriginalProps<OriginalComponent extends React.ElementType> = {
//   add?:OriginalComponent;
//  [key:string]:any;// allow passing through arbitrary props 
// } & Omit<React.ComponentPropsWithoutRef<OriginalComponent>, 'add' | 'children'>;
// type CopyPropsFromOriginalComponent<OriginalComponent extends React.ElementType> = 
//      OriginalProps<OriginalComponent>; 
// export function ModifiedLinkFromReactRouterDom<Component extends React.ElementType>
//   (props:CopyPropsFromOriginalComponent<Component>)
//   : React.JSX.Element {
//     const { 
//       children,
//       add:Component = 'div',
//       style, 
//       ...rest } = props;
//           return <Component {...rest} style={style} />
//       }
function Button(props) {
    const { ...rest } = props;
    // do something with specialProp
    return (0, jsx_runtime_1.jsx)("button", { ...rest });
}
function Directives() {
    const Search = (0, styles_1.styled)('div')(({ theme }) => ({
        display: 'flex',
        zIndex: 99,
        position: 'relative',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
        boxShadow: theme.shadows[12],
        // backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.mode === 'dark' ? (0, styles_1.alpha)(theme.palette.success.main, 0.25) : (0, styles_1.alpha)(theme.palette.common.black, 0.18),
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? (0, styles_1.alpha)(theme.palette.common.white, 0.07) : (0, styles_1.alpha)(theme.palette.common.white, 0.9),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));
    const LinkModified = (0, styles_1.styled)((props) => {
        const { to, ...rest } = props;
        return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: to, ...rest });
    })(({ theme }) => ({
        textDecoration: 'none',
        "& :hover": {
            textDecoration: 'underline',
            fontStyle: 'italic',
            color: theme.palette.mode === 'dark' ?
                (0, styles_1.alpha)(theme.palette.success.dark, 0.99) :
                (0, styles_1.alpha)(theme.palette.error.dark, 0.99),
        }, color: theme.palette.mode === 'dark' ?
            (0, styles_1.alpha)(theme.palette.common.white, 0.99) : (0, styles_1.alpha)(theme.palette.common.black, 0.99),
    }));
    const SearchIconWrapper = (0, styles_1.styled)('div')(({ theme }) => ({
        padding: theme.spacing(0, 1),
        display: 'flex',
        zIndex: 99,
        // position: 'relative',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
        boxShadow: theme.shadows[10],
        backgroundColor: `${(0, styles_1.alpha)(theme.palette.background.paper, 0.72)}`,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    const ListItemStyle = (0, styles_1.styled)((props) => {
        const { children, ...rest } = props;
        return (0, jsx_runtime_1.jsx)(ListItemButton_1.default, { ...rest, children: children });
    })(({ theme }) => ({
        ...theme.typography.body2,
        position: 'relative',
        width: 'auto',
        textTransform: 'capitalize',
        paddingRight: theme.spacing(2),
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? (0, styles_1.alpha)(theme.palette.success.dark, 0.25) : 'inherit',
            color: theme.palette.error[700],
            fontStyle: 'italic',
            textDecoration: 'none',
        },
        '&:before': {
            top: 0,
            right: 0,
            width: 3,
            bottom: 0,
            content: "''",
            display: 'none',
            position: 'relative',
        }
    }));
    const StyledInputBase = (0, styles_1.styled)(InputBase_1.default)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    return { Search, StyledInputBase, SearchIconWrapper, ListItemStyle, LinkModified };
}
exports.default = Directives;
