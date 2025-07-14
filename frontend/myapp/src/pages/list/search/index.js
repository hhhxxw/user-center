import { jsx as _jsx } from "react/jsx-runtime";
import { PageContainer } from '@ant-design/pro-components';
import { history, Outlet, useLocation, useMatch } from '@umijs/max';
import { Input } from 'antd';
const tabList = [
    {
        key: 'articles',
        tab: '文章',
    },
    {
        key: 'projects',
        tab: '项目',
    },
    {
        key: 'applications',
        tab: '应用',
    },
];
const Search = () => {
    const location = useLocation();
    let match = useMatch(location.pathname);
    const handleTabChange = (key) => {
        const url = match?.pathname === '/' ? '' : match?.pathname.substring(0, match.pathname.lastIndexOf('/'));
        switch (key) {
            case 'articles':
                history.push(`${url}/articles`);
                break;
            case 'applications':
                history.push(`${url}/applications`);
                break;
            case 'projects':
                history.push(`${url}/projects`);
                break;
            default:
                break;
        }
    };
    const handleFormSubmit = (value) => {
        // eslint-disable-next-line no-console
        console.log(value);
    };
    const getTabKey = () => {
        const tabKey = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
        if (tabKey && tabKey !== '/') {
            return tabKey;
        }
        return 'articles';
    };
    return (_jsx(PageContainer, { content: _jsx("div", { style: { textAlign: 'center' }, children: _jsx(Input.Search, { placeholder: "\u8BF7\u8F93\u5165", enterButton: "\u641C\u7D22", size: "large", onSearch: handleFormSubmit, style: { maxWidth: 522, width: '100%' } }) }), tabList: tabList, tabActiveKey: getTabKey(), onTabChange: handleTabChange, children: _jsx(Outlet, {}) }));
};
export default Search;
