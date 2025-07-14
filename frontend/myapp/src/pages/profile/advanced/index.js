import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DingdingOutlined, DownOutlined, EllipsisOutlined, InfoCircleOutlined, } from '@ant-design/icons';
import { GridContent, PageContainer, RouteContext } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Badge, Button, Card, Descriptions, Divider, Dropdown, Empty, Popover, Space, Statistic, Steps, Table, Tooltip, } from 'antd';
import classNames from 'classnames';
import { Fragment, useState } from 'react';
import { queryAdvancedProfile } from './service';
import useStyles from './style.style';
const { Step } = Steps;
const ButtonGroup = Button.Group;
const action = (_jsx(RouteContext.Consumer, { children: ({ isMobile }) => {
        if (isMobile) {
            return (_jsx(Dropdown.Button, { type: "primary", icon: _jsx(DownOutlined, {}), menu: {
                    items: [
                        {
                            key: '1',
                            label: '操作一',
                        },
                        {
                            key: '2',
                            label: '操作二',
                        },
                        {
                            key: '3',
                            label: '操作三',
                        },
                    ],
                }, placement: "bottomRight", children: "\u4E3B\u64CD\u4F5C" }));
        }
        return (_jsxs(Space, { children: [_jsxs(ButtonGroup, { children: [_jsx(Button, { children: "\u64CD\u4F5C\u4E00" }), _jsx(Button, { children: "\u64CD\u4F5C\u4E8C" }), _jsx(Dropdown, { menu: {
                                items: [
                                    {
                                        key: '1',
                                        label: '选项一',
                                    },
                                    {
                                        key: '2',
                                        label: '选项二',
                                    },
                                    {
                                        key: '3',
                                        label: '选项三',
                                    },
                                ],
                            }, placement: "bottomRight", children: _jsx(Button, { children: _jsx(EllipsisOutlined, {}) }) })] }), _jsx(Button, { type: "primary", children: "\u4E3B\u64CD\u4F5C" })] }));
    } }));
const operationTabList = [
    {
        key: 'tab1',
        tab: '操作日志一',
    },
    {
        key: 'tab2',
        tab: '操作日志二',
    },
    {
        key: 'tab3',
        tab: '操作日志三',
    },
];
const columns = [
    {
        title: '操作类型',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: '操作人',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '执行结果',
        dataIndex: 'status',
        key: 'status',
        render: (text) => {
            if (text === 'agree') {
                return _jsx(Badge, { status: "success", text: "\u6210\u529F" });
            }
            return _jsx(Badge, { status: "error", text: "\u9A73\u56DE" });
        },
    },
    {
        title: '操作时间',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
    },
    {
        title: '备注',
        dataIndex: 'memo',
        key: 'memo',
    },
];
const Advanced = () => {
    const { styles } = useStyles();
    const extra = (_jsxs("div", { className: styles.moreInfo, children: [_jsx(Statistic, { title: "\u72B6\u6001", value: "\u5F85\u5BA1\u6279" }), _jsx(Statistic, { title: "\u8BA2\u5355\u91D1\u989D", value: 568.08, prefix: "\u00A5" })] }));
    const description = (_jsx(RouteContext.Consumer, { children: ({ isMobile }) => (_jsxs(Descriptions, { className: styles.headerList, size: "small", column: isMobile ? 1 : 2, children: [_jsx(Descriptions.Item, { label: "\u521B\u5EFA\u4EBA", children: "\u66F2\u4E3D\u4E3D" }), _jsx(Descriptions.Item, { label: "\u8BA2\u8D2D\u4EA7\u54C1", children: "XX \u670D\u52A1" }), _jsx(Descriptions.Item, { label: "\u521B\u5EFA\u65F6\u95F4", children: "2017-07-07" }), _jsx(Descriptions.Item, { label: "\u5173\u8054\u5355\u636E", children: _jsx("a", { href: "", children: "12421" }) }), _jsx(Descriptions.Item, { label: "\u751F\u6548\u65E5\u671F", children: "2017-07-07 ~ 2017-08-08" }), _jsx(Descriptions.Item, { label: "\u5907\u6CE8", children: "\u8BF7\u4E8E\u4E24\u4E2A\u5DE5\u4F5C\u65E5\u5185\u786E\u8BA4" })] })) }));
    const desc1 = (_jsxs("div", { className: classNames(styles.stepDescription), children: [_jsxs(Fragment, { children: ["\u66F2\u4E3D\u4E3D", _jsx(DingdingOutlined, { style: {
                            marginLeft: 8,
                        } })] }), _jsx("div", { children: "2016-12-12 12:32" })] }));
    const desc2 = (_jsxs("div", { className: styles.stepDescription, children: [_jsxs(Fragment, { children: ["\u5468\u6BDB\u6BDB", _jsx(DingdingOutlined, { style: {
                            color: '#00A0E9',
                            marginLeft: 8,
                        } })] }), _jsx("div", { children: _jsx("a", { href: "", children: "\u50AC\u4E00\u4E0B" }) })] }));
    const [tabStatus, seTabStatus] = useState({
        operationKey: 'tab1',
        tabActiveKey: 'detail',
    });
    const customDot = (dot, { status, }) => {
        const popoverContent = (_jsxs("div", { style: {
                width: 160,
            }, children: ["\u5434\u52A0\u53F7", _jsx("span", { style: {
                        float: 'right',
                    }, children: _jsx(Badge, { status: "default", text: _jsx("span", { style: {
                                color: 'rgba(0, 0, 0, 0.45)',
                            }, children: "\u672A\u54CD\u5E94" }) }) }), _jsx("div", { style: {
                        marginTop: 4,
                    }, children: "\u8017\u65F6\uFF1A2\u5C0F\u65F625\u5206\u949F" })] }));
        if (status === 'process') {
            return (_jsx(Popover, { placement: "topLeft", arrowPointAtCenter: true, content: popoverContent, children: _jsx("span", { children: dot }) }));
        }
        return dot;
    };
    const { data = {}, loading } = useRequest(queryAdvancedProfile);
    const { advancedOperation1, advancedOperation2, advancedOperation3 } = data;
    const contentList = {
        tab1: (_jsx(Table, { pagination: false, loading: loading, dataSource: advancedOperation1, columns: columns })),
        tab2: (_jsx(Table, { pagination: false, loading: loading, dataSource: advancedOperation2, columns: columns })),
        tab3: (_jsx(Table, { pagination: false, loading: loading, dataSource: advancedOperation3, columns: columns })),
    };
    const onTabChange = (tabActiveKey) => {
        seTabStatus({
            ...tabStatus,
            tabActiveKey,
        });
    };
    const onOperationTabChange = (key) => {
        seTabStatus({
            ...tabStatus,
            operationKey: key,
        });
    };
    return (_jsx(PageContainer, { title: "\u5355\u53F7\uFF1A234231029431", extra: action, className: styles.pageHeader, content: description, extraContent: extra, tabActiveKey: tabStatus.tabActiveKey, onTabChange: onTabChange, tabList: [
            {
                key: 'detail',
                tab: '详情',
            },
            {
                key: 'rule',
                tab: '规则',
            },
        ], children: _jsx("div", { className: styles.main, children: _jsxs(GridContent, { children: [_jsx(Card, { title: "\u6D41\u7A0B\u8FDB\u5EA6", style: {
                            marginBottom: 24,
                        }, children: _jsx(RouteContext.Consumer, { children: ({ isMobile }) => (_jsxs(Steps, { direction: isMobile ? 'vertical' : 'horizontal', progressDot: customDot, current: 1, children: [_jsx(Step, { title: "\u521B\u5EFA\u9879\u76EE", description: desc1 }), _jsx(Step, { title: "\u90E8\u95E8\u521D\u5BA1", description: desc2 }), _jsx(Step, { title: "\u8D22\u52A1\u590D\u6838" }), _jsx(Step, { title: "\u5B8C\u6210" })] })) }) }), _jsxs(Card, { title: "\u7528\u6237\u4FE1\u606F", style: {
                            marginBottom: 24,
                        }, bordered: false, children: [_jsxs(Descriptions, { style: {
                                    marginBottom: 24,
                                }, children: [_jsx(Descriptions.Item, { label: "\u7528\u6237\u59D3\u540D", children: "\u4ED8\u5C0F\u5C0F" }), _jsx(Descriptions.Item, { label: "\u4F1A\u5458\u5361\u53F7", children: "32943898021309809423" }), _jsx(Descriptions.Item, { label: "\u8EAB\u4EFD\u8BC1", children: "3321944288191034921" }), _jsx(Descriptions.Item, { label: "\u8054\u7CFB\u65B9\u5F0F", children: "18112345678" }), _jsx(Descriptions.Item, { label: "\u8054\u7CFB\u5730\u5740", children: "\u66F2\u4E3D\u4E3D 18100000000 \u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u9EC4\u59D1\u5C71\u8DEF\u5DE5\u4E13\u8DEF\u4EA4\u53C9\u8DEF\u53E3" })] }), _jsxs(Descriptions, { style: {
                                    marginBottom: 24,
                                }, title: "\u4FE1\u606F\u7EC4", children: [_jsx(Descriptions.Item, { label: "\u67D0\u67D0\u6570\u636E", children: "725" }), _jsx(Descriptions.Item, { label: "\u8BE5\u6570\u636E\u66F4\u65B0\u65F6\u95F4", children: "2017-08-08" }), _jsx(Descriptions.Item, { label: _jsxs("span", { children: ["\u67D0\u67D0\u6570\u636E", _jsx(Tooltip, { title: "\u6570\u636E\u8BF4\u660E", children: _jsx(InfoCircleOutlined, { style: {
                                                            color: 'rgba(0, 0, 0, 0.43)',
                                                            marginLeft: 4,
                                                        } }) })] }), children: "725" }), _jsx(Descriptions.Item, { label: "\u8BE5\u6570\u636E\u66F4\u65B0\u65F6\u95F4", children: "2017-08-08" })] }), _jsx("h4", { style: {
                                    marginBottom: 16,
                                }, children: "\u4FE1\u606F\u7EC4" }), _jsxs(Card, { type: "inner", title: "\u591A\u5C42\u7EA7\u4FE1\u606F\u7EC4", children: [_jsxs(Descriptions, { style: {
                                            marginBottom: 16,
                                        }, title: "\u7EC4\u540D\u79F0", children: [_jsx(Descriptions.Item, { label: "\u8D1F\u8D23\u4EBA", children: "\u6797\u4E1C\u4E1C" }), _jsx(Descriptions.Item, { label: "\u89D2\u8272\u7801", children: "1234567" }), _jsx(Descriptions.Item, { label: "\u6240\u5C5E\u90E8\u95E8", children: "XX\u516C\u53F8 - YY\u90E8" }), _jsx(Descriptions.Item, { label: "\u8FC7\u671F\u65F6\u95F4", children: "2017-08-08" }), _jsx(Descriptions.Item, { label: "\u63CF\u8FF0", children: "\u8FD9\u6BB5\u63CF\u8FF0\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F..." })] }), _jsx(Divider, { style: {
                                            margin: '16px 0',
                                        } }), _jsx(Descriptions, { style: {
                                            marginBottom: 16,
                                        }, title: "\u7EC4\u540D\u79F0", column: 1, children: _jsx(Descriptions.Item, { label: "\u5B66\u540D", children: "Citrullus lanatus (Thunb.) Matsum. et Nakai\u4E00\u5E74\u751F\u8513\u751F\u85E4\u672C\uFF1B\u830E\u3001\u679D\u7C97\u58EE\uFF0C\u5177\u660E\u663E\u7684\u68F1\u3002\u5377\u987B\u8F83\u7C97.." }) }), _jsx(Divider, { style: {
                                            margin: '16px 0',
                                        } }), _jsxs(Descriptions, { title: "\u7EC4\u540D\u79F0", children: [_jsx(Descriptions.Item, { label: "\u8D1F\u8D23\u4EBA", children: "\u4ED8\u5C0F\u5C0F" }), _jsx(Descriptions.Item, { label: "\u89D2\u8272\u7801", children: "1234568" })] })] })] }), _jsx(Card, { title: "\u7528\u6237\u8FD1\u534A\u5E74\u6765\u7535\u8BB0\u5F55", style: {
                            marginBottom: 24,
                        }, bordered: false, children: _jsx(Empty, {}) }), _jsx(Card, { bordered: false, tabList: operationTabList, onTabChange: onOperationTabChange, children: contentList[tabStatus.operationKey] })] }) }) }));
};
export default Advanced;
