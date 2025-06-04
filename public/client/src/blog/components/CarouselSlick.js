"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
// Carousel.tsx
const react_1 = tslib_1.__importDefault(require("react"));
const react_slick_1 = tslib_1.__importDefault(require("react-slick"));
const BlogCard_1 = tslib_1.__importDefault(require("./BlogCard"));
const material_1 = require("@mui/material");
function Carousel({ item }) {
    const [isClient, setIsClient] = react_1.default.useState(false);
    react_1.default.useEffect(() => {
        setIsClient(true);
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '10%',
        arrows: true,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { sx: { maxWidth: 900, mx: 'auto', mt: 4, }, children: isClient && (0, jsx_runtime_1.jsx)(react_slick_1.default, { ...settings, children: item.map((blog, index) => ((0, jsx_runtime_1.jsx)(BlogCard_1.default, { data: blog }, index))) }) }));
}
;
exports.default = Carousel;
