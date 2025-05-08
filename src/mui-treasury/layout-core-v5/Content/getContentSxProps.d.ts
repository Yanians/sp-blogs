import { EdgeSidebarBuilder } from "../EdgeSidebar/EdgeSidebarBuilder";
import { CONTENT_ID, FOOTER_ID } from "../utils/constant";
import { Responsive } from "../utils/types";
export declare const getContentSxProps: (modules: {
    leftEdgeSidebar?: EdgeSidebarBuilder;
    rightEdgeSidebar?: EdgeSidebarBuilder;
}, id?: CONTENT_ID | FOOTER_ID) => {
    width: Responsive<number | string>;
    marginLeft: Responsive<string>;
    marginRight: Responsive<string>;
};
