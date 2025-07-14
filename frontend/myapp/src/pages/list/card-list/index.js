import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Button, Card, List, Typography } from 'antd';
import { queryFakeList } from './service';
import useStyles from './style.style';
const { Paragraph } = Typography;
const CardList = () => {
    const { styles } = useStyles();
    const { data, loading } = useRequest(() => {
        return queryFakeList({
            count: 8,
        });
    });
    const list = data?.list || [];
    const content = (_jsxs("div", { className: styles.pageHeaderContent, children: [_jsx("p", { children: "\u6BB5\u843D\u793A\u610F\uFF1A\u8682\u8681\u91D1\u670D\u52A1\u8BBE\u8BA1\u5E73\u53F0 ant.design\uFF0C\u7528\u6700\u5C0F\u7684\u5DE5\u4F5C\u91CF\uFF0C\u65E0\u7F1D\u63A5\u5165\u8682\u8681\u91D1\u670D\u751F\u6001\uFF0C \u63D0\u4F9B\u8DE8\u8D8A\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u7684\u4F53\u9A8C\u89E3\u51B3\u65B9\u6848\u3002" }), _jsxs("div", { className: styles.contentLink, children: [_jsxs("a", { children: [_jsx("img", { alt: "", src: "https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" }), ' ', "\u5FEB\u901F\u5F00\u59CB"] }), _jsxs("a", { children: [_jsx("img", { alt: "", src: "https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" }), ' ', "\u4EA7\u54C1\u7B80\u4ECB"] }), _jsxs("a", { children: [_jsx("img", { alt: "", src: "https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" }), ' ', "\u4EA7\u54C1\u6587\u6863"] })] })] }));
    const extraContent = (_jsx("div", { className: styles.extraImg, children: _jsx("img", { alt: "\u8FD9\u662F\u4E00\u4E2A\u6807\u9898", src: "https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png" }) }));
    const nullData = {};
    return (_jsx(PageContainer, { content: content, extraContent: extraContent, children: _jsx("div", { className: styles.cardList, children: _jsx(List, { rowKey: "id", loading: loading, grid: {
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 4,
                    xxl: 4,
                }, dataSource: [nullData, ...list], renderItem: (item) => {
                    if (item && item.id) {
                        return (_jsx(List.Item, { children: _jsx(Card, { hoverable: true, className: styles.card, actions: [_jsx("a", { children: "\u64CD\u4F5C\u4E00" }, "option1"), _jsx("a", { children: "\u64CD\u4F5C\u4E8C" }, "option2")], children: _jsx(Card.Meta, { avatar: _jsx("img", { alt: "", className: styles.cardAvatar, src: item.avatar }), title: _jsx("a", { children: item.title }), description: _jsx(Paragraph, { className: styles.item, ellipsis: {
                                            rows: 3,
                                        }, children: item.description }) }) }) }, item.id));
                    }
                    return (_jsx(List.Item, { children: _jsxs(Button, { type: "dashed", className: styles.newButton, children: [_jsx(PlusOutlined, {}), " \u65B0\u589E\u4EA7\u54C1"] }) }));
                } }) }) }));
};
export default CardList;
