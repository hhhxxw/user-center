import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Footer } from '@/components';
import { login } from '@/services/ant-design-pro/api';
import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import { AlipayCircleOutlined, LockOutlined, MobileOutlined, TaobaoCircleOutlined, UserOutlined, WeiboCircleOutlined, } from '@ant-design/icons';
import { LoginForm, ProFormCaptcha, ProFormCheckbox, ProFormText, } from '@ant-design/pro-components';
import { FormattedMessage, Helmet, SelectLang, useIntl, useModel } from '@umijs/max';
import { Alert, message, Tabs } from 'antd';
import { createStyles } from 'antd-style';
import { useState } from 'react';
import { flushSync } from 'react-dom';
import Settings from '../../../../config/defaultSettings';
const useStyles = createStyles(({ token }) => {
    return {
        action: {
            marginLeft: '8px',
            color: 'rgba(0, 0, 0, 0.2)',
            fontSize: '24px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            transition: 'color 0.3s',
            '&:hover': {
                color: token.colorPrimaryActive,
            },
        },
        lang: {
            width: 42,
            height: 42,
            lineHeight: '42px',
            position: 'fixed',
            right: 16,
            borderRadius: token.borderRadius,
            ':hover': {
                backgroundColor: token.colorBgTextHover,
            },
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'auto',
            backgroundImage: "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
            backgroundSize: '100% 100%',
        },
    };
});
const ActionIcons = () => {
    const { styles } = useStyles();
    return (_jsxs(_Fragment, { children: [_jsx(AlipayCircleOutlined, { className: styles.action }, "AlipayCircleOutlined"), _jsx(TaobaoCircleOutlined, { className: styles.action }, "TaobaoCircleOutlined"), _jsx(WeiboCircleOutlined, { className: styles.action }, "WeiboCircleOutlined")] }));
};
const Lang = () => {
    const { styles } = useStyles();
    return (_jsx("div", { className: styles.lang, "data-lang": true, children: SelectLang && _jsx(SelectLang, {}) }));
};
const LoginMessage = ({ content }) => {
    return (_jsx(Alert, { style: {
            marginBottom: 24,
        }, message: content, type: "error", showIcon: true }));
};
const Login = () => {
    const [userLoginState, setUserLoginState] = useState({});
    const [type, setType] = useState('account');
    const { initialState, setInitialState } = useModel('@@initialState');
    const { styles } = useStyles();
    const intl = useIntl();
    const fetchUserInfo = async () => {
        const userInfo = await initialState?.fetchUserInfo?.();
        if (userInfo) {
            flushSync(() => {
                setInitialState((s) => ({
                    ...s,
                    currentUser: userInfo,
                }));
            });
        }
    };
    const handleSubmit = async (values) => {
        try {
            // 登录
            const msg = await login({ ...values, type });
            if (msg.status === 'ok') {
                const defaultLoginSuccessMessage = intl.formatMessage({
                    id: 'pages.login.success',
                    defaultMessage: '登录成功！',
                });
                message.success(defaultLoginSuccessMessage);
                await fetchUserInfo();
                const urlParams = new URL(window.location.href).searchParams;
                window.location.href = urlParams.get('redirect') || '/';
                return;
            }
            console.log(msg);
            // 如果失败去设置用户错误信息
            setUserLoginState(msg);
        }
        catch (error) {
            const defaultLoginFailureMessage = intl.formatMessage({
                id: 'pages.login.failure',
                defaultMessage: '登录失败，请重试！',
            });
            console.log(error);
            message.error(defaultLoginFailureMessage);
        }
    };
    const { status, type: loginType } = userLoginState;
    return (_jsxs("div", { className: styles.container, children: [_jsx(Helmet, { children: _jsxs("title", { children: [intl.formatMessage({
                            id: 'menu.login',
                            defaultMessage: '登录页',
                        }), "- ", Settings.title] }) }), _jsx(Lang, {}), _jsx("div", { style: {
                    flex: '1',
                    padding: '32px 0',
                }, children: _jsxs(LoginForm, { contentStyle: {
                        minWidth: 280,
                        maxWidth: '75vw',
                    }, logo: _jsx("img", { alt: "logo", src: "/logo.svg" }), title: "Ant Design", subTitle: intl.formatMessage({ id: 'pages.layouts.userLayout.title' }), initialValues: {
                        autoLogin: true,
                    }, actions: [
                        _jsx(FormattedMessage, { id: "pages.login.loginWith", defaultMessage: "\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F" }, "loginWith"),
                        _jsx(ActionIcons, {}, "icons"),
                    ], onFinish: async (values) => {
                        await handleSubmit(values);
                    }, children: [_jsx(Tabs, { activeKey: type, onChange: setType, centered: true, items: [
                                {
                                    key: 'account',
                                    label: intl.formatMessage({
                                        id: 'pages.login.accountLogin.tab',
                                        defaultMessage: '账户密码登录',
                                    }),
                                },
                                {
                                    key: 'mobile',
                                    label: intl.formatMessage({
                                        id: 'pages.login.phoneLogin.tab',
                                        defaultMessage: '手机号登录',
                                    }),
                                },
                            ] }), status === 'error' && loginType === 'account' && (_jsx(LoginMessage, { content: intl.formatMessage({
                                id: 'pages.login.accountLogin.errorMessage',
                                defaultMessage: '账户或密码错误(admin/ant.design)',
                            }) })), type === 'account' && (_jsxs(_Fragment, { children: [_jsx(ProFormText, { name: "username", fieldProps: {
                                        size: 'large',
                                        prefix: _jsx(UserOutlined, {}),
                                    }, placeholder: intl.formatMessage({
                                        id: 'pages.login.username.placeholder',
                                        defaultMessage: '用户名: admin or user',
                                    }), rules: [
                                        {
                                            required: true,
                                            message: (_jsx(FormattedMessage, { id: "pages.login.username.required", defaultMessage: "\u8BF7\u8F93\u5165\u7528\u6237\u540D!" })),
                                        },
                                    ] }), _jsx(ProFormText.Password, { name: "password", fieldProps: {
                                        size: 'large',
                                        prefix: _jsx(LockOutlined, {}),
                                    }, placeholder: intl.formatMessage({
                                        id: 'pages.login.password.placeholder',
                                        defaultMessage: '密码: ant.design',
                                    }), rules: [
                                        {
                                            required: true,
                                            message: (_jsx(FormattedMessage, { id: "pages.login.password.required", defaultMessage: "\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01" })),
                                        },
                                    ] })] })), status === 'error' && loginType === 'mobile' && _jsx(LoginMessage, { content: "\u9A8C\u8BC1\u7801\u9519\u8BEF" }), type === 'mobile' && (_jsxs(_Fragment, { children: [_jsx(ProFormText, { fieldProps: {
                                        size: 'large',
                                        prefix: _jsx(MobileOutlined, {}),
                                    }, name: "mobile", placeholder: intl.formatMessage({
                                        id: 'pages.login.phoneNumber.placeholder',
                                        defaultMessage: '手机号',
                                    }), rules: [
                                        {
                                            required: true,
                                            message: (_jsx(FormattedMessage, { id: "pages.login.phoneNumber.required", defaultMessage: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01" })),
                                        },
                                        {
                                            pattern: /^1\d{10}$/,
                                            message: (_jsx(FormattedMessage, { id: "pages.login.phoneNumber.invalid", defaultMessage: "\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01" })),
                                        },
                                    ] }), _jsx(ProFormCaptcha, { fieldProps: {
                                        size: 'large',
                                        prefix: _jsx(LockOutlined, {}),
                                    }, captchaProps: {
                                        size: 'large',
                                    }, placeholder: intl.formatMessage({
                                        id: 'pages.login.captcha.placeholder',
                                        defaultMessage: '请输入验证码',
                                    }), captchaTextRender: (timing, count) => {
                                        if (timing) {
                                            return `${count} ${intl.formatMessage({
                                                id: 'pages.getCaptchaSecondText',
                                                defaultMessage: '获取验证码',
                                            })}`;
                                        }
                                        return intl.formatMessage({
                                            id: 'pages.login.phoneLogin.getVerificationCode',
                                            defaultMessage: '获取验证码',
                                        });
                                    }, name: "captcha", rules: [
                                        {
                                            required: true,
                                            message: (_jsx(FormattedMessage, { id: "pages.login.captcha.required", defaultMessage: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01" })),
                                        },
                                    ], onGetCaptcha: async (phone) => {
                                        const result = await getFakeCaptcha({
                                            phone,
                                        });
                                        if (!result) {
                                            return;
                                        }
                                        message.success('获取验证码成功！验证码为：1234');
                                    } })] })), _jsxs("div", { style: {
                                marginBottom: 24,
                            }, children: [_jsx(ProFormCheckbox, { noStyle: true, name: "autoLogin", children: _jsx(FormattedMessage, { id: "pages.login.rememberMe", defaultMessage: "\u81EA\u52A8\u767B\u5F55" }) }), _jsx("a", { style: {
                                        float: 'right',
                                    }, children: _jsx(FormattedMessage, { id: "pages.login.forgotPassword", defaultMessage: "\u5FD8\u8BB0\u5BC6\u7801" }) })] })] }) }), _jsx(Footer, {})] }));
};
export default Login;
