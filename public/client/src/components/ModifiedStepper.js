"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomizedSteppers;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = tslib_1.__importDefault(require("prop-types"));
const styles_1 = require("@mui/material/styles");
const Stack_1 = tslib_1.__importDefault(require("@mui/material/Stack"));
const Stepper_1 = tslib_1.__importDefault(require("@mui/material/Stepper"));
const Step_1 = tslib_1.__importDefault(require("@mui/material/Step"));
const useMediaQuery_1 = tslib_1.__importDefault(require("@mui/material/useMediaQuery"));
const styles_2 = require("@mui/material/styles");
const StepLabel_1 = tslib_1.__importDefault(require("@mui/material/StepLabel"));
const Check_1 = tslib_1.__importDefault(require("@mui/icons-material/Check"));
const StepConnector_1 = tslib_1.__importStar(require("@mui/material/StepConnector"));
const QontoConnector = (0, styles_1.styled)(StepConnector_1.default)(({ theme }) => ({
    [`&.${StepConnector_1.stepConnectorClasses.alternativeLabel}`]: {
        top: 2.3,
        left: 'calc(-44% + -1.5px)',
        right: 'calc(44% + 1.5px)',
    },
    [`&.${StepConnector_1.stepConnectorClasses.active}`]: {
        [`& .${StepConnector_1.stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`&.${StepConnector_1.stepConnectorClasses.completed}`]: {
        [`& .${StepConnector_1.stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`& .${StepConnector_1.stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderLeftWidth: 3,
        borderRadius: 1,
    },
}));
const QontoStepIconRoot = (0, styles_1.styled)('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
        display: 'none',
        Visibility: 'hidden',
        position: 'relative',
        top: 0,
        color: '#784af4',
        zIndex: 1,
        // fontSize: 22,
    },
    '& .QontoStepIcon-circle': {
        width: 13,
        height: 13,
        Pointer: 'ds',
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));
function QontoStepIcon(props) {
    const { active, completed = true, className } = props;
    return (
    //@ts-ignore
    (0, jsx_runtime_1.jsx)(QontoStepIconRoot, { ownerState: { active }, className: className, children: completed ? ((0, jsx_runtime_1.jsx)(Check_1.default, { className: "QontoStepIcon-completedIcon" })) : ((0, jsx_runtime_1.jsx)("div", { className: "QontoStepIcon-circle" })) }));
}
QontoStepIcon.propTypes = {
    active: prop_types_1.default.bool,
    className: prop_types_1.default.string,
    completed: prop_types_1.default.bool,
};
function CustomizedSteppers(props) {
    const { count } = props;
    console.log('from stepper', typeof count);
    const theme = (0, styles_2.useTheme)();
    const mdDown = (0, useMediaQuery_1.default)(theme.breakpoints.down('md'), { noSsr: false });
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, { direction: 'row', children: (0, jsx_runtime_1.jsx)(Stepper_1.default, { orientation: 'vertical', alternativeLabel: true, activeStep: 1, connector: (0, jsx_runtime_1.jsx)(QontoConnector, {}), children: count?.map((label, index) => ((0, jsx_runtime_1.jsx)(Step_1.default, { children: mdDown ? null : (0, jsx_runtime_1.jsx)(StepLabel_1.default, { StepIconComponent: QontoStepIcon, children: index + 1 }) }, index + 2))) }) }));
}
