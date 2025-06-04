"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortFolioContainer = PortFolioContainer;
exports.FigureContainer = FigureContainer;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const system_1 = require("@mui/system");
const styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
/**
 * AppBar - is a header element
 * Container -is a div element
 *
 */
const Root = (0, system_1.styled)('div')(({ theme }) => ({
    '& .portfolio': {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr));',
        gridAutoRows: '1fr',
        gridGap: '1em',
        gridAutoFlow: 'dense',
    },
    '& .portfolio.featured': {
        margin: 0,
        gridRow: 'span 2',
        gridColumn: 'span 2',
    },
    '& .portfolio > figure': {
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
    },
    '& .portfolio img ': {
        flex: 1,
        objectFit: 'cover',
        maxWidth: '100%',
    },
    'figure > figcaption': {
        padding: '0.3em 0.8em',
        backgroundColor: 'rgba(0,0,0, 0.5)',
        color: '#fff',
        textAlign: 'right',
    },
    '@supports (display: grid)': {
        'div': {},
    },
    '*': {
        backgroundColor: 'darkgrey',
        color: 'white',
        borderRadius: '0.5em',
    },
}));
const CoverImgStyle = styled_1.default.img `
  top:0,
  object-fit:cover,
`;
const Gridcontainer = styled_1.default.div `
 display:inline-grid;
 grid-template-columns: 1fr;
 grid-template-rows: 1fr;
 grid-gap:0.5em;
 max-width:1080px;   
`;
const Portfoliocontainer = styled_1.default.div `
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows:1fr;
  grid-gap:1em;
  grid-auto-flow:dense;
`;
const Figurecontainer = styled_1.default.figure `
  margin:0;
  grid-row:span 2;
  grid-column:span 2;
`;
const Griditem = styled_1.default.div `
  
`;
function PortFolioContainer(props) {
    const { children, } = props;
    return ((0, jsx_runtime_1.jsx)(Root, { children: (0, jsx_runtime_1.jsx)("div", { className: "portfolio", children: children }) }));
}
function FigureContainer(props) {
    const { src, alt, name, } = props;
    return ((0, jsx_runtime_1.jsxs)("figure", { className: 'featured', children: [(0, jsx_runtime_1.jsx)("img", { src: src, alt: alt }), (0, jsx_runtime_1.jsx)("figcaption", { children: name })] }));
}
