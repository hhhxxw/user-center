import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GridContent } from '@ant-design/pro-components';
import { Menu } from 'antd';
import { useLayoutEffect, useRef, useState } from 'react';
import BaseView from './components/base';
import BindingView from './components/binding';
import NotificationView from './components/notification';
import SecurityView from './components/security';
import useStyles from './style.style';
const Settings = () => {
    const { styles } = useStyles();
    const menuMap = {
        base: '基本设置',
        security: '安全设置',
        binding: '账号绑定',
        notification: '新消息通知',
    };
    const [initConfig, setInitConfig] = useState({
        mode: 'inline',
        selectKey: 'base',
    });
    const dom = useRef();
    const resize = () => {
        requestAnimationFrame(() => {
            if (!dom.current) {
                return;
            }
            let mode = 'inline';
            const { offsetWidth } = dom.current;
            if (dom.current.offsetWidth < 641 && offsetWidth > 400) {
                mode = 'horizontal';
            }
            if (window.innerWidth < 768 && offsetWidth > 400) {
                mode = 'horizontal';
            }
            setInitConfig({
                ...initConfig,
                mode: mode,
            });
        });
    };
    useLayoutEffect(() => {
        if (dom.current) {
            window.addEventListener('resize', resize);
            resize();
        }
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [dom.current]);
    const getMenu = () => {
        return Object.keys(menuMap).map((item) => ({ key: item, label: menuMap[item] }));
    };
    const renderChildren = () => {
        const { selectKey } = initConfig;
        switch (selectKey) {
            case 'base':
                return _jsx(BaseView, {});
            case 'security':
                return _jsx(SecurityView, {});
            case 'binding':
                return _jsx(BindingView, {});
            case 'notification':
                return _jsx(NotificationView, {});
            default:
                return null;
        }
    };
    return (_jsx(GridContent, { children: _jsxs("div", { className: styles.main, ref: (ref) => {
                if (ref) {
                    dom.current = ref;
                }
            }, children: [_jsx("div", { className: styles.leftMenu, children: _jsx(Menu, { mode: initConfig.mode, selectedKeys: [initConfig.selectKey], onClick: ({ key }) => {
                            setInitConfig({
                                ...initConfig,
                                selectKey: key,
                            });
                        }, items: getMenu() }) }), _jsxs("div", { className: styles.right, children: [_jsx("div", { className: styles.title, children: menuMap[initConfig.selectKey] }), renderChildren()] })] }) }));
};
export default Settings;
