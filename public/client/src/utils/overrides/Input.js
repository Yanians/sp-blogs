"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Input;
function Input(theme) {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        '& svg': { color: theme.palette.text.disabled }
                    }
                },
                input: {
                    '&::placeholder': {
                        opacity: 1,
                        color: theme.palette.text.disabled
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    '&:before': {
                        borderBottomColor: theme.palette.grey[50056]
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.grey[50012],
                    '&:hover': {
                        backgroundColor: theme.palette.grey[50016]
                    },
                    '&.Mui-focused': {
                        backgroundColor: theme.palette.action.focus
                    },
                    '&.Mui-disabled': {
                        backgroundColor: theme.palette.action.disabledBackground
                    }
                },
                underline: {
                    '&:before': {
                        borderBottomColor: theme.palette.grey[50056]
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.grey[50032]
                    },
                    '&.Mui-disabled': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.action.disabledBackground
                        }
                    }
                }
            }
        }
    };
}
