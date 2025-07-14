import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AvatarDropdown, AvatarName, Footer, Question, SelectLang } from '@/components';
import { LinkOutlined } from '@ant-design/icons';
import { SettingDrawer } from '@ant-design/pro-components';
import { history, Link } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState() {
    const fetchUserInfo = async () => {
        try {
            const msg = await queryCurrentUser({
                skipErrorHandler: true,
            });
            return msg.data;
        }
        catch (error) {
            history.push(loginPath);
        }
        return undefined;
    };
    // 如果不是登录页面，执行
    const { location } = history;
    if (![loginPath, '/user/register', '/user/register-result'].includes(location.pathname)) {
        const currentUser = await fetchUserInfo();
        return {
            fetchUserInfo,
            currentUser,
            settings: defaultSettings,
        };
    }
    return {
        fetchUserInfo,
        settings: defaultSettings,
    };
}
// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout = ({ initialState, setInitialState }) => {
    return {
        actionsRender: () => [_jsx(Question, {}, "doc"), _jsx(SelectLang, {}, "SelectLang")],
        avatarProps: {
            src: initialState?.currentUser?.avatar,
            title: _jsx(AvatarName, {}),
            render: (_, avatarChildren) => {
                return _jsx(AvatarDropdown, { children: avatarChildren });
            },
        },
        waterMarkProps: {
            content: initialState?.currentUser?.name,
        },
        footerRender: () => _jsx(Footer, {}),
        onPageChange: () => {
            const { location } = history;
            // 如果没有登录，重定向到 login
            if (!initialState?.currentUser && location.pathname !== loginPath) {
                history.push(loginPath);
            }
        },
        bgLayoutImgList: [
            {
                src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
                left: 85,
                bottom: 100,
                height: '303px',
            },
            {
                src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
                bottom: -68,
                right: -45,
                height: '303px',
            },
            {
                src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
                bottom: 0,
                left: 0,
                width: '331px',
            },
        ],
        links: isDev
            ? [
                _jsxs(Link, { to: "/umi/plugin/openapi", target: "_blank", children: [_jsx(LinkOutlined, {}), _jsx("span", { children: "OpenAPI \u6587\u6863" })] }, "openapi"),
            ]
            : [],
        menuHeaderRender: undefined,
        // 自定义 403 页面
        // unAccessible: <div>unAccessible</div>,
        // 增加一个 loading 的状态
        childrenRender: (children) => {
            // if (initialState?.loading) return <PageLoading />;
            return (_jsxs(_Fragment, { children: [children, isDev && (_jsx(SettingDrawer, { disableUrlParams: true, enableDarkTheme: true, settings: initialState?.settings, onSettingChange: (settings) => {
                            setInitialState((preInitialState) => ({
                                ...preInitialState,
                                settings,
                            }));
                        } }))] }));
        },
        ...initialState?.settings,
    };
};
/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
    baseURL: 'https://proapi.azurewebsites.net',
    ...errorConfig,
};
