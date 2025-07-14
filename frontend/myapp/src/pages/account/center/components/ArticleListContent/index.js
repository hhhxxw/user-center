import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar } from 'antd';
import dayjs from 'dayjs';
import useStyles from './index.style';
const ArticleListContent = ({ data: { content, updatedAt, avatar, owner, href }, }) => {
    const { styles } = useStyles();
    return (_jsxs("div", { children: [_jsx("div", { className: styles.description, children: content }), _jsxs("div", { className: styles.extra, children: [_jsx(Avatar, { src: avatar, size: "small" }), _jsx("a", { href: href, children: owner }), " \u53D1\u5E03\u5728 ", _jsx("a", { href: href, children: href }), _jsx("em", { children: dayjs(updatedAt).format('YYYY-MM-DD HH:mm') })] })] }));
};
export default ArticleListContent;
