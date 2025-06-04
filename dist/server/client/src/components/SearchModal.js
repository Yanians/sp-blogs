"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = slugify;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
// client/src/components/SearchModal.tsx
const react_1 = require("react");
const material_1 = require("@mui/material");
const Fade_1 = tslib_1.__importDefault(require("@mui/material/Fade"));
const Close_1 = tslib_1.__importDefault(require("@mui/icons-material/Close"));
const react_router_dom_1 = require("react-router-dom");
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // remove non-word characters
        .trim()
        .replace(/\s+/g, '-'); // replace spaces with -
}
const SearchModal = ({ open, onClose }) => {
    const [query, setQuery] = (0, react_1.useState)("");
    const [results, setResults] = (0, react_1.useState)([]);
    const [allPosts, setAllPosts] = (0, react_1.useState)([]);
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        const data = window.__PRELOADED_STATE__ || [];
        setAllPosts(data);
    }, []);
    (0, react_1.useEffect)(() => {
        if (query.length > 0) {
            const q = query.toLowerCase();
            const matches = allPosts.filter((post) => post.title.toLowerCase() === q ||
                post.description.toLowerCase() === q ||
                post.authors.find((author) => author).toLowerCase() === q ||
                post.tags.find((tag) => tag).toLowerCase() === q ||
                post.outputRender.toLowerCase().includes(` ${q} `) // strict-ish match
            );
            setResults(matches);
        }
        else {
            setResults([]);
        }
    }, [query, allPosts]);
    const handleSearchChange = (e) => {
        // Get the input value
        let value = e.target.value;
        // Replace spaces with hyphens
        // value = value.replace(/\s+/g, '-');
        setQuery(value);
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Modal, { open: open, onClose: onClose, closeAfterTransition: true, children: (0, jsx_runtime_1.jsx)(Fade_1.default, { in: open, appear: true, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                    position: "fixed",
                    top: "10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80%",
                    maxHeight: "80%",
                    overflowY: "auto",
                    bgcolor: "#fff",
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 24,
                    zIndex: 1300,
                }, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", children: "Search Posts" }), (0, jsx_runtime_1.jsx)(material_1.IconButton, { onClick: onClose, children: (0, jsx_runtime_1.jsx)(Close_1.default, {}) })] }), (0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, margin: "normal", label: "Type to search", value: query, onChange: handleSearchChange }), (0, jsx_runtime_1.jsx)(material_1.Box, { display: "flex", flexWrap: "wrap", gap: 1, mt: 2, children: results.map((post) => ((0, jsx_runtime_1.jsx)(material_1.Chip, { label: slugify(post.outputRender), component: react_router_dom_1.Link, to: `${slugify(post.title)}`, clickable: true, onClick: () => {
                                onClose(); // trigger modal closing
                                setTimeout(() => {
                                    navigate(`blogs/${slugify(post.title)}/searchId`);
                                }, 100); // wait for transition (adjust if needed)
                            } }, post.title))) })] }) }) }));
};
exports.default = SearchModal;
