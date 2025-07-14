import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DownloadOutlined, EditOutlined, EllipsisOutlined, ShareAltOutlined, } from '@ant-design/icons';
import { useRequest } from '@umijs/max';
import { Avatar, Card, Col, Dropdown, Form, List, Row, Select, Tooltip } from 'antd';
import numeral from 'numeral';
import { categoryOptions } from '../../mock';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import { queryFakeList } from './service';
import useStyles from './style.style';
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
const formItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const CardInfo = ({ activeUser, newUser }) => {
    const { styles } = useStyles();
    return (_jsxs("div", { className: styles.cardInfo, children: [_jsxs("div", { children: [_jsx("p", { children: "\u6D3B\u8DC3\u7528\u6237" }), _jsx("p", { children: activeUser })] }), _jsxs("div", { children: [_jsx("p", { children: "\u65B0\u589E\u7528\u6237" }), _jsx("p", { children: newUser })] })] }));
};
export const Applications = () => {
    const { styles } = useStyles();
    const { data, loading, run } = useRequest((values) => {
        console.log('form data', values);
        return queryFakeList({
            count: 8,
        });
    });
    const list = data?.list || [];
    return (_jsxs("div", { className: styles.filterCardList, children: [_jsx(Card, { bordered: false, children: _jsxs(Form, { onValuesChange: (_, values) => {
                        run(values);
                    }, children: [_jsx(StandardFormRow, { title: "\u6240\u5C5E\u7C7B\u76EE", block: true, style: {
                                paddingBottom: 11,
                            }, children: _jsx(Form.Item, { name: "category", children: _jsx(TagSelect, { expandable: true, children: categoryOptions.map((category) => (_jsx(TagSelect.Option, { value: category.value, children: category.label }, category.value))) }) }) }), _jsx(StandardFormRow, { title: "\u5176\u5B83\u9009\u9879", grid: true, last: true, children: _jsxs(Row, { gutter: 16, children: [_jsx(Col, { lg: 8, md: 10, sm: 10, xs: 24, children: _jsx(Form.Item, { ...formItemLayout, name: "author", label: "\u4F5C\u8005", children: _jsx(Select, { placeholder: "\u4E0D\u9650", style: {
                                                    maxWidth: 200,
                                                    width: '100%',
                                                }, options: [
                                                    {
                                                        label: '王昭君',
                                                        value: 'lisa',
                                                    },
                                                ] }) }) }), _jsx(Col, { lg: 8, md: 10, sm: 10, xs: 24, children: _jsx(Form.Item, { ...formItemLayout, name: "rate", label: "\u597D\u8BC4\u5EA6", children: _jsx(Select, { placeholder: "\u4E0D\u9650", style: {
                                                    maxWidth: 200,
                                                    width: '100%',
                                                }, options: [
                                                    {
                                                        label: '优秀',
                                                        value: 'good',
                                                    },
                                                    {
                                                        label: '普通',
                                                        value: 'normal',
                                                    },
                                                ] }) }) })] }) })] }) }), _jsx("br", {}), _jsx(List, { rowKey: "id", grid: {
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 4,
                    xxl: 4,
                }, loading: loading, dataSource: list, renderItem: (item) => (_jsx(List.Item, { children: _jsxs(Card, { hoverable: true, bodyStyle: {
                            paddingBottom: 20,
                        }, actions: [
                            _jsx(Tooltip, { title: "\u4E0B\u8F7D", children: _jsx(DownloadOutlined, {}) }, "download"),
                            _jsx(Tooltip, { title: "\u7F16\u8F91", children: _jsx(EditOutlined, {}) }, "edit"),
                            _jsx(Tooltip, { title: "\u5206\u4EAB", children: _jsx(ShareAltOutlined, {}) }, "share"),
                            _jsx(Dropdown, { menu: {
                                    items: [
                                        {
                                            key: '1',
                                            title: '1st menu item',
                                        },
                                        {
                                            key: '2',
                                            title: '2st menu item',
                                        },
                                    ],
                                }, children: _jsx(EllipsisOutlined, {}) }, "ellipsis"),
                        ], children: [_jsx(Card.Meta, { avatar: _jsx(Avatar, { size: "small", src: item.avatar }), title: item.title }), _jsx("div", { children: _jsx(CardInfo, { activeUser: formatWan(item.activeUser), newUser: numeral(item.newUser).format('0,0') }) })] }) }, item.id)) })] }));
};
export default Applications;
