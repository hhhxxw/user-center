import { jsx as _jsx } from "react/jsx-runtime";
import { AlipayOutlined, DingdingOutlined, TaobaoOutlined } from '@ant-design/icons';
import { List } from 'antd';
import { Fragment } from 'react';
const BindingView = () => {
    const getData = () => [
        {
            title: '绑定淘宝',
            description: '当前未绑定淘宝账号',
            actions: [_jsx("a", { children: "\u7ED1\u5B9A" }, "Bind")],
            avatar: _jsx(TaobaoOutlined, { className: "taobao" }),
        },
        {
            title: '绑定支付宝',
            description: '当前未绑定支付宝账号',
            actions: [_jsx("a", { children: "\u7ED1\u5B9A" }, "Bind")],
            avatar: _jsx(AlipayOutlined, { className: "alipay" }),
        },
        {
            title: '绑定钉钉',
            description: '当前未绑定钉钉账号',
            actions: [_jsx("a", { children: "\u7ED1\u5B9A" }, "Bind")],
            avatar: _jsx(DingdingOutlined, { className: "dingding" }),
        },
    ];
    return (_jsx(Fragment, { children: _jsx(List, { itemLayout: "horizontal", dataSource: getData(), renderItem: (item) => (_jsx(List.Item, { actions: item.actions, children: _jsx(List.Item.Meta, { avatar: item.avatar, title: item.title, description: item.description }) })) }) }));
};
export default BindingView;
