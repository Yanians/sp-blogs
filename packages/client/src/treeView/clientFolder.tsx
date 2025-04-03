import React from "react";
import { TreeItem } from '@mui/x-tree-view/TreeItem';

const ClientFolder = () => (
  <TreeItem itemId="2" label="client">
    <TreeItem itemId="3" label="dist" />
    <TreeItem itemId="4" label="public" />
    <TreeItem itemId="5" label="babel" />
    <TreeItem itemId="6" label="css" />
  </TreeItem>
);

export default ClientFolder;
