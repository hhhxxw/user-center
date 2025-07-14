import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { LikeOutlined, MessageFilled, StarTwoTone } from '@ant-design/icons';
import { useRequest } from '@umijs/max';
import { List, Tag } from 'antd';
import { queryFakeList } from '../../service';
import ArticleListContent from '../ArticleListContent';
import useStyles from './index.style';
const Articles = () => {
    const { styles } = useStyles();
    const IconText = ({ icon, text }) => (_jsxs("span", { children: [icon, " ", text] }));
    // 获取tab列表数据
    const { data: listData } = useRequest(() => {
        return queryFakeList({
            count: 30,
        });
    });
    return (_jsx(List, { size: "large", className: styles.articleList, rowKey: "id", itemLayout: "vertical", dataSource: listData?.list || [], renderItem: (item) => (_jsxs(List.Item, { actions: [
                _jsx(IconText, { icon: _jsx(StarTwoTone, {}), text: item.star }, "star"),
                _jsx(IconText, { icon: _jsx(LikeOutlined, {}), text: item.like }, "like"),
                _jsx(IconText, { icon: _jsx(MessageFilled, {}), text: item.message }, "message"),
            ], children: [_jsx(List.Item.Meta, { title: _jsx("a", { className: styles.listItemMetaTitle, href: item.href, children: item.title }), description: _jsxs("span", { children: [_jsx(Tag, { children: "Ant Design" }), _jsx(Tag, { children: "\u8BBE\u8BA1\u8BED\u8A00" }), _jsx(Tag, { children: "\u8682\u8681\u91D1\u670D" })] }) }), _jsx(ArticleListContent, { data: item })] }, item.id)) }));
};
export default Articles;
