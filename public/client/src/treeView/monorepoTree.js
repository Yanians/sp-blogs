"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = tslib_1.__importDefault(require("react"));
const RichTreeView_1 = require("@mui/x-tree-view/RichTreeView");
const MUI_X_PRODUCTS = [
    {
        id: 'grid',
        label: 'Data Grid',
        children: [
            { id: 'grid-community', label: '@mui/x-data-grid' },
            { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
            { id: 'grid-premium', label: '@mui/x-data-grid-premium' },
        ],
    },
    {
        id: 'pickers',
        label: 'Date and Time Pickers',
        children: [
            { id: 'pickers-community', label: '@mui/x-date-pickers' },
            { id: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
        ],
    },
    {
        id: 'charts',
        label: 'Charts',
        children: [{ id: 'charts-community', label: '@mui/x-charts' }],
    },
    {
        id: 'tree-view',
        label: 'Tree View',
        children: [{ id: 'tree-view-community', label: '@mui/x-tree-view' }],
    },
];
const getAllItemsWithChildrenItemIds = () => {
    const itemIds = [];
    const registerItemId = (item) => {
        if (item.children?.length) {
            itemIds.push(item.id);
            item.children.forEach(registerItemId);
        }
    };
    MUI_X_PRODUCTS.forEach(registerItemId);
    return itemIds;
};
const MonorepoTree = () => {
    const [expandedItems, setExpandedItems] = react_1.default.useState([]);
    const handleExpandedItemsChange = (event, itemIds) => {
        setExpandedItems(itemIds);
    };
    const handleExpandClick = () => {
        setExpandedItems((oldExpanded) => oldExpanded.length === 0 ? getAllItemsWithChildrenItemIds() : []);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(RichTreeView_1.RichTreeView, { items: MUI_X_PRODUCTS, expandedItems: expandedItems, onExpandedItemsChange: handleExpandedItemsChange }) }));
};
exports.default = MonorepoTree;
