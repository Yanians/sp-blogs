"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _RichTreeView = require("@mui/x-tree-view/RichTreeView");
var _jsxRuntime = require("react/jsx-runtime");
const MUI_X_PRODUCTS = [{
  id: 'grid',
  label: 'Data Grid',
  children: [{
    id: 'grid-community',
    label: '@mui/x-data-grid'
  }, {
    id: 'grid-pro',
    label: '@mui/x-data-grid-pro'
  }, {
    id: 'grid-premium',
    label: '@mui/x-data-grid-premium'
  }]
}, {
  id: 'pickers',
  label: 'Date and Time Pickers',
  children: [{
    id: 'pickers-community',
    label: '@mui/x-date-pickers'
  }, {
    id: 'pickers-pro',
    label: '@mui/x-date-pickers-pro'
  }]
}, {
  id: 'charts',
  label: 'Charts',
  children: [{
    id: 'charts-community',
    label: '@mui/x-charts'
  }]
}, {
  id: 'tree-view',
  label: 'Tree View',
  children: [{
    id: 'tree-view-community',
    label: '@mui/x-tree-view'
  }]
}];
const getAllItemsWithChildrenItemIds = () => {
  const itemIds = [];
  const registerItemId = item => {
    if (item.children?.length) {
      itemIds.push(item.id);
      item.children.forEach(registerItemId);
    }
  };
  MUI_X_PRODUCTS.forEach(registerItemId);
  return itemIds;
};
const MonorepoTree = () => {
  const [expandedItems, setExpandedItems] = _react.default.useState([]);
  const handleExpandedItemsChange = (event, itemIds) => {
    setExpandedItems(itemIds);
  };
  const handleExpandClick = () => {
    setExpandedItems(oldExpanded => oldExpanded.length === 0 ? getAllItemsWithChildrenItemIds() : []);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RichTreeView.RichTreeView, {
      items: MUI_X_PRODUCTS,
      expandedItems: expandedItems,
      onExpandedItemsChange: handleExpandedItemsChange
    })
  });
};
var _default = exports.default = MonorepoTree;