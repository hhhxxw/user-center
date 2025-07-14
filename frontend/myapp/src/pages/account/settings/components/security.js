import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { List } from 'antd';
const passwordStrength = {
    strong: _jsx("span", { className: "strong", children: "\u5F3A" }),
    medium: _jsx("span", { className: "medium", children: "\u4E2D" }),
    weak: _jsx("span", { className: "weak", children: "\u5F31 Weak" }),
};
const SecurityView = () => {
    const getData = () => [
        {
            title: '账户密码',
            description: (_jsxs(_Fragment, { children: ["\u5F53\u524D\u5BC6\u7801\u5F3A\u5EA6\uFF1A", passwordStrength.strong] })),
            actions: [_jsx("a", { children: "\u4FEE\u6539" }, "Modify")],
        },
        {
            title: '密保手机',
            description: `已绑定手机：138****8293`,
            actions: [_jsx("a", { children: "\u4FEE\u6539" }, "Modify")],
        },
        {
            title: '密保问题',
            description: '未设置密保问题，密保问题可有效保护账户安全',
            actions: [_jsx("a", { children: "\u8BBE\u7F6E" }, "Set")],
        },
        {
            title: '备用邮箱',
            description: `已绑定邮箱：ant***sign.com`,
            actions: [_jsx("a", { children: "\u4FEE\u6539" }, "Modify")],
        },
        {
            title: 'MFA 设备',
            description: '未绑定 MFA 设备，绑定后，可以进行二次确认',
            actions: [_jsx("a", { children: "\u7ED1\u5B9A" }, "bind")],
        },
    ];
    const data = getData();
    return (_jsx(_Fragment, { children: _jsx(List, { itemLayout: "horizontal", dataSource: data, renderItem: (item) => (_jsx(List.Item, { actions: item.actions, children: _jsx(List.Item.Meta, { title: item.title, description: item.description }) })) }) }));
};
export default SecurityView;
