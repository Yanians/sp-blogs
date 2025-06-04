"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BlogPostsSearch;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Mood_1 = tslib_1.__importDefault(require("@mui/icons-material/Mood"));
const PersonSearch_1 = tslib_1.__importDefault(require("@mui/icons-material/PersonSearch"));
// material
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
// ----------------------------------------------------------------------
const RootStyle = (0, styles_1.styled)('div')(({ theme }) => ({
    '& .MuiAutocomplete-root': {
        width: 200,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter
        }),
        '&.Mui-focused': {
            width: 240,
            '& .MuiAutocomplete-inputRoot': {
                boxShadow: theme.shadows[10],
            }
        }
    },
    '& .MuiAutocomplete-inputRoot': {
        '& fieldset': {
            borderWidth: `1px !important`,
            borderColor: `${theme.palette.grey[500]} !important`
        }
    },
    '& .MuiAutocomplete-option': {
        '&:not(:last-child)': {
            borderBottom: `solid 1px ${theme.palette.divider}`
        }
    }
}));
function BlogPostsSearch(data) {
    const { posts } = data;
    const outs = posts?.map((item, index) => ({
        id: index,
        title: item.title,
        description: item.description,
    }));
    console.log(outs);
    return ((0, jsx_runtime_1.jsx)(RootStyle, { children: (0, jsx_runtime_1.jsx)(material_1.Autocomplete, { size: "small", disablePortal: true, popupIcon: null, options: posts?.filter((item) => item.title), getOptionLabel: posts?.filter((item) => item.title), renderInput: (params) => ((0, jsx_runtime_1.jsx)(material_1.TextField, { ...params, placeholder: "Search post...", InputProps: {
                    ...params.InputProps,
                    startAdornment: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.InputAdornment, { position: "start", children: (0, jsx_runtime_1.jsx)(material_1.Button, { component: Mood_1.default, startIcon: (0, jsx_runtime_1.jsx)(PersonSearch_1.default, {}), sx: {
                                        ml: 1,
                                        width: 20,
                                        height: 20,
                                        color: 'text.disabled'
                                    } }) }), params.InputProps.startAdornment, params.InputProps.startAdornment] }))
                } })) }) }));
}
