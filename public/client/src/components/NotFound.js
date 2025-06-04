"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NotFoundHero;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const Typography_1 = tslib_1.__importDefault(require("@mui/material/Typography"));
const Section_1 = tslib_1.__importDefault(require("./Section"));
const SectionHeadline_1 = tslib_1.__importDefault(require("./SectionHeadline"));
const SearchOffRounded_1 = tslib_1.__importDefault(require("@mui/icons-material/SearchOffRounded"));
function NotFoundIllustration() {
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: (theme) => ({
            mx: 'auto',
            mb: 4,
            height: { xs: 200, sm: 150 },
            width: { xs: 100, sm: 200 },
            display: 'flex',
            flexDirection: { xs: 'column-reverse', sm: 'column' },
            borderRadius: 1,
            border: `1px solid ${theme.palette.grey[200]}`,
            overflow: 'clip',
            boxShadow: `0px 2px 8px -2px ${(0, styles_1.alpha)(theme.palette.primary[300], 0.3)}, 0px 6px 12px -2px ${(0, styles_1.alpha)(theme.palette.primary[100], 0.2)}`,
            ...theme.applyDarkStyles({
                borderColor: theme.palette.primaryDark[700],
                boxShadow: `0px 2px 8px -2px ${(0, styles_1.alpha)(theme.palette.common.black, 0.3)}, 0px 6px 12px -2px ${(0, styles_1.alpha)(theme.palette.common.black, 0.2)}`,
            }),
        }), children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
                    p: 1.5,
                    display: { xs: 'none', sm: 'flex' },
                    gap: '6px',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { width: 10, height: 10, borderRadius: 2, bgcolor: 'error.500', opacity: '80%' } }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { width: 10, height: 10, borderRadius: 2, bgcolor: 'warning.500', opacity: '80%' } }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { width: 10, height: 10, borderRadius: 2, bgcolor: 'success.500', opacity: '80%' } })] }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                    pt: 1,
                    pb: '5px',
                    display: { xs: 'flex', sm: 'none' },
                    justifyContent: 'center',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                }, children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { height: 3, width: '40%', bgcolor: 'rgba(0,0,0,0.3)', borderRadius: 2 } }) }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }, children: (0, jsx_runtime_1.jsx)(SearchOffRounded_1.default, { sx: { fontSize: 50, color: 'primary.500', opacity: '40%' } }) })] }));
}
function NotFoundHero() {
    return ((0, jsx_runtime_1.jsxs)(Section_1.default, { bg: "gradient", sx: {
            display: 'flex',
            alignItems: 'center',
            '& .MuiContainer-root': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            },
        }, children: [(0, jsx_runtime_1.jsx)(NotFoundIllustration, {}), (0, jsx_runtime_1.jsx)(SectionHeadline_1.default, { alwaysCenter: true, title: (0, jsx_runtime_1.jsx)(Typography_1.default, { component: "h1", variant: "h4", sx: { fontWeight: 'semiBold' }, children: "Page not found" }), description: "Apologies, but the page you were looking for wasn't found. Try reaching for the search button on the nav bar above to look for another one." })] }));
}
