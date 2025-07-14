import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import { Button, Card, Result } from 'antd';
import { Fragment } from 'react';
import useStyles from './index.style';
export default () => {
    const { styles } = useStyles();
    const Content = (_jsxs(Fragment, { children: [_jsx("div", { className: styles.title, children: _jsx("span", { children: "\u60A8\u63D0\u4EA4\u7684\u5185\u5BB9\u6709\u5982\u4E0B\u9519\u8BEF\uFF1A" }) }), _jsxs("div", { style: {
                    marginBottom: 16,
                }, children: [_jsx(CloseCircleOutlined, { style: {
                            marginRight: 8,
                        }, className: styles.error_icon }), _jsx("span", { children: "\u60A8\u7684\u8D26\u6237\u5DF2\u88AB\u51BB\u7ED3" }), _jsxs("a", { style: {
                            marginLeft: 16,
                        }, children: [_jsx("span", { children: "\u7ACB\u5373\u89E3\u51BB" }), _jsx(RightOutlined, {})] })] }), _jsxs("div", { children: [_jsx(CloseCircleOutlined, { style: {
                            marginRight: 8,
                        }, className: styles.error_icon }), _jsx("span", { children: "\u60A8\u7684\u8D26\u6237\u8FD8\u4E0D\u5177\u5907\u7533\u8BF7\u8D44\u683C" }), _jsxs("a", { style: {
                            marginLeft: 16,
                        }, children: [_jsx("span", { children: "\u7ACB\u5373\u5347\u7EA7" }), _jsx(RightOutlined, {})] })] })] }));
    return (_jsx(GridContent, { children: _jsx(Card, { bordered: false, children: _jsx(Result, { status: "error", title: "\u63D0\u4EA4\u5931\u8D25", subTitle: "\u8BF7\u6838\u5BF9\u5E76\u4FEE\u6539\u4EE5\u4E0B\u4FE1\u606F\u540E\uFF0C\u518D\u91CD\u65B0\u63D0\u4EA4\u3002", extra: _jsx(Button, { type: "primary", children: _jsx("span", { children: "\u8FD4\u56DE\u4FEE\u6539" }) }), style: {
                    marginTop: 48,
                    marginBottom: 16,
                }, children: Content }) }) }));
};
