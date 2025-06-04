"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = tslib_1.__importDefault(require("@mui/material/Box"));
const styles_1 = require("@mui/material/styles");
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    '& .portfolio > figure': {
    // display:'flex', 
    // flexDirection:'column', 
    // margin:0,
    },
    '& .portfolio img ': {
        flex: 1,
        objectFit: 'cover',
        width: '100%',
    },
    'figure > figcaption': {
        padding: '0.3em 0.8em',
        backgroundColor: 'rgba(0,0,0, 0.5)',
        color: '#fff',
        textAlign: 'right',
    },
}));
const StyleCoverImage = (0, styles_1.styled)('img')(({ theme }) => ({
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
}));
function GridContainerBox({ src, alt, name }) {
    return ((0, jsx_runtime_1.jsx)(Root, { children: (0, jsx_runtime_1.jsxs)(Box_1.default, { component: 'div', className: "portfolio", sx: {
                display: 'grid',
                border: '3px solid white',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gridAutoRows: '1fr',
                gap: '1em',
                gridAutoFlow: 'dense',
            }, children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { component: 'figure', className: "featured", sx: {
                        margin: 0,
                        border: '3px solid white',
                        gridColumn: 'span 2',
                        gridRow: 'span 2',
                    }, children: [(0, jsx_runtime_1.jsx)(StyleCoverImage, { src: src, alt: alt }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: 'figcaption', children: name })] }), (0, jsx_runtime_1.jsx)(Box_1.default, {})] }) }));
}
exports.default = GridContainerBox;
