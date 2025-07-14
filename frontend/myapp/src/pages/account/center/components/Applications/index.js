import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DownloadOutlined, EditOutlined, EllipsisOutlined, ShareAltOutlined, } from '@ant-design/icons';
import { useRequest } from '@umijs/max';
import { Avatar, Card, Dropdown, List, Tooltip } from 'antd';
import numeral from 'numeral';
import { queryFakeList } from '../../service';
import useStyles from './index.style';
export function formatWan(val) {
    const v = val * 1;
    if (!v || Number.isNaN(v))
        return '';
    let result = val;
    if (val > 10000) {
        result = (_jsxs("span", { children: [Math.floor(val / 10000), _jsx("span", { style: {
                        position: 'relative',
                        top: -2,
                        fontSize: 14,
                        fontStyle: 'normal',
                        marginLeft: 2,
                    }, children: "\u4E07" })] }));
    }
    return result;
}
const Applications = () => {
    const { styles: stylesApplications } = useStyles();
    // 获取tab列表数据
    const { data: listData } = useRequest(() => {
        return queryFakeList({
            count: 30,
        });
    });
    const CardInfo = ({ activeUser, newUser }) => (_jsxs("div", { className: stylesApplications.cardInfo, children: [_jsxs("div", { children: [_jsx("p", { children: "\u6D3B\u8DC3\u7528\u6237" }), _jsx("p", { children: activeUser })] }), _jsxs("div", { children: [_jsx("p", { children: "\u65B0\u589E\u7528\u6237" }), _jsx("p", { children: newUser })] })] }));
    return (_jsx(List, { rowKey: "id", className: stylesApplications.filterCardList, grid: {
            gutter: 24,
            xxl: 3,
            xl: 2,
            lg: 2,
            md: 2,
            sm: 2,
            xs: 1,
        }, dataSource: listData?.list || [], renderItem: (item) => (_jsx(List.Item, { children: _jsxs(Card, { hoverable: true, bodyStyle: {
                    paddingBottom: 20,
                }, actions: [
                    _jsx(Tooltip, { title: "\u4E0B\u8F7D", children: _jsx(DownloadOutlined, {}) }, "download"),
                    _jsx(Tooltip, { title: "\u7F16\u8F91", children: _jsx(EditOutlined, {}) }, "edit"),
                    _jsx(Tooltip, { title: "\u5206\u4EAB", children: _jsx(ShareAltOutlined, {}) }, "share"),
                    _jsx(Dropdown, { items: [
                            {
                                key: '1',
                                title: '1st menu item',
                            },
                            {
                                key: '2',
                                title: '2nd menu item',
                            },
                        ], children: _jsx(EllipsisOutlined, {}) }, "ellipsis"),
                ], children: [_jsx(Card.Meta, { avatar: _jsx(Avatar, { size: "small", src: item.avatar }), title: item.title }), _jsx("div", { children: _jsx(CardInfo, { activeUser: formatWan(item.activeUser), newUser: numeral(item.newUser).format('0,0') }) })] }) }, item.id)) }));
};
export default Applications;
