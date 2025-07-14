import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRequest } from '@umijs/max';
import { Card, List } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { queryFakeList } from '../../service';
import AvatarList from '../AvatarList';
import useStyles from './index.style';
dayjs.extend(relativeTime);
const Projects = () => {
    const { styles } = useStyles();
    // 获取tab列表数据
    const { data: listData } = useRequest(() => {
        return queryFakeList({
            count: 30,
        });
    });
    return (_jsx(List, { className: styles.coverCardList, rowKey: "id", grid: {
            gutter: 24,
            xxl: 3,
            xl: 2,
            lg: 2,
            md: 2,
            sm: 2,
            xs: 1,
        }, dataSource: listData?.list || [], renderItem: (item) => (_jsx(List.Item, { children: _jsxs(Card, { className: styles.card, hoverable: true, cover: _jsx("img", { alt: item.title, src: item.cover }), children: [_jsx(Card.Meta, { title: _jsx("a", { children: item.title }), description: item.subDescription }), _jsxs("div", { className: styles.cardItemContent, children: [_jsx("span", { children: dayjs(item.updatedAt).fromNow() }), _jsx("div", { className: styles.avatarList, children: _jsx(AvatarList, { size: "small", children: item.members.map((member) => (_jsx(AvatarList.Item, { src: member.avatar, tips: member.name }, `${item.id}-avatar-${member.id}`))) }) })] })] }) })) }));
};
export default Projects;
