"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const TextContentStyled = (0, styles_1.styled)('div')(({ theme }) => ({
    alignSelf: 'center',
    margin: '0 0 0 15%',
    [theme.breakpoints.down('md')]: {
        margin: ' 0 0 0 5%',
    },
}));
;
function InnerContainer(props) {
    const { children } = props;
    return ((0, jsx_runtime_1.jsx)("div", { className: "inner-grid-container", children: children }));
}
function SubContainer(props) {
    const { leftContainer, rightContainer } = props;
    return ((0, jsx_runtime_1.jsxs)(InnerContainer, { children: [(0, jsx_runtime_1.jsx)("div", { className: "left-sub-item-container", children: leftContainer }), (0, jsx_runtime_1.jsx)(TextContentStyled, { children: (0, jsx_runtime_1.jsx)("div", { className: "right-sub-item-container", children: rightContainer }) })] }));
}
exports.default = SubContainer;
