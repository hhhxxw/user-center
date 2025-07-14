import { jsx as _jsx } from "react/jsx-runtime";
import { outLogin } from '@/services/ant-design-pro/api';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { history, useModel } from '@umijs/max';
import { Spin } from 'antd';
import { createStyles } from 'antd-style';
import { stringify } from 'querystring';
import { useCallback } from 'react';
import { flushSync } from 'react-dom';
import HeaderDropdown from '../HeaderDropdown';
export const AvatarName = () => {
    const { initialState } = useModel('@@initialState');
    const { currentUser } = initialState || {};
    return _jsx("span", { className: "anticon", children: currentUser?.name });
};
const useStyles = createStyles(({ token }) => {
    return {
        action: {
            display: 'flex',
            height: '48px',
            marginLeft: 'auto',
            overflow: 'hidden',
            alignItems: 'center',
            padding: '0 8px',
            cursor: 'pointer',
            borderRadius: token.borderRadius,
            '&:hover': {
                backgroundColor: token.colorBgTextHover,
            },
        },
    };
});
export const AvatarDropdown = ({ menu, children }) => {
    /**
     * 退出登录，并且将当前的 url 保存
     */
    const loginOut = async () => {
        await outLogin();
        const { search, pathname } = window.location;
        const urlParams = new URL(window.location.href).searchParams;
        /** 此方法会跳转到 redirect 参数所在的位置 */
        const redirect = urlParams.get('redirect');
        // Note: There may be security issues, please note
        if (window.location.pathname !== '/user/login' && !redirect) {
            history.replace({
                pathname: '/user/login',
                search: stringify({
                    redirect: pathname + search,
                }),
            });
        }
    };
    const { styles } = useStyles();
    const { initialState, setInitialState } = useModel('@@initialState');
    const onMenuClick = useCallback((event) => {
        const { key } = event;
        if (key === 'logout') {
            flushSync(() => {
                setInitialState((s) => ({ ...s, currentUser: undefined }));
            });
            loginOut();
            return;
        }
        history.push(`/account/${key}`);
    }, [setInitialState]);
    const loading = (_jsx("span", { className: styles.action, children: _jsx(Spin, { size: "small", style: {
                marginLeft: 8,
                marginRight: 8,
            } }) }));
    if (!initialState) {
        return loading;
    }
    const { currentUser } = initialState;
    if (!currentUser || !currentUser.name) {
        return loading;
    }
    const menuItems = [
        ...(menu
            ? [
                {
                    key: 'center',
                    icon: _jsx(UserOutlined, {}),
                    label: '个人中心',
                },
                {
                    key: 'settings',
                    icon: _jsx(SettingOutlined, {}),
                    label: '个人设置',
                },
                {
                    type: 'divider',
                },
            ]
            : []),
        {
            key: 'logout',
            icon: _jsx(LogoutOutlined, {}),
            label: '退出登录',
        },
    ];
    return (_jsx(HeaderDropdown, { menu: {
            selectedKeys: [],
            onClick: onMenuClick,
            items: menuItems,
        }, children: children }));
};
