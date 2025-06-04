"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const mark_1 = require("./mark");
const MarkdownRenderer = (markdownText) => {
    const [parsedData, setParsedData] = React.useState(null);
    React.useEffect(() => {
        if (markdownText) {
            const config = {
                getHeaders: true,
                getDescription: true,
                getContent: true,
            };
            setParsedData((0, mark_1.render)(markdownText, config));
        }
    }, [markdownText]);
    if (!parsedData)
        return (0, jsx_runtime_1.jsx)("p", { children: "Loading..." });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "markdown-container", children: [(0, jsx_runtime_1.jsx)("h1", { children: parsedData?.title }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Description:" }), " ", parsedData?.description] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Authors:" }), " ", parsedData?.headers?.authors.join(", ")] }), (0, jsx_runtime_1.jsx)("div", { dangerouslySetInnerHTML: { __html: parsedData?.content } })] }));
};
exports.default = MarkdownRenderer;
