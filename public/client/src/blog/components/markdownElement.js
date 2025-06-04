"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const React = tslib_1.__importStar(require("react"));
const clsx_1 = tslib_1.__importDefault(require("clsx"));
const styles_1 = require("@mui/material/styles");
const useForkRef_1 = tslib_1.__importDefault(require("@mui/utils/useForkRef"));
const brandingTheme_1 = require("../../utils/brandingTheme");
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    ...brandingTheme_1.brandingLightThemes.typography.body1,
    lineHeight: 1.625, // Rounds up to 26px－increased compared to the 1.5 default to make the docs easier to read.
    color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingLightThemes.palette.text.primary})`,
    '& :focus-visible': {
        outline: `3px solid ${(0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.primary[500], 0.5)}`,
        outlineOffset: 2,
    },
    '& strong': {
        color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingLightThemes.palette.text.primary})`,
    },
    wordBreak: 'break-word',
    '& pre': {
        lineHeight: 1.5, // Developers like when the code is dense.
        margin: theme.spacing(2, 'auto'),
        padding: theme.spacing(2),
        backgroundColor: 'hsl(210, 25%, 9%)', // a special, one-off, color tailored for the code blocks using MUI's branding theme blue palette as the starting point. It has a less saturaded color but still maintaining a bit of the blue tint.
        color: 'hsl(60, 30%, 96%)',
        colorScheme: 'dark',
        borderRadius: `var(--tres-paylas-shape-borderRadius, ${theme.shape?.borderRadius ?? brandingTheme_1.brandingLightThemes.shape.borderRadius}px)`,
        border: '1px solid',
        borderColor: `var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[700]})`,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(13),
        maxHeight: '400px',
    },
    '& code': {
        ...brandingTheme_1.brandingLightThemes.typography.body2,
        fontFamily: brandingTheme_1.brandingLightThemes.typography.fontFamilyCode,
        fontWeight: 400,
        WebkitFontSmoothing: 'subpixel-antialiased',
    },
    '& pre > code': {
        // Reset for Safari
        // https://github.com/necolas/normalize.css/blob/master/normalize.css#L102
        fontSize: 'inherit',
    },
    // inline code block
    '& :not(pre) > code': {
        padding: '2px 4px',
        ...theme.applyDarkStyles({
            color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingDarkThemes.palette.text.primary})`,
            backgroundColor: `var(--tres-paylas-palette-grey-50, ${'transparent'})`,
            border: '1px solid',
            borderColor: `var(--tres-paylas-palette-grey-200, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[800]})`,
            borderRadius: 6,
            fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(13),
            boxDecorationBreak: 'clone',
        }),
        color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingLightThemes.palette.text.primary})`,
        backgroundColor: `var(--tres-paylas-palette-grey-50, ${'transparent'})`,
        border: '1px solid',
        borderColor: `var(--tres-paylas-palette-grey-200, ${brandingTheme_1.brandingLightThemes.palette.grey[200]})`,
        borderRadius: 6,
        fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(13),
        direction: 'ltr /*! @noflip */',
        boxDecorationBreak: 'clone',
    },
    '& h1': {
        ...brandingTheme_1.brandingLightThemes.typography.h3,
        fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(36),
        fontFamily: `"General Sans", ${brandingTheme_1.brandingLightThemes.typography.fontFamilySystem}`,
        margin: '10px 0',
        color: (0, styles_1.alpha)((brandingTheme_1.brandingDarkThemes.vars || theme).palette.primaryDark[700], 0.78),
        fontWeight: 600,
        letterSpacing: -0.2,
    },
    '& .description': {
        ...brandingTheme_1.brandingLightThemes.typography.subtitle1,
        fontWeight: 400,
        margin: '0 0 24px',
    },
    '& .component-tabs': {
        margin: '0 0 40px',
    },
    '& h2': {
        ...brandingTheme_1.brandingLightThemes.typography.h5,
        fontFamily: `"General Sans", ${brandingTheme_1.brandingLightThemes.typography.fontFamilySystem}`,
        fontSize: theme.typography.pxToRem(26),
        fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightSemiBold,
        color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.grey[900]})`,
        margin: '40px 0 4px',
    },
    '& h3': {
        ...brandingTheme_1.brandingLightThemes.typography.h6,
        fontFamily: `"General Sans", ${brandingTheme_1.brandingLightThemes.typography.fontFamilySystem}`,
        fontSize: theme.typography.pxToRem(20),
        fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightSemiBold,
        color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.grey[900]})`,
        margin: '24px 0 4px',
    },
    '& h4': {
        ...brandingTheme_1.brandingLightThemes.typography.subtitle1,
        fontFamily: `"General Sans", ${brandingTheme_1.brandingLightThemes.typography.fontFamilySystem}`,
        fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightSemiBold,
        color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.grey[900]})`,
        margin: '20px 0 6px',
    },
    '& h5': {
        ...brandingTheme_1.brandingLightThemes.typography.subtitle2,
        fontFamily: `"General Sans", ${brandingTheme_1.brandingLightThemes.typography.fontFamilySystem}`,
        fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightSemiBold,
        color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.grey[900]})`,
        margin: '20px 0 8px',
    },
    '& p': {
        marginTop: 0,
        marginBottom: 16,
        color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.grey[900]})`,
    },
    '& ul, & ol': {
        paddingLeft: 30,
        marginTop: 0,
        marginBottom: 16,
        '& ul, & ol': {
            marginBottom: 6,
        },
    },
    '& a[target="_blank"]::after': {
        content: '""',
        maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' focusable='false' aria-hidden='true' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z'%3E%3C/path%3E%3C/svg%3E")`,
        display: 'inline-flex',
        width: '1em',
        height: '1em',
        color: 'inherit',
        backgroundColor: 'currentColor',
        transform: 'translate(0, 2px)',
        transition: 'transform 0.3s cubic-bezier(0.1, 0.8, 0.3, 1)', // bounce effect
        opacity: 0.8,
    },
    '& a[target="_blank"]:hover::after': {
        opacity: 1,
        transform: 'translate(1px, 0)',
    },
    '& a.remove-link-arrow::after': {
        // Allows to remove link arrows for images
        display: 'none',
    },
    '& .ad.description a::after': {
        // Remove link arrow for ads
        display: 'none',
    },
    '& a': {
        // Style taken from the Link component
        color: `var(--tres-paylas-palette-primary-600, ${(0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.info[600], 0.99)})`,
        fontWeight: theme.typography.fontWeightMedium,
        textDecoration: 'underline',
        textDecorationColor: 'none',
        '&:hover': {
            fontStyle: 'italice',
            textDecorationColor: brandingTheme_1.brandingLightThemes.palette.error[300],
        },
    },
    '& a code': {
        color: (0, styles_1.darken)(brandingTheme_1.brandingLightThemes.palette.primary.main, 0.8),
    },
    '& h1, & h2, & h3, & h4': {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        '& code': {
            fontSize: 'inherit',
            lineHeight: 'inherit',
            // Remove scroll on small screens.
            wordBreak: 'break-all',
        },
        '& .title-link-to-anchor': {
            color: 'inherit',
            textDecoration: 'none',
            boxShadow: 'none',
            fontWeight: 'inherit',
            position: 'relative',
            userSelect: 'text',
        },
        '& .anchor-icon': {
            // To prevent the link to get the focus.
            display: 'inline-flex',
            alignItems: 'center',
            visibility: 'hidden',
        },
        '& .anchor-icon, & .comment-link': {
            padding: 0,
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            textAlign: 'center',
            marginLeft: 8,
            height: 26,
            width: 26,
            color: `var(--tres-paylas-palette-grey-600, ${brandingTheme_1.brandingLightThemes.palette.grey[600]})`,
            backgroundColor: 'transparent',
            border: '1px solid transparent',
            borderRadius: 8,
            transition: theme.transitions.create(['visibility', 'background-color', 'color', 'border-color'], {
                duration: theme.transitions.duration.shortest,
            }),
            '&:hover': {
                backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.primary[100], 0.4),
                borderColor: `var(--tres-paylas-palette-primary-100, ${brandingTheme_1.brandingLightThemes.palette.primary[100]})`,
                color: `var(--tres-paylas-palette-primary-main, ${brandingTheme_1.brandingLightThemes.palette.primary.main})`,
            },
            '& svg': {
                height: 14,
                width: 14,
                fill: 'currentColor',
                pointerEvents: 'none',
                verticalAlign: 'middle',
            },
        },
        '&:hover .anchor-icon': {
            visibility: 'visible',
        },
        '& .comment-link': {
            display: 'none', // So we can have the comment button opt-in.
            marginLeft: 'auto',
            transition: theme.transitions.create(['background-color', 'color', 'border-color'], {
                duration: theme.transitions.duration.shortest,
            }),
            '& svg': {
                fill: 'currentColor',
                marginRight: 1.5,
            },
        },
    },
    '& h1 code, & h2 code, & h3 code': {
        color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.grey[900]})`,
    },
    '& h1 code': {
        fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightSemiBold,
    },
    '& h2 code': {
        fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(24),
        fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightSemiBold,
    },
    '& h3 code': {
        fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(18),
    },
    '& table': {
        // Trade display table for scroll overflow
        display: 'block',
        wordBreak: 'normal',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderCollapse: 'collapse',
        marginBottom: '20px',
        borderSpacing: 0,
        '& .prop-name, & .prop-type, & .prop-default, & .slot-name, & .slot-defaultClass, & .slot-default': {
            fontWeight: 400,
            fontFamily: brandingTheme_1.brandingLightThemes.typography.fontFamilyCode,
            WebkitFontSmoothing: 'subpixel-antialiased',
            fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(13),
        },
        '& .required': {
            color: '#006500',
        },
        '& .optional': {
            color: '#45529f',
        },
        '& .prop-type, & .slot-defaultClass': {
            color: '#932981',
        },
        '& .prop-default, & .slot-default': {
            borderBottom: `1px dotted var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingLightThemes.palette.divider})`,
        },
    },
    '& td': {
        ...theme.typography.body2,
        borderBottom: `1px solid var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingLightThemes.palette.divider})`,
        paddingRight: 20,
        paddingTop: 16,
        paddingBottom: 16,
        color: `var(--tres-paylas-palette-text-secondary, ${brandingTheme_1.brandingLightThemes.palette.text.secondary})`,
    },
    '& td code': {
        lineHeight: 1.6,
    },
    '& th': {
        fontSize: theme.typography.pxToRem(14),
        lineHeight: theme.typography.pxToRem(24),
        fontWeight: 500,
        color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingLightThemes.palette.text.primary})`,
        whiteSpace: 'pre',
        borderBottom: `1px solid var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingLightThemes.palette.divider})`,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
    },
    '& blockquote': {
        position: 'relative',
        padding: '0 16px',
        margin: 0,
        borderLeft: '1.5px solid',
        borderColor: `var(--tres-paylas-palette-grey-200, ${brandingTheme_1.brandingLightThemes.palette.grey[200]})`,
        '& p': {
            fontSize: theme.typography.pxToRem(12.5),
            fontFamily: brandingTheme_1.brandingLightThemes.typography.fontFamilyCode,
            fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightMedium,
            lineHeight: theme.typography.pxToRem(24),
            textIndent: 20,
        },
        '&::before': {
            position: 'absolute',
            // eslint-disable-next-line material-ui/straight-quotes
            content: '"“"',
            color: `var(--tres-paylas-palette-grey-300, ${brandingTheme_1.brandingLightThemes.palette.grey[300]})`,
            fontSize: '2.5rem',
            top: 8,
            marginLeft: -6,
            lineHeight: 0.5,
        },
    },
    '& .MuiCallout-root': {
        display: 'flex',
        gap: '8px',
        padding: '12px',
        margin: '16px 0',
        border: '1px solid',
        color: `var(--tres-paylas-palette-text-secondary, ${brandingTheme_1.brandingLightThemes.palette.text.secondary})`,
        borderColor: `var(--tres-paylas-palette-grey-100, ${brandingTheme_1.brandingLightThemes.palette.grey[100]})`,
        borderRadius: `var(--tres-paylas-shape-borderRadius, ${theme.shape?.borderRadius ?? brandingTheme_1.brandingLightThemes.shape.borderRadius}px)`,
        '& .MuiCallout-content': {
            minWidth: 0, // Allows content to shrink. Useful when callout contains code block
            flexGrow: 1,
        },
        '& code': {
            height: 'fit-content',
            backgroundColor: `var(--tres-paylas-palette-grey-100, ${brandingTheme_1.brandingLightThemes.palette.grey[100]})`,
            borderColor: `var(--tres-paylas-palette-grey-300, ${brandingTheme_1.brandingLightThemes.palette.grey[300]})`,
        },
        '& p': {
            marginBottom: '8px',
            '& > p:last-child, & > ul:last-child': {
                // Avoid margin on last child
                marginBottom: 0,
            },
            '& > ul': {
                // Because of the gap left by the icon, we visually need less padding
                paddingLeft: 22,
            },
        },
        '& .MuiCode-root': {
            '& pre': {
                margin: '4px 0 0 0',
                borderRadius: '12px 12px 6px 12px',
                borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.primaryDark[600], 0.6),
                '& code': {
                    backgroundColor: 'transparent',
                },
            },
        },
        '& .MuiCallout-icon-container': {
            width: 26, // to match text's line-height
            height: 26,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            '& svg': {
                width: 18,
                height: 18,
            },
        },
        '& ul, & p': {
            '&:last-child': {
                margin: 0,
            },
        },
        '& ul, li, p': {
            color: 'inherit',
        },
        '&.MuiCallout-error': {
            color: `var(--tres-paylas-palette-error-900, ${brandingTheme_1.brandingLightThemes.palette.error[900]})`,
            backgroundColor: `var(--tres-paylas-palette-error-50, ${brandingTheme_1.brandingLightThemes.palette.error[50]})`,
            borderColor: `var(--tres-paylas-palette-error-100, ${brandingTheme_1.brandingLightThemes.palette.error[100]})`,
            '& strong': {
                color: `var(--tres-paylas-palette-error-800, ${brandingTheme_1.brandingLightThemes.palette.error[800]})`,
            },
            '& svg': {
                fill: `var(--tres-paylas-palette-error-500, ${brandingTheme_1.brandingLightThemes.palette.error[600]})`,
            },
            '& a': {
                color: `var(--tres-paylas-palette-error-800, ${brandingTheme_1.brandingLightThemes.palette.error[800]})`,
                textDecorationColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.error.main, 0.4),
                '&:hover': {
                    textDecorationColor: 'inherit',
                },
            },
        },
        '&.MuiCallout-info': {
            color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.grey[900]})`,
            backgroundColor: `var(--tres-paylas-palette-grey-50, ${brandingTheme_1.brandingLightThemes.palette.grey[50]})`,
            borderColor: `var(--tres-paylas-palette-grey-100, ${brandingTheme_1.brandingLightThemes.palette.grey[100]})`,
            '& strong': {
                color: `var(--tres-paylas-palette-primary-800, ${brandingTheme_1.brandingLightThemes.palette.primary[800]})`,
            },
            '& svg': {
                fill: `var(--tres-paylas-palette-grey-600, ${brandingTheme_1.brandingLightThemes.palette.grey[600]})`,
            },
        },
        '&.MuiCallout-success': {
            color: `var(--tres-paylas-palette-success-900, ${brandingTheme_1.brandingLightThemes.palette.success[900]})`,
            backgroundColor: `var(--tres-paylas-palette-success-50, ${brandingTheme_1.brandingLightThemes.palette.success[50]})`,
            borderColor: `var(--tres-paylas-palette-success-100, ${brandingTheme_1.brandingLightThemes.palette.success[100]})`,
            '& strong': {
                color: `var(--tres-paylas-palette-success-900, ${brandingTheme_1.brandingLightThemes.palette.success[900]})`,
            },
            '& svg': {
                fill: `var(--tres-paylas-palette-success-600, ${brandingTheme_1.brandingLightThemes.palette.success[600]})`,
            },
            '& a': {
                color: `var(--tres-paylas-palette-success-900, ${brandingTheme_1.brandingLightThemes.palette.success[900]})`,
                textDecorationColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.success.main, 0.4),
                '&:hover': {
                    textDecorationColor: 'inherit',
                },
            },
        },
        '&.MuiCallout-warning': {
            color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.grey[900]})`,
            backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.warning[50], 0.5),
            borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.warning[700], 0.15),
            '& strong': {
                color: `var(--tres-paylas-palette-warning-800, ${brandingTheme_1.brandingLightThemes.palette.warning[800]})`,
            },
            '& svg': {
                fill: `var(--tres-paylas-palette-warning-600, ${brandingTheme_1.brandingLightThemes.palette.warning[600]})`,
            },
            '& a': {
                color: `var(--tres-paylas-palette-warning-800, ${brandingTheme_1.brandingLightThemes.palette.warning[800]})`,
                textDecorationColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.warning.main, 0.4),
                '&:hover': {
                    textDecorationColor: 'inherit',
                },
            },
        },
    },
    '& img, & video': {
        // Use !important so that inline style on <img> or <video> can't win.
        // This avoid horizontal overflows on mobile.
        maxWidth: '100% !important',
        // Avoid the image to be fixed height, so it can respect the aspect ratio.
        height: 'auto',
    },
    '& img': {
        // Avoid layout jump
        display: 'inline-block',
        // Avoid very sharp edges
        borderRadius: 2,
    },
    '& hr': {
        height: 1,
        margin: theme.spacing(5, 0),
        border: 0,
        flexShrink: 0,
        backgroundColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingLightThemes.palette.divider})`,
    },
    '& kbd.key': {
        padding: 6,
        display: 'inline-block',
        whiteSpace: 'nowrap',
        margin: '0 1px',
        fontFamily: brandingTheme_1.brandingLightThemes.typography.fontFamilyCode,
        fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(11),
        color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingLightThemes.palette.text.primary})`,
        lineHeight: '10px',
        verticalAlign: 'middle',
        borderRadius: 6,
        border: `1px solid var(--tres-paylas-palette-grey-300, ${brandingTheme_1.brandingLightThemes.palette.grey[300]})`,
        backgroundColor: `var(--tres-paylas-palette-grey-50, ${brandingTheme_1.brandingLightThemes.palette.grey[50]})`,
        boxShadow: `inset 0 -2px 0 var(--tres-paylas-palette-grey-200, ${brandingTheme_1.brandingLightThemes.palette.grey[200]})`,
    },
    '& details': {
        width: '100%',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1.5),
        border: '1px solid',
        borderColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingLightThemes.palette.divider})`,
        borderRadius: `var(--tres-paylas-shape-borderRadius, ${theme.shape?.borderRadius ?? brandingTheme_1.brandingLightThemes.shape.borderRadius}px)`,
        '& pre': {
            marginTop: theme.spacing(1),
        },
    },
    '& summary': {
        cursor: 'pointer',
        padding: theme.spacing(1),
        borderRadius: 6,
        listStyleType: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: theme.transitions.create(['background'], {
            duration: theme.transitions.duration.shortest,
        }),
        ':after': {
            content: '""',
            maskImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6L8 10L12 6' stroke='black' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
            display: 'inline-flex',
            width: '1em',
            height: '1em',
            color: theme.palette.grey[400],
            backgroundColor: 'currentColor',
        },
        '&:hover': {
            backgroundColor: `var(--tres-paylas-palette-grey-100, ${brandingTheme_1.brandingLightThemes.palette.grey[300]})`,
        },
    },
    '& details[open] > summary::after': {
        content: '""',
        maskImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 10L8 6L4 10' stroke='black' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
    },
    '& .MuiCode-root': {
        direction: 'ltr /*! @noflip */',
        position: 'relative',
        // Font size reset to fix a bug with Safari 16.0 when letterSpacing is set
        fontSize: 10,
        '&:has(.MuiCode-title)': {
            margin: theme.spacing(2, 'auto'),
            border: `1px solid var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[700]})`,
            borderRadius: theme.shape.borderRadius,
            overflow: 'clip',
            '& .MuiCode-copy': {
                top: '56px',
            },
        },
    },
    '& .MuiCode-copy-container': {
        // This container is only used in demo and highlight code
        position: 'sticky',
        zIndex: 1,
        top: 0,
    },
    '& .MuiCode-copy': {
        cursor: 'pointer',
        position: 'absolute',
        top: 12,
        right: 12,
        display: 'inline-flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: theme.spacing(0.5),
        paddingBottom: '5px', // optical alignment
        fontFamily: brandingTheme_1.brandingLightThemes.typography.fontFamily,
        fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightMedium,
        fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(12),
        borderRadius: 6,
        border: '1px solid',
        borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.primaryDark[600], 0.5),
        backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.primaryDark[800], 0.5),
        color: `var(--tres-paylas-palette-grey-300, ${brandingTheme_1.brandingLightThemes.palette.grey[300]})`,
        transition: theme.transitions.create(['background', 'borderColor', 'display'], {
            duration: theme.transitions.duration.shortest,
        }),
        '@media (max-width: 640px)': {
            display: 'none',
        },
        '& .MuiCode-copied-label': {
            display: 'none',
        },
        '&:hover, &:focus': {
            borderColor: `var(--tres-paylas-palette-primaryDark-400, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[400]})`,
            backgroundColor: `var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[700]})`,
            color: '#FFF',
            '& .MuiCode-copyKeypress': {
                display: 'block',
                // Approximate no hover capabilities with no keyboard
                // https://github.com/w3c/csswg-drafts/issues/3871
                '@media (any-hover: none)': {
                    display: 'none',
                },
            },
        },
        '& .MuiCode-copyKeypress': {
            display: 'none',
            position: 'absolute',
            right: 34,
        },
        '&[data-copied]': {
            borderColor: `var(--tres-paylas-palette-primaryDark-400, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[400]})`,
            backgroundColor: `var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[700]})`,
            color: '#fff',
            '& .MuiCode-copyKeypress': {
                opacity: 0,
            },
            '& .MuiCode-copy-label': {
                display: 'none',
            },
            '& .MuiCode-copied-label': {
                display: 'block',
            },
        },
    },
    '& .MuiCode-copyKeypress': {
        pointerEvents: 'none',
        userSelect: 'none',
        marginRight: theme.spacing(1.2),
        marginBottom: theme.spacing(0.2),
        whiteSpace: 'nowrap',
        opacity: 0.6,
    },
    '& li': {
        // tight lists https://spec.commonmark.org/0.30/#tight
        marginBottom: 4,
        '& pre': {
            marginTop: theme.spacing(1),
        },
        // loose lists https://spec.commonmark.org/0.30/#loose
        '& > p': {
            marginBottom: theme.spacing(1),
        },
    },
    '& .feature-list': {
        padding: 0,
        listStyle: 'none',
        '& li': {
            marginBottom: 6,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            '::before': {
                content: `url('/yes-light.svg')`,
                width: '18px',
                height: '18px',
            },
        },
    },
    '& .MuiCode-title': {
        padding: theme.spacing(1.5),
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1.5),
        borderBottom: `1px solid var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[700]})`,
        backgroundColor: `var(--tres-paylas-palette-primaryDark-900, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[900]})`,
        fontFamily: theme.typography.fontFamilyCode,
        fontSize: theme.typography.pxToRem(12),
        fontWeight: theme.typography.fontWeightBold,
        color: `var(--tres-paylas-palette-grey-200, ${brandingTheme_1.brandingLightThemes.palette.grey[200]})`,
        '::before': {
            content: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.3333 3.99996H8L7.06 3.05996C6.80667 2.80663 6.46667 2.66663 6.11334 2.66663H2.66667C1.93334 2.66663 1.34 3.26663 1.34 3.99996L1.33334 12C1.33334 12.7333 1.93334 13.3333 2.66667 13.3333H13.3333C14.0667 13.3333 14.6667 12.7333 14.6667 12V5.33329C14.6667 4.59996 14.0667 3.99996 13.3333 3.99996ZM12.6667 12H3.33334C2.96667 12 2.66667 11.7 2.66667 11.3333V5.99996C2.66667 5.63329 2.96667 5.33329 3.33334 5.33329H12.6667C13.0333 5.33329 13.3333 5.63329 13.3333 5.99996V11.3333C13.3333 11.7 13.0333 12 12.6667 12Z' fill='%2399CCF3'/%3E%3C/svg%3E%0A");`,
            width: '16px',
            height: '16px',
        },
        '& + pre': {
            margin: 0,
            border: 'none',
            borderRadius: 0,
        },
    },
    /************************************************************************************* */
    ...theme.applyDarkStyles({
        ...brandingTheme_1.brandingLightThemes.typography.body1,
        lineHeight: 1.625, // Rounds up to 26px－increased compared to the 1.5 default to make the docs easier to read.
        color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingLightThemes.palette.text.tertiary})`,
        '& :focus-visible': {
            outline: `3px solid ${(0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.primary[500], 0.5)}`,
            outlineOffset: 2,
        },
        '& strong': {
            color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingLightThemes.palette.grey[100]})`,
        },
        wordBreak: 'break-word',
        '& pre': {
            lineHeight: 1.5, // Developers like when the code is dense.
            margin: theme.spacing(2, 'auto'),
            padding: theme.spacing(2),
            backgroundColor: 'hsl(327, 47.60%, 8.20%)', // a special, one-off, color tailored for the code blocks using MUI's branding theme blue palette as the starting point. It has a less saturaded color but still maintaining a bit of the blue tint.
            color: 'hsl(213, 7.40%, 76.30%)',
            colorScheme: 'light',
            borderRadius: `var(--tres-paylas-shape-borderRadius, ${theme.shape?.borderRadius ?? brandingTheme_1.brandingLightThemes.shape.borderRadius}px)`,
            border: '1px solid',
            borderColor: `var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[700]})`,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(13),
            maxHeight: '400px',
        },
        '& code': {
            ...brandingTheme_1.brandingLightThemes.typography.body2,
            fontFamily: brandingTheme_1.brandingLightThemes.typography.fontFamilyCode,
            fontWeight: 400,
            WebkitFontSmoothing: 'subpixel-antialiased',
        },
        '& pre > code': {
            // Reset for Safari
            // https://github.com/necolas/normalize.css/blob/master/normalize.css#L102
            fontSize: 'inherit',
        },
        // inline code block
        '& :not(pre) > code': {
            padding: '2px 4px',
            color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingLightThemes.palette.common.white})`,
            backgroundColor: `var(--tres-paylas-palette-grey-50, ${'transparent'})`,
            border: '1px solid',
            borderColor: `var(--tres-paylas-palette-grey-200, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[800]})`,
            borderRadius: 6,
            fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(13),
            boxDecorationBreak: 'clone',
            direction: 'ltr /*! @noflip */',
        },
        '& h1': {
            ...brandingTheme_1.brandingLightThemes.typography.h3,
            fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(36),
            fontFamily: `"General Sans", ${brandingTheme_1.brandingLightThemes.typography.fontFamilySystem}`,
            margin: '10px 0',
            color: (0, styles_1.alpha)((brandingTheme_1.brandingDarkThemes.vars || theme).palette.success[700], 0.7),
            fontWeight: theme.typography.fontWeightExtraBold,
            letterSpacing: -0.2,
        },
        '& .description': {
            ...brandingTheme_1.brandingLightThemes.typography.subtitle1,
            fontWeight: 400,
            margin: '0 0 24px',
        },
        '& .component-tabs': {
            margin: '0 0 40px',
        },
        '& h2': {
            ...brandingTheme_1.brandingLightThemes.typography.h5,
            fontFamily: `"General Sans", ${brandingTheme_1.brandingLightThemes.typography.fontFamilySystem}`,
            fontSize: theme.typography.pxToRem(26),
            fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightSemiBold,
            color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.success[700]})`,
            margin: '40px 0 4px',
        },
        '& h3': {
            ...brandingTheme_1.brandingLightThemes.typography.h6,
            fontFamily: `"General Sans", ${brandingTheme_1.brandingLightThemes.typography.fontFamilySystem}`,
            fontSize: theme.typography.pxToRem(20),
            fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightSemiBold,
            color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.success[700]})`,
            margin: '24px 0 4px',
        },
        '& h4': {
            ...brandingTheme_1.brandingLightThemes.typography.subtitle1,
            fontFamily: `"General Sans", ${brandingTheme_1.brandingLightThemes.typography.fontFamilySystem}`,
            fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightSemiBold,
            color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.success[700]})`,
            margin: '20px 0 6px',
        },
        '& h5': {
            ...brandingTheme_1.brandingLightThemes.typography.subtitle2,
            fontFamily: `"General Sans", ${brandingTheme_1.brandingLightThemes.typography.fontFamilySystem}`,
            fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightSemiBold,
            color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.success[700]})`,
            margin: '20px 0 8px',
        },
        '& p': {
            marginTop: 0,
            marginBottom: 16,
            color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.common.white})`,
        },
        '& ul, & ol': {
            paddingLeft: 30,
            marginTop: 0,
            marginBottom: 16,
            '& ul, & ol': {
                marginBottom: 6,
            },
        },
        '& a[target="_blank"]::after': {
            content: '""',
            maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' focusable='false' aria-hidden='true' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z'%3E%3C/path%3E%3C/svg%3E")`,
            display: 'inline-flex',
            width: '1em',
            height: '1em',
            color: 'inherit',
            backgroundColor: 'currentColor',
            transform: 'translate(0, 2px)',
            transition: 'transform 0.3s cubic-bezier(0.1, 0.8, 0.3, 1)', // bounce effect
            opacity: 0.8,
        },
        '& a[target="_blank"]:hover::after': {
            opacity: 1,
            transform: 'translate(1px, 0)',
        },
        '& a.remove-link-arrow::after': {
            // Allows to remove link arrows for images
            display: 'none',
        },
        '& .ad.description a::after': {
            // Remove link arrow for ads
            display: 'none',
        },
        '& a': {
            // Style taken from the Link component
            color: `var(--tres-paylas-palette-primary-600, ${brandingTheme_1.brandingLightThemes.palette.info[700]})`,
            fontWeight: theme.typography.fontWeightMedium,
            textDecoration: 'underline',
            textDecorationColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.primary.main, 0.4),
            '&:hover': {
                textDecorationColor: theme.palette.info[900],
            },
        },
        '& a code': {
            color: (0, styles_1.darken)(brandingTheme_1.brandingLightThemes.palette.grey[800], 0.9),
        },
        '& h1, & h2, & h3, & h4': {
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            '& code': {
                fontSize: 'inherit',
                lineHeight: 'inherit',
                // Remove scroll on small screens.
                wordBreak: 'break-all',
            },
            '& .title-link-to-anchor': {
                color: theme.palette.success.dark,
                textDecoration: 'none',
                boxShadow: 'none',
                fontWeight: 'inherit',
                position: 'relative',
                userSelect: 'text',
            },
            '& .anchor-icon': {
                // To prevent the link to get the focus.
                display: 'inline-flex',
                alignItems: 'center',
                visibility: 'hidden',
            },
            '& .anchor-icon, & .comment-link': {
                padding: 0,
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                textAlign: 'center',
                marginLeft: 8,
                height: 26,
                width: 26,
                color: `var(--tres-paylas-palette-grey-600, ${brandingTheme_1.brandingLightThemes.palette.grey[600]})`,
                backgroundColor: 'transparent',
                border: '1px solid transparent',
                borderRadius: 8,
                transition: theme.transitions.create(['visibility', 'background-color', 'color', 'border-color'], {
                    duration: theme.transitions.duration.shortest,
                }),
                '&:hover': {
                    backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.primary[700], 0.7),
                    borderColor: `var(--tres-paylas-palette-primary-100, ${brandingTheme_1.brandingDarkThemes.palette.primary[400]})`,
                    color: `var(--tres-paylas-palette-primary-main, ${brandingTheme_1.brandingDarkThemes.palette.primary.main})`,
                },
                '& svg': {
                    height: 14,
                    width: 14,
                    fill: 'currentColor',
                    pointerEvents: 'none',
                    verticalAlign: 'middle',
                },
            },
            '&:hover .anchor-icon': {
                visibility: 'visible',
            },
            '& .comment-link': {
                display: 'none', // So we can have the comment button opt-in.
                marginLeft: 'auto',
                transition: theme.transitions.create(['background-color', 'color', 'border-color'], {
                    duration: theme.transitions.duration.shortest,
                }),
                '& svg': {
                    fill: 'currentColor',
                    marginRight: 1.5,
                },
            },
        },
        '& h1 code, & h2 code, & h3 code': {
            color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.success[700]})`,
        },
        '& h1 code': {
            fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightSemiBold,
        },
        '& h2 code': {
            fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(24),
            fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightSemiBold,
        },
        '& h3 code': {
            fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(18),
        },
        '& table': {
            // Trade display table for scroll overflow
            display: 'block',
            wordBreak: 'normal',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderCollapse: 'collapse',
            marginBottom: '20px',
            borderSpacing: 0,
            '& .prop-name, & .prop-type, & .prop-default, & .slot-name, & .slot-defaultClass, & .slot-default': {
                fontWeight: 400,
                fontFamily: brandingTheme_1.brandingLightThemes.typography.fontFamilyCode,
                WebkitFontSmoothing: 'subpixel-antialiased',
                fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(13),
            },
            '& .required': {
                color: '#006500',
            },
            '& .optional': {
                color: '#45529f',
            },
            '& .prop-type, & .slot-defaultClass': {
                color: '#932981',
            },
            '& .prop-default, & .slot-default': {
                borderBottom: `1px dotted var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingLightThemes.palette.divider})`,
            },
        },
        '& td': {
            ...theme.typography.body2,
            borderBottom: `1px solid var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingLightThemes.palette.divider})`,
            paddingRight: 20,
            paddingTop: 16,
            paddingBottom: 16,
            color: `var(--tres-paylas-palette-text-secondary, ${brandingTheme_1.brandingLightThemes.palette.text.secondary})`,
        },
        '& td code': {
            lineHeight: 1.6,
        },
        '& th': {
            fontSize: theme.typography.pxToRem(14),
            lineHeight: theme.typography.pxToRem(24),
            fontWeight: 500,
            color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingLightThemes.palette.text.primary})`,
            whiteSpace: 'pre',
            borderBottom: `1px solid var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingLightThemes.palette.divider})`,
            paddingRight: 20,
            paddingTop: 12,
            paddingBottom: 12,
        },
        '& blockquote': {
            position: 'relative',
            padding: '0 16px',
            margin: 0,
            borderLeft: '1.5px solid',
            borderColor: `var(--tres-paylas-palette-grey-200, ${brandingTheme_1.brandingLightThemes.palette.grey[200]})`,
            '& p': {
                fontSize: theme.typography.pxToRem(12.5),
                fontFamily: brandingTheme_1.brandingLightThemes.typography.fontFamilyCode,
                fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightMedium,
                lineHeight: theme.typography.pxToRem(24),
                textIndent: 20,
            },
            '&::before': {
                position: 'absolute',
                // eslint-disable-next-line material-ui/straight-quotes
                content: '"“"',
                color: `var(--tres-paylas-palette-grey-300, ${brandingTheme_1.brandingLightThemes.palette.grey[300]})`,
                fontSize: '2.5rem',
                top: 8,
                marginLeft: -6,
                lineHeight: 0.5,
            },
        },
        '& .MuiCallout-root': {
            display: 'flex',
            gap: '8px',
            padding: '12px',
            margin: '16px 0',
            border: '1px solid',
            color: `var(--tres-paylas-palette-text-secondary, ${brandingTheme_1.brandingLightThemes.palette.text.secondary})`,
            borderColor: `var(--tres-paylas-palette-grey-100, ${brandingTheme_1.brandingLightThemes.palette.grey[100]})`,
            borderRadius: `var(--tres-paylas-shape-borderRadius, ${theme.shape?.borderRadius ?? brandingTheme_1.brandingLightThemes.shape.borderRadius}px)`,
            '& .MuiCallout-content': {
                minWidth: 0, // Allows content to shrink. Useful when callout contains code block
                flexGrow: 1,
            },
            '& code': {
                height: 'fit-content',
                backgroundColor: `var(--tres-paylas-palette-grey-100, ${brandingTheme_1.brandingLightThemes.palette.grey[400]})`,
                borderColor: `var(--tres-paylas-palette-grey-300, ${brandingTheme_1.brandingLightThemes.palette.grey[300]})`,
            },
            '& p': {
                marginBottom: '8px',
                '& > p:last-child, & > ul:last-child': {
                    // Avoid margin on last child
                    marginBottom: 0,
                },
                '& > ul': {
                    // Because of the gap left by the icon, we visually need less padding
                    paddingLeft: 22,
                },
            },
            '& .MuiCode-root': {
                '& pre': {
                    margin: '4px 0 0 0',
                    borderRadius: '12px 12px 6px 12px',
                    borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.primaryDark[600], 0.6),
                    '& code': {
                        backgroundColor: 'transparent',
                    },
                },
            },
            '& .MuiCallout-icon-container': {
                width: 26, // to match text's line-height
                height: 26,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                '& svg': {
                    width: 18,
                    height: 18,
                },
            },
            '& ul, & p': {
                '&:last-child': {
                    margin: 0,
                },
            },
            '& ul, li, p': {
                color: theme.palette.grey[100],
            },
            '&.MuiCallout-error': {
                color: `var(--tres-paylas-palette-error-900, ${brandingTheme_1.brandingLightThemes.palette.error[900]})`,
                backgroundColor: `var(--tres-paylas-palette-error-50, ${brandingTheme_1.brandingLightThemes.palette.error[50]})`,
                borderColor: `var(--tres-paylas-palette-error-100, ${brandingTheme_1.brandingLightThemes.palette.error[100]})`,
                '& strong': {
                    color: `var(--tres-paylas-palette-error-800, ${brandingTheme_1.brandingLightThemes.palette.error[800]})`,
                },
                '& svg': {
                    fill: `var(--tres-paylas-palette-error-500, ${brandingTheme_1.brandingLightThemes.palette.error[600]})`,
                },
                '& a': {
                    color: `var(--tres-paylas-palette-error-800, ${brandingTheme_1.brandingLightThemes.palette.error[800]})`,
                    textDecorationColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.error.main, 0.4),
                    '&:hover': {
                        textDecorationColor: 'inherit',
                    },
                },
            },
            '&.MuiCallout-info': {
                color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.grey[900]})`,
                backgroundColor: `var(--tres-paylas-palette-grey-50, ${brandingTheme_1.brandingLightThemes.palette.grey[50]})`,
                borderColor: `var(--tres-paylas-palette-grey-100, ${brandingTheme_1.brandingLightThemes.palette.grey[100]})`,
                '& strong': {
                    color: `var(--tres-paylas-palette-primary-800, ${brandingTheme_1.brandingLightThemes.palette.primary[800]})`,
                },
                '& svg': {
                    fill: `var(--tres-paylas-palette-grey-600, ${brandingTheme_1.brandingLightThemes.palette.grey[600]})`,
                },
            },
            '&.MuiCallout-success': {
                color: `var(--tres-paylas-palette-success-900, ${brandingTheme_1.brandingLightThemes.palette.success[900]})`,
                backgroundColor: `var(--tres-paylas-palette-success-50, ${brandingTheme_1.brandingLightThemes.palette.success[50]})`,
                borderColor: `var(--tres-paylas-palette-success-100, ${brandingTheme_1.brandingLightThemes.palette.success[100]})`,
                '& strong': {
                    color: `var(--tres-paylas-palette-success-900, ${brandingTheme_1.brandingLightThemes.palette.success[900]})`,
                },
                '& svg': {
                    fill: `var(--tres-paylas-palette-success-600, ${brandingTheme_1.brandingLightThemes.palette.success[600]})`,
                },
                '& a': {
                    color: `var(--tres-paylas-palette-success-900, ${brandingTheme_1.brandingLightThemes.palette.success[900]})`,
                    textDecorationColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.success.main, 0.4),
                    '&:hover': {
                        textDecorationColor: 'inherit',
                    },
                },
            },
            '&.MuiCallout-warning': {
                color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingLightThemes.palette.grey[900]})`,
                backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.warning[50], 0.5),
                borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.warning[700], 0.15),
                '& strong': {
                    color: `var(--tres-paylas-palette-warning-800, ${brandingTheme_1.brandingLightThemes.palette.warning[800]})`,
                },
                '& svg': {
                    fill: `var(--tres-paylas-palette-warning-600, ${brandingTheme_1.brandingLightThemes.palette.warning[600]})`,
                },
                '& a': {
                    color: `var(--tres-paylas-palette-warning-800, ${brandingTheme_1.brandingLightThemes.palette.warning[800]})`,
                    textDecorationColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.warning.main, 0.4),
                    '&:hover': {
                        textDecorationColor: 'inherit',
                    },
                },
            },
        },
        '& img, & video': {
            // Use !important so that inline style on <img> or <video> can't win.
            // This avoid horizontal overflows on mobile.
            maxWidth: '100% !important',
            // Avoid the image to be fixed height, so it can respect the aspect ratio.
            height: 'auto',
        },
        '& img': {
            // Avoid layout jump
            display: 'inline-block',
            // Avoid very sharp edges
            borderRadius: 2,
        },
        '& hr': {
            height: 1,
            margin: theme.spacing(5, 0),
            border: 0,
            flexShrink: 0,
            backgroundColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingLightThemes.palette.divider})`,
        },
        '& kbd.key': {
            padding: 6,
            display: 'inline-block',
            whiteSpace: 'nowrap',
            margin: '0 1px',
            fontFamily: brandingTheme_1.brandingLightThemes.typography.fontFamilyCode,
            fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(11),
            color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingLightThemes.palette.text.primary})`,
            lineHeight: '10px',
            verticalAlign: 'middle',
            borderRadius: 6,
            border: `1px solid var(--tres-paylas-palette-grey-300, ${brandingTheme_1.brandingLightThemes.palette.grey[300]})`,
            backgroundColor: `var(--tres-paylas-palette-grey-50, ${brandingTheme_1.brandingLightThemes.palette.grey[500]})`,
            boxShadow: `inset 0 -2px 0 var(--tres-paylas-palette-grey-200, ${brandingTheme_1.brandingLightThemes.palette.grey[200]})`,
        },
        '& details': {
            width: '100%',
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1.5),
            border: '1px solid',
            borderColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingLightThemes.palette.divider})`,
            borderRadius: `var(--tres-paylas-shape-borderRadius, ${theme.shape?.borderRadius ?? brandingTheme_1.brandingLightThemes.shape.borderRadius}px)`,
            '& pre': {
                marginTop: theme.spacing(1),
            },
        },
        '& summary': {
            cursor: 'pointer',
            padding: theme.spacing(1),
            borderRadius: 6,
            listStyleType: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: theme.transitions.create(['background'], {
                duration: theme.transitions.duration.shortest,
            }),
            ':after': {
                content: '""',
                maskImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6L8 10L12 6' stroke='black' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
                display: 'inline-flex',
                width: '1em',
                height: '1em',
                color: theme.palette.common.white,
                backgroundColor: theme.palette.grey[900],
            },
            '&:hover': {
                backgroundColor: `var(--tres-paylas-palette-grey-100, ${brandingTheme_1.brandingLightThemes.palette.grey[900]})`,
            },
        },
        '& details[open] > summary::after': {
            content: '""',
            maskImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 10L8 6L4 10' stroke='black' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
        },
        '& .MuiCode-root': {
            direction: 'ltr /*! @noflip */',
            position: 'relative',
            // Font size reset to fix a bug with Safari 16.0 when letterSpacing is set
            fontSize: 10,
            '&:has(.MuiCode-title)': {
                margin: theme.spacing(2, 'auto'),
                border: `1px solid var(--tres-paylas-palette-grey-700, ${brandingTheme_1.brandingLightThemes.palette.grey[700]})`,
                borderRadius: theme.shape.borderRadius,
                overflow: 'clip',
                '& .MuiCode-copy': {
                    top: '56px',
                },
            },
        },
        '& .MuiCode-copy-container': {
            // This container is only used in demo and highlight code
            position: 'sticky',
            zIndex: 1,
            top: 0,
        },
        '& .MuiCode-copy': {
            cursor: 'pointer',
            position: 'absolute',
            top: 12,
            right: 12,
            display: 'inline-flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            padding: theme.spacing(0.5),
            paddingBottom: '5px', // optical alignment
            fontFamily: brandingTheme_1.brandingLightThemes.typography.fontFamily,
            fontWeight: brandingTheme_1.brandingLightThemes.typography.fontWeightMedium,
            fontSize: brandingTheme_1.brandingLightThemes.typography.pxToRem(12),
            borderRadius: 6,
            border: '1px solid',
            borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.primaryDark[600], 0.5),
            backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.primaryDark[800], 0.5),
            color: `var(--tres-paylas-palette-grey-300, ${brandingTheme_1.brandingLightThemes.palette.grey[300]})`,
            transition: theme.transitions.create(['background', 'borderColor', 'display'], {
                duration: theme.transitions.duration.shortest,
            }),
            '@media (max-width: 640px)': {
                display: 'none',
            },
            '& .MuiCode-copied-label': {
                display: 'none',
            },
            '&:hover, &:focus': {
                borderColor: `var(--tres-paylas-palette-primaryDark-400, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[400]})`,
                backgroundColor: `var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[700]})`,
                color: '#FFF',
                '& .MuiCode-copyKeypress': {
                    display: 'block',
                    // Approximate no hover capabilities with no keyboard
                    // https://github.com/w3c/csswg-drafts/issues/3871
                    '@media (any-hover: none)': {
                        display: 'none',
                    },
                },
            },
            '& .MuiCode-copyKeypress': {
                display: 'none',
                position: 'absolute',
                right: 34,
            },
            '&[data-copied]': {
                borderColor: `var(--tres-paylas-palette-primaryDark-400, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[400]})`,
                backgroundColor: `var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[700]})`,
                color: '#fff',
                '& .MuiCode-copyKeypress': {
                    opacity: 0,
                },
                '& .MuiCode-copy-label': {
                    display: 'none',
                },
                '& .MuiCode-copied-label': {
                    display: 'block',
                },
            },
        },
        '& .MuiCode-copyKeypress': {
            pointerEvents: 'none',
            userSelect: 'none',
            marginRight: theme.spacing(1.2),
            marginBottom: theme.spacing(0.2),
            whiteSpace: 'nowrap',
            opacity: 0.6,
        },
        '& li': {
            // tight lists https://spec.commonmark.org/0.30/#tight
            marginBottom: 4,
            '& pre': {
                marginTop: theme.spacing(1),
            },
            // loose lists https://spec.commonmark.org/0.30/#loose
            '& > p': {
                marginBottom: theme.spacing(1),
            },
        },
        '& .feature-list': {
            padding: 0,
            listStyle: 'none',
            '& li': {
                marginBottom: 6,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                '::before': {
                    content: `url('/yes-light.svg')`,
                    width: '18px',
                    height: '18px',
                },
            },
        },
        '& .MuiCode-title': {
            padding: theme.spacing(1.5),
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(1.5),
            borderBottom: `1px solid var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[700]})`,
            backgroundColor: `var(--tres-paylas-palette-primaryDark-900, ${brandingTheme_1.brandingLightThemes.palette.primaryDark[900]})`,
            fontFamily: theme.typography.fontFamilyCode,
            fontSize: theme.typography.pxToRem(12),
            fontWeight: theme.typography.fontWeightBold,
            color: `var(--tres-paylas-palette-grey-500, ${brandingTheme_1.brandingLightThemes.palette.grey[500]})`,
            '::before': {
                content: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.3333 3.99996H8L7.06 3.05996C6.80667 2.80663 6.46667 2.66663 6.11334 2.66663H2.66667C1.93334 2.66663 1.34 3.26663 1.34 3.99996L1.33334 12C1.33334 12.7333 1.93334 13.3333 2.66667 13.3333H13.3333C14.0667 13.3333 14.6667 12.7333 14.6667 12V5.33329C14.6667 4.59996 14.0667 3.99996 13.3333 3.99996ZM12.6667 12H3.33334C2.96667 12 2.66667 11.7 2.66667 11.3333V5.99996C2.66667 5.63329 2.96667 5.33329 3.33334 5.33329H12.6667C13.0333 5.33329 13.3333 5.63329 13.3333 5.99996V11.3333C13.3333 11.7 13.0333 12 12.6667 12Z' fill='%2399CCF3'/%3E%3C/svg%3E%0A");`,
                width: '16px',
                height: '16px',
            },
            '& + pre': {
                margin: 0,
                border: 'none',
                borderRadius: 0,
            },
        },
    }),
}), ({ theme }) => ({
    [`:where(${theme.vars ? '[data-mui-color-scheme="dark"]' : '.mode-dark'}) &`]: {
        color: 'rgb(255, 255, 255)',
        '& :not(pre) > code': {
            // inline code block
            color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingDarkThemes.palette.text.primary})`,
            borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.primaryDark[600], 0.6),
            backgroundColor: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingDarkThemes.palette.grey[900]})`,
        },
        '& strong': {
            color: `var(--tres-paylas-palette-grey-200, ${brandingTheme_1.brandingDarkThemes.palette.grey[200]})`,
        },
        '& hr': {
            backgroundColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingDarkThemes.palette.divider})`,
        },
        '& a': {
            color: `var(--tres-paylas-palette-primary-300, ${brandingTheme_1.brandingDarkThemes.palette.primary[300]})`,
        },
        '& a code': {
            color: `var(--tres-paylas-palette-primary-light, ${brandingTheme_1.brandingDarkThemes.palette.primary.light})`,
        },
        '& h1, & h2, & h3, & h4, & h5': {
            color: `var(--tres-paylas-palette-grey-50, ${brandingTheme_1.brandingDarkThemes.palette.grey[50]})`,
            '& .anchor-icon, & .comment-link': {
                color: `var(--tres-paylas-palette-primary-300, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[400]})`,
                '&:hover': {
                    color: `var(--tres-paylas-palette-primary-100, ${brandingTheme_1.brandingDarkThemes.palette.primary[100]})`,
                    borderColor: `var(--tres-paylas-palette-primary-900, ${brandingTheme_1.brandingDarkThemes.palette.primary[900]})`,
                    backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.primary[900], 0.6),
                },
            },
        },
        '& p, & ul, & ol': {
            color: `var(--tres-paylas-palette-grey-400, ${brandingTheme_1.brandingDarkThemes.palette.grey[400]})`,
        },
        '& h1 code, & h2 code, & h3 code': {
            color: `var(--tres-paylas-palette-grey-100, ${brandingTheme_1.brandingDarkThemes.palette.grey[100]})`,
        },
        '& table': {
            '& .required': {
                color: '#a5ffa5',
            },
            '& .optional': {
                color: '#a5b3ff',
            },
            '& .prop-type, & .slot-defaultClass': {
                color: '#ffb6ec',
            },
            '& .prop-default, & .slot-default': {
                borderColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingDarkThemes.palette.divider})`,
            },
        },
        '& td': {
            color: `var(--tres-paylas-palette-text-secondary, ${brandingTheme_1.brandingDarkThemes.palette.text.secondary})`,
            borderColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingDarkThemes.palette.divider})`,
        },
        '& th': {
            color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingDarkThemes.palette.text.primary})`,
            borderColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingDarkThemes.palette.divider})`,
        },
        '& blockquote': {
            borderColor: `var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[700]})`,
            '&::before': {
                color: `var(--tres-paylas-palette-primaryDark-500, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[500]})`,
            },
        },
        '& .MuiCallout-root': {
            borderColor: `var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[700]})`,
            '& code': {
                backgroundColor: `var(--tres-paylas-palette-primaryDark-600, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[600]})`,
                borderColor: `var(--tres-paylas-palette-primaryDark-500, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[500]})`,
            },
            '&.MuiCallout-error': {
                color: `var(--tres-paylas-palette-error-50, ${brandingTheme_1.brandingDarkThemes.palette.error[50]})`,
                backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.error[700], 0.15),
                borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.error[400], 0.1),
                '& strong': {
                    color: `var(--tres-paylas-palette-error-300, ${brandingTheme_1.brandingDarkThemes.palette.error[300]})`,
                },
                '& svg': {
                    fill: `var(--tres-paylas-palette-error-500, ${brandingTheme_1.brandingDarkThemes.palette.error[500]})`,
                },
                '& a': {
                    color: `var(--tres-paylas-palette-error-200, ${brandingTheme_1.brandingDarkThemes.palette.error[200]})`,
                },
            },
            '&.MuiCallout-info': {
                color: `var(--tres-paylas-palette-grey-50, ${brandingTheme_1.brandingDarkThemes.palette.grey[50]})`,
                backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.grey[700], 0.15),
                borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.grey[800], 0.5),
                '& strong': {
                    color: `var(--tres-paylas-palette-primary-200, ${brandingTheme_1.brandingDarkThemes.palette.primary[200]})`,
                },
                '& svg': {
                    fill: `var(--tres-paylas-palette-grey-400, ${brandingTheme_1.brandingDarkThemes.palette.grey[400]})`,
                },
            },
            '&.MuiCallout-success': {
                color: `var(--tres-paylas-palette-success-50, ${brandingTheme_1.brandingDarkThemes.palette.success[50]})`,
                backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.success[700], 0.12),
                borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.success[400], 0.1),
                '& strong': {
                    color: `var(--tres-paylas-palette-success-200, ${brandingTheme_1.brandingDarkThemes.palette.success[200]})`,
                },
                '& svg': {
                    fill: `var(--tres-paylas-palette-success-500, ${brandingTheme_1.brandingDarkThemes.palette.success[500]})`,
                },
                '& a': {
                    color: `var(--tres-paylas-palette-success-100, ${brandingTheme_1.brandingDarkThemes.palette.success[100]})`,
                },
            },
            '&.MuiCallout-warning': {
                color: `var(--tres-paylas-palette-warning-50, ${brandingTheme_1.brandingDarkThemes.palette.warning[50]})`,
                backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.warning[700], 0.12),
                borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.warning[400], 0.1),
                '& strong': {
                    color: `var(--tres-paylas-palette-warning-200, ${brandingTheme_1.brandingDarkThemes.palette.warning[200]})`,
                },
                '& svg': {
                    fill: `var(--tres-paylas-palette-warning-400, ${brandingTheme_1.brandingDarkThemes.palette.warning[400]})`,
                },
                '& a': {
                    color: `var(--tres-paylas-palette-warning-100, ${brandingTheme_1.brandingDarkThemes.palette.warning[100]})`,
                },
            },
        },
        '& kbd.key': {
            color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingDarkThemes.palette.text.primary})`,
            backgroundColor: `var(--tres-paylas-palette-primaryDark-800, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[800]})`,
            border: `1px solid var(--tres-paylas-palette-primaryDark-600, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[600]})`,
            boxShadow: `inset 0 -2px 0 var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[700]})`,
        },
        '& details': {
            borderColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingDarkThemes.palette.divider})`,
        },
        '& summary': {
            '&:hover': {
                backgroundColor: `var(--tres-paylas-palette-primaryDark-800, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[800]})`,
            },
        },
        '& .feature-list': {
            '& li': {
                '::before': {
                    content: `/yes-dark.svg')`,
                },
            },
        },
    },
    /************************************************************************************************* */
    ...theme.applyDarkStyles({
        [`:where(${theme.vars ? '[data-mui-color-scheme="dark"]' : '.mode-dark'}) &`]: {
            color: 'rgb(255, 255, 255)',
            '& :not(pre) > code': {
                // inline code block
                color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingDarkThemes.palette.common.white})`,
                borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.grey[100], 0.89),
                backgroundColor: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingDarkThemes.palette.grey[900]})`,
            },
            '& strong': {
                color: `var(--tres-paylas-palette-grey-300, ${brandingTheme_1.brandingDarkThemes.palette.grey[300]})`,
            },
            '& hr': {
                backgroundColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingDarkThemes.palette.divider})`,
            },
            '& a': {
                color: `var(--tres-paylas-palette-primary-300, ${brandingTheme_1.brandingDarkThemes.palette.error[700]})`,
            },
            '& a code': {
                color: `var(--tres-paylas-palette-primary-light, ${brandingTheme_1.brandingDarkThemes.palette.primary.dark})`,
            },
            '& h1, & h2, & h3, & h4, & h5': {
                color: `var(--tres-paylas-palette-grey-700, ${brandingTheme_1.brandingDarkThemes.palette.grey[700]})`,
                '& .anchor-icon, & .comment-link': {
                    color: `var(--tres-paylas-palette-primary-300, ${brandingTheme_1.brandingDarkThemes.palette.success[700]})`,
                    '&:hover': {
                        color: `var(--tres-paylas-palette-primary-100, ${brandingTheme_1.brandingDarkThemes.palette.warning[700]})`,
                        borderColor: `var(--tres-paylas-palette-primary-900, ${brandingTheme_1.brandingDarkThemes.palette.primary[900]})`,
                        backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.primary[900], 0.6),
                    },
                },
            },
            '& p, & ul, & ol': {
                color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingDarkThemes.palette.common.white})`,
            },
            '& h1 code, & h2 code, & h3 code': {
                color: `var(--tres-paylas-palette-grey-900, ${brandingTheme_1.brandingDarkThemes.palette.grey[900]})`,
            },
            '& table': {
                '& .required': {
                    color: '#a5ffa5',
                },
                '& .optional': {
                    color: '#a5b3ff',
                },
                '& .prop-type, & .slot-defaultClass': {
                    color: '#ffb6ec',
                },
                '& .prop-default, & .slot-default': {
                    borderColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingDarkThemes.palette.divider})`,
                },
            },
            '& td': {
                color: `var(--tres-paylas-palette-text-secondary, ${brandingTheme_1.brandingDarkThemes.palette.text.secondary})`,
                borderColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingDarkThemes.palette.divider})`,
            },
            '& th': {
                color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingDarkThemes.palette.text.primary})`,
                borderColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingDarkThemes.palette.divider})`,
            },
            '& blockquote': {
                borderColor: `var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[700]})`,
                '&::before': {
                    color: `var(--tres-paylas-palette-primaryDark-500, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[500]})`,
                },
            },
            '& .MuiCallout-root': {
                borderColor: `var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[700]})`,
                '& code': {
                    backgroundColor: `var(--tres-paylas-palette-primaryDark-600, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[600]})`,
                    borderColor: `var(--tres-paylas-palette-primaryDark-500, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[500]})`,
                },
                '&.MuiCallout-error': {
                    color: `var(--tres-paylas-palette-error-50, ${brandingTheme_1.brandingDarkThemes.palette.error[50]})`,
                    backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.error[700], 0.15),
                    borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.error[400], 0.1),
                    '& strong': {
                        color: `var(--tres-paylas-palette-error-300, ${brandingTheme_1.brandingDarkThemes.palette.error[300]})`,
                    },
                    '& svg': {
                        fill: `var(--tres-paylas-palette-error-500, ${brandingTheme_1.brandingDarkThemes.palette.error[500]})`,
                    },
                    '& a': {
                        color: `var(--tres-paylas-palette-error-200, ${brandingTheme_1.brandingDarkThemes.palette.error[200]})`,
                    },
                },
                '&.MuiCallout-info': {
                    color: `var(--tres-paylas-palette-grey-50, ${brandingTheme_1.brandingDarkThemes.palette.grey[50]})`,
                    backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.grey[700], 0.15),
                    borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.grey[800], 0.5),
                    '& strong': {
                        color: `var(--tres-paylas-palette-primary-200, ${brandingTheme_1.brandingDarkThemes.palette.primary[200]})`,
                    },
                    '& svg': {
                        fill: `var(--tres-paylas-palette-grey-400, ${brandingTheme_1.brandingDarkThemes.palette.grey[400]})`,
                    },
                },
                '&.MuiCallout-success': {
                    color: `var(--tres-paylas-palette-success-500, ${brandingTheme_1.brandingDarkThemes.palette.success[500]})`,
                    backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.success[700], 0.12),
                    borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingLightThemes.palette.success[400], 0.1),
                    '& strong': {
                        color: `var(--tres-paylas-palette-success-900, ${brandingTheme_1.brandingDarkThemes.palette.success[900]})`,
                    },
                    '& svg': {
                        fill: `var(--tres-paylas-palette-success-500, ${brandingTheme_1.brandingDarkThemes.palette.success[500]})`,
                    },
                    '& a': {
                        color: `var(--tres-paylas-palette-success-900, ${brandingTheme_1.brandingDarkThemes.palette.success[900]})`,
                    },
                },
                '&.MuiCallout-warning': {
                    color: `var(--tres-paylas-palette-warning-50, ${brandingTheme_1.brandingDarkThemes.palette.warning[50]})`,
                    backgroundColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.warning[700], 0.12),
                    borderColor: (0, styles_1.alpha)(brandingTheme_1.brandingDarkThemes.palette.warning[400], 0.1),
                    '& strong': {
                        color: `var(--tres-paylas-palette-warning-900, ${brandingTheme_1.brandingDarkThemes.palette.warning[900]})`,
                    },
                    '& svg': {
                        fill: `var(--tres-paylas-palette-warning-900, ${brandingTheme_1.brandingDarkThemes.palette.warning[900]})`,
                    },
                    '& a': {
                        color: `var(--tres-paylas-palette-warning-900, ${brandingTheme_1.brandingDarkThemes.palette.warning[900]})`,
                    },
                },
            },
            '& kbd.key': {
                color: `var(--tres-paylas-palette-text-primary, ${brandingTheme_1.brandingDarkThemes.palette.text.primary})`,
                backgroundColor: `var(--tres-paylas-palette-primaryDark-800, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[800]})`,
                border: `1px solid var(--tres-paylas-palette-primaryDark-600, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[600]})`,
                boxShadow: `inset 0 -2px 0 var(--tres-paylas-palette-primaryDark-700, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[700]})`,
            },
            '& details': {
                borderColor: `var(--tres-paylas-palette-divider, ${brandingTheme_1.brandingDarkThemes.palette.divider})`,
            },
            '& summary': {
                '&:hover': {
                    backgroundColor: `var(--tres-paylas-palette-primaryDark-800, ${brandingTheme_1.brandingDarkThemes.palette.primaryDark[800]})`,
                },
            },
            '& .feature-list': {
                '& li': {
                    '::before': {
                        content: `/yes-dark.svg')`,
                    },
                },
            },
        },
    }),
}));
function handleHeaderClick(event) {
    const selection = document.getSelection();
    if (selection === null) {
        return;
    }
    if (selection.type === 'Range') {
        // Disable the <a> behavior to be able to select text.
        event.preventDefault();
    }
}
const MarkdownElement = React.forwardRef(function MarkdownElement(props, ref) {
    const { className, renderedMarkdown, codename, ...other } = props;
    const rootRef = React.useRef(null);
    const handleRef = (0, useForkRef_1.default)(rootRef, ref);
    React.useEffect(() => {
        const elements = rootRef.current.getElementsByClassName('title-link-to-anchor');
        for (let i = 0; i < elements.length; i += 1) {
            // More reliable than `-webkit-user-drag` (https://caniuse.com/webkit-user-drag)
            elements[i].setAttribute('draggable', 'false');
            elements[i].addEventListener('click', handleHeaderClick);
        }
    }, []);
    const more = {};
    const codenames = {};
    if (typeof renderedMarkdown === 'string') {
        // workaround for https://github.com/facebook/react/issues/17170
        // otherwise we could just set `dangerouslySetInnerHTML={undefined}`
        more.dangerouslySetInnerHTML = { __html: renderedMarkdown };
    }
    if (typeof codename === 'string') {
        codenames.dangerouslySetInnerHTML = { __html: codename };
    }
    return ((0, jsx_runtime_1.jsx)(Root, { className: (0, clsx_1.default)('markdown-body', className), ...more, ...codenames, ...other, ref: handleRef }));
});
exports.default = MarkdownElement;
