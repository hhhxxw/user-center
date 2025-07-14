import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRequest } from '@umijs/max';
import { Card, Col, Form, List, Row, Select, Typography } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { categoryOptions } from '../../mock';
import AvatarList from './components/AvatarList';
import StandardFormRow from './components/StandardFormRow';
import TagSelect from './components/TagSelect';
import { queryFakeList } from './service';
import useStyles from './style.style';
dayjs.extend(relativeTime);
const FormItem = Form.Item;
const { Paragraph } = Typography;
const getKey = (id, index) => `${id}-${index}`;
const Projects = () => {
    const { styles } = useStyles();
    const { data, loading, run } = useRequest((values) => {
        console.log('form data', values);
        return queryFakeList({
            count: 8,
        });
    });
    const list = data?.list || [];
    const cardList = list && (_jsx(List, { rowKey: "id", loading: loading, grid: {
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
        }, dataSource: list, renderItem: (item) => (_jsx(List.Item, { children: _jsxs(Card, { className: styles.card, hoverable: true, cover: _jsx("img", { alt: item.title, src: item.cover }), children: [_jsx(Card.Meta, { title: _jsx("a", { children: item.title }), description: _jsx(Paragraph, { ellipsis: {
                                rows: 2,
                            }, children: item.subDescription }) }), _jsxs("div", { className: styles.cardItemContent, children: [_jsx("span", { children: dayjs(item.updatedAt).fromNow() }), _jsx("div", { className: styles.avatarList, children: _jsx(AvatarList, { size: "small", children: item.members.map((member, i) => (_jsx(AvatarList.Item, { src: member.avatar, tips: member.name }, getKey(item.id, i)))) }) })] })] }) })) }));
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
    return (_jsxs("div", { className: styles.coverCardList, children: [_jsx(Card, { bordered: false, children: _jsxs(Form, { layout: "inline", onValuesChange: (_, values) => {
                        // 表单项变化时请求数据
                        // 模拟查询表单生效
                        run(values);
                    }, children: [_jsx(StandardFormRow, { title: "\u6240\u5C5E\u7C7B\u76EE", block: true, style: {
                                paddingBottom: 11,
                            }, children: _jsx(FormItem, { name: "category", children: _jsx(TagSelect, { expandable: true, children: categoryOptions.map((category) => (_jsx(TagSelect.Option, { value: category.value, children: category.label }, category.value))) }) }) }), _jsx(StandardFormRow, { title: "\u5176\u5B83\u9009\u9879", grid: true, last: true, children: _jsxs(Row, { gutter: 16, children: [_jsx(Col, { lg: 8, md: 10, sm: 10, xs: 24, children: _jsx(FormItem, { ...formItemLayout, label: "\u4F5C\u8005", name: "author", children: _jsx(Select, { placeholder: "\u4E0D\u9650", style: {
                                                    maxWidth: 200,
                                                    width: '100%',
                                                }, options: [
                                                    {
                                                        label: '王昭君',
                                                        value: 'lisa',
                                                    },
                                                ] }) }) }), _jsx(Col, { lg: 8, md: 10, sm: 10, xs: 24, children: _jsx(FormItem, { ...formItemLayout, label: "\u597D\u8BC4\u5EA6", name: "rate", children: _jsx(Select, { placeholder: "\u4E0D\u9650", style: {
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
                                                ] }) }) })] }) })] }) }), _jsx("div", { className: styles.cardList, children: cardList })] }));
};
export default Projects;
