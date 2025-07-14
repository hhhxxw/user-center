import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Badge, Card, Descriptions, Divider } from 'antd';
import { queryBasicProfile } from './service';
import useStyles from './style.style';
const progressColumns = [
    {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '当前进度',
        dataIndex: 'rate',
        key: 'rate',
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (text) => {
            if (text === 'success') {
                return _jsx(Badge, { status: "success", text: "\u6210\u529F" });
            }
            return _jsx(Badge, { status: "processing", text: "\u8FDB\u884C\u4E2D" });
        },
    },
    {
        title: '操作员ID',
        dataIndex: 'operator',
        key: 'operator',
    },
    {
        title: '耗时',
        dataIndex: 'cost',
        key: 'cost',
    },
];
const Basic = () => {
    const { styles } = useStyles();
    const { data, loading } = useRequest(() => {
        return queryBasicProfile();
    });
    const { basicGoods, basicProgress } = data || {
        basicGoods: [],
        basicProgress: [],
    };
    let goodsData = [];
    if (basicGoods.length) {
        let num = 0;
        let amount = 0;
        basicGoods.forEach((item) => {
            num += Number(item.num);
            amount += Number(item.amount);
        });
        goodsData = basicGoods.concat({
            id: '总计',
            num,
            amount,
        });
    }
    const renderContent = (value, _, index) => {
        const obj = {
            children: value,
            props: {},
        };
        if (index === basicGoods.length) {
            obj.props.colSpan = 0;
        }
        return obj;
    };
    const goodsColumns = [
        {
            title: '商品编号',
            dataIndex: 'id',
            key: 'id',
            render: (text, _, index) => {
                if (index < basicGoods.length) {
                    return _jsx("span", { children: text });
                }
                return {
                    children: (_jsx("span", { style: {
                            fontWeight: 600,
                        }, children: "\u603B\u8BA1" })),
                    props: {
                        colSpan: 4,
                    },
                };
            },
        },
        {
            title: '商品名称',
            dataIndex: 'name',
            key: 'name',
            render: renderContent,
        },
        {
            title: '商品条码',
            dataIndex: 'barcode',
            key: 'barcode',
            render: renderContent,
        },
        {
            title: '单价',
            dataIndex: 'price',
            key: 'price',
            align: 'right',
            render: renderContent,
        },
        {
            title: '数量（件）',
            dataIndex: 'num',
            key: 'num',
            align: 'right',
            render: (text, _, index) => {
                if (index < basicGoods.length) {
                    return text;
                }
                return (_jsx("span", { style: {
                        fontWeight: 600,
                    }, children: text }));
            },
        },
        {
            title: '金额',
            dataIndex: 'amount',
            key: 'amount',
            align: 'right',
            render: (text, _, index) => {
                if (index < basicGoods.length) {
                    return text;
                }
                return (_jsx("span", { style: {
                        fontWeight: 600,
                    }, children: text }));
            },
        },
    ];
    return (_jsx(PageContainer, { children: _jsxs(Card, { bordered: false, children: [_jsxs(Descriptions, { title: "\u9000\u6B3E\u7533\u8BF7", style: {
                        marginBottom: 32,
                    }, children: [_jsx(Descriptions.Item, { label: "\u53D6\u8D27\u5355\u53F7", children: "1000000000" }), _jsx(Descriptions.Item, { label: "\u72B6\u6001", children: "\u5DF2\u53D6\u8D27" }), _jsx(Descriptions.Item, { label: "\u9500\u552E\u5355\u53F7", children: "1234123421" }), _jsx(Descriptions.Item, { label: "\u5B50\u8BA2\u5355", children: "3214321432" })] }), _jsx(Divider, { style: {
                        marginBottom: 32,
                    } }), _jsxs(Descriptions, { title: "\u7528\u6237\u4FE1\u606F", style: {
                        marginBottom: 32,
                    }, children: [_jsx(Descriptions.Item, { label: "\u7528\u6237\u59D3\u540D", children: "\u4ED8\u5C0F\u5C0F" }), _jsx(Descriptions.Item, { label: "\u8054\u7CFB\u7535\u8BDD", children: "18100000000" }), _jsx(Descriptions.Item, { label: "\u5E38\u7528\u5FEB\u9012", children: "\u83DC\u9E1F\u4ED3\u50A8" }), _jsx(Descriptions.Item, { label: "\u53D6\u8D27\u5730\u5740", children: "\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u4E07\u5858\u8DEF18\u53F7" }), _jsx(Descriptions.Item, { label: "\u5907\u6CE8", children: "\u65E0" })] }), _jsx(Divider, { style: {
                        marginBottom: 32,
                    } }), _jsx("div", { className: styles.title, children: "\u9000\u8D27\u5546\u54C1" }), _jsx(ProTable, { style: {
                        marginBottom: 24,
                    }, pagination: false, search: false, loading: loading, options: false, toolBarRender: false, dataSource: goodsData, columns: goodsColumns, rowKey: "id" }), _jsx("div", { className: styles.title, children: "\u9000\u8D27\u8FDB\u5EA6" }), _jsx(ProTable, { style: {
                        marginBottom: 16,
                    }, pagination: false, loading: loading, search: false, options: false, toolBarRender: false, dataSource: basicProgress, columns: progressColumns })] }) }));
};
export default Basic;
