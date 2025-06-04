"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterForm;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const Yup = tslib_1.__importStar(require("yup"));
const react_1 = require("react");
const Icon_1 = tslib_1.__importDefault(require("@mui/material/Icon"));
const formik_1 = require("formik");
const Visibility_1 = tslib_1.__importDefault(require("@mui/icons-material/Visibility"));
const VisibilityOff_1 = tslib_1.__importDefault(require("@mui/icons-material/VisibilityOff"));
const react_router_dom_1 = require("react-router-dom");
// material
const material_1 = require("@mui/material");
const AuthContext_1 = require("../AuthContext");
const SocialLoginButton_1 = tslib_1.__importDefault(require("../utils/helpers/SocialLoginButton"));
const sweetalert2_1 = tslib_1.__importDefault(require("sweetalert2"));
// ----------------------------------------------------------------------
function RegisterForm() {
    const Navigate = (0, react_router_dom_1.useNavigate)();
    window.history.forward(); //do not allow back history
    const { user, login } = (0, AuthContext_1.UseAuth)();
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [isLogin, setIsLogin] = (0, react_1.useState)(true);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)('');
    const resetFormRef = (0, react_1.useRef)(() => { });
    (0, react_1.useEffect)(() => {
        const handlePopState = () => {
            window.history.pushState(null, '', window.location.href);
        };
        window.history.pushState(null, '', window.location.href);
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (user) {
            console.log('[Already Logged In] Redirecting to /blogs');
            Navigate('/blogs');
        }
    }, [user]);
    const toggleForm = () => {
        setIsLogin(!isLogin);
        resetFormRef.current();
        // if (resetFormRef) resetFormRef(); // reset when switching modes
    };
    const handleLogin = ({ user, token }) => {
        console.log('[Login Triggered]', { user, token }); // DEBUG
        if (user && token) {
            login(user, token);
            sweetalert2_1.default.fire({
                icon: 'success',
                title: `Welcome ${user.name || user.email}`,
                text: 'Login successful!',
                confirmButtonText: 'Continue',
            }).then(() => {
                Navigate('/blogs');
            });
        }
        else {
            console.error('[Login Failed] Missing user or token');
        }
    };
    const handleSubmit = async (values, resetForm) => {
        setLoading(true);
        setError('');
        try {
            const url = isLogin ? '/api/auth/login' : '/api/auth/register';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                })
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }
            const data = await response.json();
            console.log(data);
            sweetalert2_1.default.fire('Success', data.message, 'success');
            resetForm(); // ✅ clear form on success
            sweetalert2_1.default.fire('Success', isLogin ? 'Login successful!' : 'Registration successful!', 'success');
            if (isLogin) {
                // navigate goes here.
                Navigate('/');
            }
        }
        catch (err) {
            console.error('Registration error:', err.message);
            setError(err.message || 'Something went wrong!');
            sweetalert2_1.default.fire('Error', err.message || 'Something went wrong!', 'error');
            // setError(err.response?.data?.message || 'Something went wrong!');
        }
        finally {
            setLoading(false);
        }
    };
    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().min(2, 'Too Short!').max(25, 'Too Long!').required('First name required'),
        lastName: Yup.string().min(2, 'Too Short!').max(25, 'Too Long!').required('Last name required'),
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    });
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });
    console.log(user);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(material_1.Stack, { spacing: 1, direction: 'column', children: [(0, jsx_runtime_1.jsx)(material_1.Button, { onClick: () => Navigate('/', { replace: true }), children: "Go to Homepage" }), (0, jsx_runtime_1.jsx)(SocialLoginButton_1.default, { onLogin: ({ user, token }) => handleLogin({ user, token }) }), (0, jsx_runtime_1.jsx)(formik_1.Formik, { initialValues: {
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    }, validationSchema: isLogin ? LoginSchema : RegisterSchema, onSubmit: (values, { resetForm }) => handleSubmit(values, resetForm), children: ({ touched, errors, isSubmitting, resetForm }) => {
                        resetFormRef.current = resetForm; // ✅ Always store latest resetForm
                        return ((0, jsx_runtime_1.jsx)(formik_1.Form, { autoComplete: "off", noValidate: true, children: (0, jsx_runtime_1.jsxs)(material_1.Stack, { spacing: 3, children: [!isLogin && ((0, jsx_runtime_1.jsxs)(material_1.Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 2, children: [(0, jsx_runtime_1.jsx)(formik_1.Field, { name: "firstName", children: ({ field, meta }) => ((0, jsx_runtime_1.jsx)(material_1.TextField, { ...field, label: "First Name", fullWidth: true, error: meta.touched && Boolean(meta.error), helperText: meta.touched && meta.error })) }), (0, jsx_runtime_1.jsx)(formik_1.Field, { name: "lastName", children: ({ field, meta }) => ((0, jsx_runtime_1.jsx)(material_1.TextField, { ...field, label: "Last Name", fullWidth: true, error: meta.touched && Boolean(meta.error), helperText: meta.touched && meta.error })) })] })), (0, jsx_runtime_1.jsx)(formik_1.Field, { name: "email", children: ({ field, meta }) => ((0, jsx_runtime_1.jsx)(material_1.TextField, { ...field, label: "Email address", fullWidth: true, autoComplete: "email", error: meta.touched && Boolean(meta.error), helperText: meta.touched && meta.error })) }), (0, jsx_runtime_1.jsx)(formik_1.Field, { name: "password", children: ({ field, meta }) => ((0, jsx_runtime_1.jsx)(material_1.TextField, { ...field, fullWidth: true, type: showPassword ? 'text' : 'password', label: "Password", autoComplete: "current-password", error: meta.touched && Boolean(meta.error), helperText: meta.touched && meta.error, slotProps: {
                                                input: {
                                                    endAdornment: ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, { position: "end", children: (0, jsx_runtime_1.jsx)(material_1.IconButton, { edge: "end", onClick: () => setShowPassword((prev) => !prev), tabIndex: -1, children: (0, jsx_runtime_1.jsx)(Icon_1.default, { fontSize: "small", children: showPassword ? (0, jsx_runtime_1.jsx)(Visibility_1.default, {}) : (0, jsx_runtime_1.jsx)(VisibilityOff_1.default, {}) }) }) }))
                                                }
                                            } })) }), !isLogin && ((0, jsx_runtime_1.jsx)(formik_1.Field, { name: "confirmPassword", children: ({ field, meta }) => ((0, jsx_runtime_1.jsx)(material_1.TextField, { ...field, fullWidth: true, type: "password", label: "Confirm Password", error: meta.touched && Boolean(meta.error), helperText: meta.touched && meta.error })) })), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { marginTop: 2 }, children: (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", fullWidth: true, type: "submit", disabled: loading || isSubmitting, children: loading ? (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { size: 24 }) : isLogin ? 'Login' : 'Register' }) }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: { textAlign: 'center', marginTop: 2 }, children: (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "text", onClick: toggleForm, children: isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login' }) })] }) }));
                    } })] }) }));
}
