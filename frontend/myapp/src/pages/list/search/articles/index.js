import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { LikeOutlined, LoadingOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useRequest } from '@umijs/max';
import { Button, Card, Col, Form, List, Row, Select, Tag } from 'antd';
import { useMemo } from 'react';
import { categoryOptions } from '../../mock';
import ArticleListContent from './components/ArticleListContent';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import { queryFakeList } from './service';
import useStyles from './style.style';
const FormItem = Form.Item;
const pageSize = 5;
const Articles = () => {
    const [form] = Form.useForm();
    const { styles } = useStyles();
    const { data, reload, loading, loadMore, loadingMore } = useRequest(() => {
        return queryFakeList({
            count: pageSize,
        });
    }, {
        loadMore: true,
    });
    const list = data?.list || [];
    const setOwner = () => {
        form.setFieldsValue({
            owner: ['wzj'],
        });
    };
    const owners = [
        {
            id: 'wzj',
            name: '我自己',
        },
        {
            id: 'wjh',
            name: '吴家豪',
        },
        {
            id: 'zxx',
            name: '周星星',
        },
        {
            id: 'zly',
            name: '赵丽颖',
        },
        {
            id: 'ym',
            name: '姚明',
        },
    ];
    const IconText = ({ type, text }) => {
        switch (type) {
            case 'star-o':
                return (_jsxs("span", { children: [_jsx(StarOutlined, { style: { marginRight: 8 } }), text] }));
            case 'like-o':
                return (_jsxs("span", { children: [_jsx(LikeOutlined, { style: { marginRight: 8 } }), text] }));
            case 'message':
                return (_jsxs("span", { children: [_jsx(MessageOutlined, { style: { marginRight: 8 } }), text] }));
            default:
                return null;
        }
    };
    const formItemLayout = {
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 12 },
        },
    };
    const loadMoreDom = list.length > 0 && (_jsx("div", { style: { textAlign: 'center', marginTop: 16 }, children: _jsx(Button, { onClick: loadMore, style: { paddingLeft: 48, paddingRight: 48 }, children: loadingMore ? (_jsxs("span", { children: [_jsx(LoadingOutlined, {}), " \u52A0\u8F7D\u4E2D..."] })) : ('加载更多') }) }));
    const ownerOptions = useMemo(() => owners.map((item) => ({
        label: item.name,
        value: item.id,
    })), [owners]);
    return (_jsxs(_Fragment, { children: [_jsx(Card, { bordered: false, children: _jsxs(Form, { layout: "inline", form: form, initialValues: {
                        owner: ['wjh', 'zxx'],
                    }, onValuesChange: reload, children: [_jsx(StandardFormRow, { title: "\u6240\u5C5E\u7C7B\u76EE", block: true, style: { paddingBottom: 11 }, children: _jsx(FormItem, { name: "category", children: _jsx(TagSelect, { expandable: true, children: categoryOptions.map((category) => (_jsx(TagSelect.Option, { value: category.value, children: category.label }, category.value))) }) }) }), _jsxs(StandardFormRow, { title: "owner", grid: true, children: [_jsx(FormItem, { name: "owner", noStyle: true, children: _jsx(Select, { mode: "multiple", placeholder: "\u9009\u62E9 owner", style: { minWidth: '6rem' }, options: ownerOptions }) }), _jsx("a", { className: styles.selfTrigger, onClick: setOwner, children: "\u53EA\u770B\u81EA\u5DF1\u7684" })] }), _jsx(StandardFormRow, { title: "\u5176\u5B83\u9009\u9879", grid: true, last: true, children: _jsxs(Row, { gutter: 16, children: [_jsx(Col, { xl: 8, lg: 10, md: 12, sm: 24, xs: 24, children: _jsx(FormItem, { ...formItemLayout, label: "\u6D3B\u8DC3\u7528\u6237", name: "user", children: _jsx(Select, { placeholder: "\u4E0D\u9650", style: { maxWidth: 200, width: '100%' }, options: [
                                                    {
                                                        label: '李三',
                                                        value: 'lisa',
                                                    },
                                                ] }) }) }), _jsx(Col, { xl: 8, lg: 10, md: 12, sm: 24, xs: 24, children: _jsx(FormItem, { ...formItemLayout, label: "\u597D\u8BC4\u5EA6", name: "rate", children: _jsx(Select, { placeholder: "\u4E0D\u9650", style: { maxWidth: 200, width: '100%' }, options: [
                                                    {
                                                        label: '优秀',
                                                        value: 'good',
                                                    },
                                                ] }) }) })] }) })] }) }), _jsx(Card, { style: { marginTop: 24 }, bordered: false, bodyStyle: { padding: '8px 32px 32px 32px' }, children: _jsx(List, { size: "large", loading: loading, rowKey: "id", itemLayout: "vertical", loadMore: loadMoreDom, dataSource: list, renderItem: (item) => (_jsxs(List.Item, { actions: [
                            _jsx(IconText, { type: "star-o", text: item.star }, "star"),
                            _jsx(IconText, { type: "like-o", text: item.like }, "like"),
                            _jsx(IconText, { type: "message", text: item.message }, "message"),
                        ], extra: _jsx("div", { className: styles.listItemExtra }), children: [_jsx(List.Item.Meta, { title: _jsx("a", { className: styles.listItemMetaTitle, href: item.href, children: item.title }), description: _jsxs("span", { children: [_jsx(Tag, { children: "Ant Design" }), _jsx(Tag, { children: "\u8BBE\u8BA1\u8BED\u8A00" }), _jsx(Tag, { children: "\u8682\u8681\u91D1\u670D" })] }) }), _jsx(ArticleListContent, { data: item })] }, item.id)) }) })] }));
};
export default Articles;
