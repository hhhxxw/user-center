import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useSearchParams } from '@umijs/max';
import { Button, Result } from 'antd';
import useStyles from './style.style';
const RegisterResult = () => {
    const { styles } = useStyles();
    const [params] = useSearchParams();
    const actions = (_jsxs("div", { className: styles.actions, children: [_jsx("a", { href: "", children: _jsx(Button, { size: "large", type: "primary", children: _jsx("span", { children: "\u67E5\u770B\u90AE\u7BB1" }) }) }), _jsx(Link, { to: "/", children: _jsx(Button, { size: "large", children: "\u8FD4\u56DE\u9996\u9875" }) })] }));
    const email = params?.get('account') || 'AntDesign@example.com';
    return (_jsx(Result, { className: styles.registerResult, status: "success", title: _jsx("div", { className: styles.title, children: _jsxs("span", { children: ["\u4F60\u7684\u8D26\u6237\uFF1A", email, " \u6CE8\u518C\u6210\u529F"] }) }), subTitle: "\u6FC0\u6D3B\u90AE\u4EF6\u5DF2\u53D1\u9001\u5230\u4F60\u7684\u90AE\u7BB1\u4E2D\uFF0C\u90AE\u4EF6\u6709\u6548\u671F\u4E3A24\u5C0F\u65F6\u3002\u8BF7\u53CA\u65F6\u767B\u5F55\u90AE\u7BB1\uFF0C\u70B9\u51FB\u90AE\u4EF6\u4E2D\u7684\u94FE\u63A5\u6FC0\u6D3B\u5E10\u6237\u3002", extra: actions }));
};
export default RegisterResult;
