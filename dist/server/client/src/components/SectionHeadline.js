"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SectionHeadline;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
function SectionHeadline(props) {
    const { alwaysCenter = false, description, id, inverted = false, overline, title } = props;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { m: alwaysCenter ? 'auto' : null }, children: [overline && ((0, jsx_runtime_1.jsx)(Typography_1.default, { id: id, component: "h2", variant: "body2", sx: {
                    fontWeight: 'bold',
                    color: 'primary.main',
                    mb: 1,
                    ...(alwaysCenter && {
                        textAlign: 'center',
                    }),
                }, children: overline })), typeof title === 'string' ? ((0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h2", sx: (theme) => ({
                    maxWidth: 500,
                    ...(inverted
                        ? {
                            color: '#fff',
                        }
                        : {
                            color: 'primaryDark.900',
                            ...theme.applyDarkStyles({
                                color: 'grey.100',
                            }),
                        }),
                    ...(alwaysCenter && {
                        textAlign: 'center',
                        maxWidth: '100%',
                    }),
                }), children: title })) : (React.cloneElement(title, {
                style: {
                    maxWidth: 500,
                    ...(alwaysCenter && {
                        maxWidth: '100%',
                        textAlign: 'center',
                    }),
                    ...(inverted && {
                        color: '#fff',
                    }),
                },
            })), description && ((0, jsx_runtime_1.jsx)(Typography_1.default, { sx: (theme) => ({
                    mt: 1,
                    mb: 3,
                    maxWidth: 500,
                    ...(inverted
                        ? {
                            color: 'grey.400',
                        }
                        : {
                            color: 'grey.800',
                            ...theme.applyDarkStyles({
                                color: 'grey.500',
                            }),
                        }),
                    ...(alwaysCenter && {
                        textAlign: 'center',
                        mx: 'auto',
                    }),
                }), children: description }))] }));
}
