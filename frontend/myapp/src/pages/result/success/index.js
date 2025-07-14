import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { DingdingOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import { Button, Card, Descriptions, Result, Steps } from 'antd';
import { Fragment } from 'react';
import useStyles from './index.style';
const { Step } = Steps;
export default () => {
    const { styles } = useStyles();
    const desc1 = (_jsxs("div", { className: styles.title, children: [_jsxs("div", { style: {
                    margin: '8px 0 4px',
                }, children: [_jsx("span", { children: "\u66F2\u4E3D\u4E3D" }), _jsx(DingdingOutlined, { style: {
                            marginLeft: 8,
                            color: '#00A0E9',
                        } })] }), _jsx("div", { children: "2016-12-12 12:32" })] }));
    const desc2 = (_jsx("div", { style: {
            fontSize: 12,
        }, className: styles.title, children: _jsxs("div", { style: {
                margin: '8px 0 4px',
            }, children: [_jsx("span", { children: "\u5468\u6BDB\u6BDB" }), _jsxs("a", { href: "", children: [_jsx(DingdingOutlined, { style: {
                                color: '#00A0E9',
                                marginLeft: 8,
                            } }), _jsx("span", { children: "\u50AC\u4E00\u4E0B" })] })] }) }));
    const content = (_jsxs(_Fragment, { children: [_jsxs(Descriptions, { title: "\u9879\u76EE\u540D\u79F0", children: [_jsx(Descriptions.Item, { label: "\u9879\u76EE ID", children: "23421" }), _jsx(Descriptions.Item, { label: "\u8D1F\u8D23\u4EBA", children: "\u66F2\u4E3D\u4E3D" }), _jsx(Descriptions.Item, { label: "\u751F\u6548\u65F6\u95F4", children: "2016-12-12 ~ 2017-12-12" })] }), _jsx("br", {}), _jsxs(Steps, { progressDot: true, current: 1, children: [_jsx(Step, { title: _jsx("span", { style: {
                                fontSize: 14,
                            }, children: "\u521B\u5EFA\u9879\u76EE" }), description: desc1 }), _jsx(Step, { title: _jsx("span", { style: {
                                fontSize: 14,
                            }, children: "\u90E8\u95E8\u521D\u5BA1" }), description: desc2 }), _jsx(Step, { title: _jsx("span", { style: {
                                fontSize: 14,
                            }, children: "\u8D22\u52A1\u590D\u6838" }) }), _jsx(Step, { title: _jsx("span", { style: {
                                fontSize: 14,
                            }, children: "\u5B8C\u6210" }) })] })] }));
    const extra = (_jsxs(Fragment, { children: [_jsx(Button, { type: "primary", children: "\u8FD4\u56DE\u5217\u8868" }), _jsx(Button, { children: "\u67E5\u770B\u9879\u76EE" }), _jsx(Button, { children: "\u6253\u5370" })] }));
    return (_jsx(GridContent, { children: _jsx(Card, { bordered: false, children: _jsx(Result, { status: "success", title: "\u63D0\u4EA4\u6210\u529F", subTitle: "\u63D0\u4EA4\u7ED3\u679C\u9875\u7528\u4E8E\u53CD\u9988\u4E00\u7CFB\u5217\u64CD\u4F5C\u4EFB\u52A1\u7684\u5904\u7406\u7ED3\u679C\uFF0C \u5982\u679C\u4EC5\u662F\u7B80\u5355\u64CD\u4F5C\uFF0C\u4F7F\u7528 Message \u5168\u5C40\u63D0\u793A\u53CD\u9988\u5373\u53EF\u3002 \u672C\u6587\u5B57\u533A\u57DF\u53EF\u4EE5\u5C55\u793A\u7B80\u5355\u7684\u8865\u5145\u8BF4\u660E\uFF0C\u5982\u679C\u6709\u7C7B\u4F3C\u5C55\u793A \u201C\u5355\u636E\u201D\u7684\u9700\u6C42\uFF0C\u4E0B\u9762\u8FD9\u4E2A\u7070\u8272\u533A\u57DF\u53EF\u4EE5\u5448\u73B0\u6BD4\u8F83\u590D\u6742\u7684\u5185\u5BB9\u3002", extra: extra, style: {
                    marginBottom: 16,
                }, children: content }) }) }));
};
