import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { history, Link, useRequest } from '@umijs/max';
import { Button, Col, Form, Input, message, Popover, Progress, Row, Select, Space } from 'antd';
import { useEffect, useState } from 'react';
import { fakeRegister } from './service';
import useStyles from './style.style';
const FormItem = Form.Item;
const { Option } = Select;
const passwordProgressMap = {
    ok: 'success',
    pass: 'normal',
    poor: 'exception',
};
const Register = () => {
    const { styles } = useStyles();
    const [count, setCount] = useState(0);
    const [open, setVisible] = useState(false);
    const [prefix, setPrefix] = useState('86');
    const [popover, setPopover] = useState(false);
    const confirmDirty = false;
    let interval;
    const passwordStatusMap = {
        ok: (_jsx("div", { className: styles.success, children: _jsx("span", { children: "\u5F3A\u5EA6\uFF1A\u5F3A" }) })),
        pass: (_jsx("div", { className: styles.warning, children: _jsx("span", { children: "\u5F3A\u5EA6\uFF1A\u4E2D" }) })),
        poor: (_jsx("div", { className: styles.error, children: _jsx("span", { children: "\u5F3A\u5EA6\uFF1A\u592A\u77ED" }) })),
    };
    const [form] = Form.useForm();
    useEffect(() => () => {
        clearInterval(interval);
    }, [interval]);
    const onGetCaptcha = () => {
        let counts = 59;
        setCount(counts);
        interval = window.setInterval(() => {
            counts -= 1;
            setCount(counts);
            if (counts === 0) {
                clearInterval(interval);
            }
        }, 1000);
    };
    const getPasswordStatus = () => {
        const value = form.getFieldValue('password');
        if (value && value.length > 9) {
            return 'ok';
        }
        if (value && value.length > 5) {
            return 'pass';
        }
        return 'poor';
    };
    const { loading: submitting, run: register } = useRequest(fakeRegister, {
        manual: true,
        onSuccess: (data, params) => {
            if (data.status === 'ok') {
                message.success('注册成功！');
                history.push({
                    pathname: `/user/register-result?account=${params[0].email}`,
                });
            }
        },
    });
    const onFinish = (values) => {
        register(values);
    };
    const checkConfirm = (_, value) => {
        const promise = Promise;
        if (value && value !== form.getFieldValue('password')) {
            return promise.reject('两次输入的密码不匹配!');
        }
        return promise.resolve();
    };
    const checkPassword = (_, value) => {
        const promise = Promise;
        // 没有值的情况
        if (!value) {
            setVisible(!!value);
            return promise.reject('请输入密码!');
        }
        // 有值的情况
        if (!open) {
            setVisible(!!value);
        }
        setPopover(!popover);
        if (value.length < 6) {
            return promise.reject('');
        }
        if (value && confirmDirty) {
            form.validateFields(['confirm']);
        }
        return promise.resolve();
    };
    const changePrefix = (value) => {
        setPrefix(value);
    };
    const renderPasswordProgress = () => {
        const value = form.getFieldValue('password');
        const passwordStatus = getPasswordStatus();
        return value && value.length ? (_jsx("div", { className: styles[`progress-${passwordStatus}`], children: _jsx(Progress, { status: passwordProgressMap[passwordStatus], strokeWidth: 6, percent: value.length * 10 > 100 ? 100 : value.length * 10, showInfo: false }) })) : null;
    };
    return (_jsxs("div", { className: styles.main, children: [_jsx("h3", { children: "\u6CE8\u518C" }), _jsxs(Form, { form: form, name: "UserRegister", onFinish: onFinish, children: [_jsx(FormItem, { name: "email", rules: [
                            {
                                required: true,
                                message: '请输入邮箱地址!',
                            },
                            {
                                type: 'email',
                                message: '邮箱地址格式错误!',
                            },
                        ], children: _jsx(Input, { size: "large", placeholder: "\u90AE\u7BB1" }) }), _jsx(Popover, { getPopupContainer: (node) => {
                            if (node && node.parentNode) {
                                return node.parentNode;
                            }
                            return node;
                        }, content: open && (_jsxs("div", { style: {
                                padding: '4px 0',
                            }, children: [passwordStatusMap[getPasswordStatus()], renderPasswordProgress(), _jsx("div", { style: {
                                        marginTop: 10,
                                    }, children: _jsx("span", { children: "\u8BF7\u81F3\u5C11\u8F93\u5165 6 \u4E2A\u5B57\u7B26\u3002\u8BF7\u4E0D\u8981\u4F7F\u7528\u5BB9\u6613\u88AB\u731C\u5230\u7684\u5BC6\u7801\u3002" }) })] })), overlayStyle: {
                            width: 240,
                        }, placement: "right", open: open, children: _jsx(FormItem, { name: "password", className: form.getFieldValue('password') &&
                                form.getFieldValue('password').length > 0 &&
                                styles.password, rules: [
                                {
                                    validator: checkPassword,
                                },
                            ], children: _jsx(Input, { size: "large", type: "password", placeholder: "\u81F3\u5C116\u4F4D\u5BC6\u7801\uFF0C\u533A\u5206\u5927\u5C0F\u5199" }) }) }), _jsx(FormItem, { name: "confirm", rules: [
                            {
                                required: true,
                                message: '确认密码',
                            },
                            {
                                validator: checkConfirm,
                            },
                        ], children: _jsx(Input, { size: "large", type: "password", placeholder: "\u786E\u8BA4\u5BC6\u7801" }) }), _jsx(FormItem, { name: "mobile", rules: [
                            {
                                required: true,
                                message: '请输入手机号!',
                            },
                            {
                                pattern: /^\d{11}$/,
                                message: '手机号格式错误!',
                            },
                        ], children: _jsxs(Space.Compact, { style: { width: '100%' }, children: [_jsxs(Select, { size: "large", value: prefix, onChange: changePrefix, style: {
                                        width: '30%',
                                    }, children: [_jsx(Option, { value: "86", children: "+86" }), _jsx(Option, { value: "87", children: "+87" })] }), _jsx(Input, { size: "large", placeholder: "\u624B\u673A\u53F7" })] }) }), _jsxs(Row, { gutter: 8, children: [_jsx(Col, { span: 16, children: _jsx(FormItem, { name: "captcha", rules: [
                                        {
                                            required: true,
                                            message: '请输入验证码!',
                                        },
                                    ], children: _jsx(Input, { size: "large", placeholder: "\u9A8C\u8BC1\u7801" }) }) }), _jsx(Col, { span: 8, children: _jsx(Button, { size: "large", disabled: !!count, className: styles.getCaptcha, onClick: onGetCaptcha, children: count ? `${count} s` : '获取验证码' }) })] }), _jsx(FormItem, { children: _jsxs("div", { className: styles.footer, children: [_jsx(Button, { size: "large", loading: submitting, className: styles.submit, type: "primary", htmlType: "submit", children: _jsx("span", { children: "\u6CE8\u518C" }) }), _jsx(Link, { to: "/user/login", children: _jsx("span", { children: "\u4F7F\u7528\u5DF2\u6709\u8D26\u6237\u767B\u5F55" }) })] }) })] })] }));
};
export default Register;
