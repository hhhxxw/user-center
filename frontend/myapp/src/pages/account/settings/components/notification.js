import { jsx as _jsx } from "react/jsx-runtime";
import { List, Switch } from 'antd';
import { Fragment } from 'react';
const NotificationView = () => {
    const getData = () => {
        const Action = _jsx(Switch, { checkedChildren: "\u5F00", unCheckedChildren: "\u5173", defaultChecked: true });
        return [
            {
                title: '账户密码',
                description: '其他用户的消息将以站内信的形式通知',
                actions: [Action],
            },
            {
                title: '系统消息',
                description: '系统消息将以站内信的形式通知',
                actions: [Action],
            },
            {
                title: '待办任务',
                description: '待办任务将以站内信的形式通知',
                actions: [Action],
            },
        ];
    };
    const data = getData();
    return (_jsx(Fragment, { children: _jsx(List, { itemLayout: "horizontal", dataSource: data, renderItem: (item) => (_jsx(List.Item, { actions: item.actions, children: _jsx(List.Item.Meta, { title: item.title, description: item.description }) })) }) }));
};
export default NotificationView;
