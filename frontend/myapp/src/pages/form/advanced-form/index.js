import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CloseCircleOutlined } from '@ant-design/icons';
import { EditableProTable, FooterToolbar, PageContainer, ProForm, ProFormDateRangePicker, ProFormSelect, ProFormText, ProFormTimePicker, } from '@ant-design/pro-components';
import { Card, Col, message, Popover, Row } from 'antd';
import { useState } from 'react';
import { fakeSubmitForm } from './service';
import useStyles from './style.style';
const fieldLabels = {
    name: '仓库名',
    url: '仓库域名',
    owner: '仓库管理员',
    approver: '审批人',
    dateRange: '生效日期',
    type: '仓库类型',
    name2: '任务名',
    url2: '任务描述',
    owner2: '执行人',
    approver2: '责任人',
    dateRange2: '生效日期',
    type2: '任务类型',
};
const tableData = [
    {
        key: '1',
        workId: '00001',
        name: 'John Brown',
        department: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        workId: '00002',
        name: 'Jim Green',
        department: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        workId: '00003',
        name: 'Joe Black',
        department: 'Sidney No. 1 Lake Park',
    },
];
const AdvancedForm = () => {
    const { styles } = useStyles();
    const [error, setError] = useState([]);
    const getErrorInfo = (errors) => {
        const errorCount = errors.filter((item) => item.errors.length > 0).length;
        if (!errors || errorCount === 0) {
            return null;
        }
        const scrollToField = (fieldKey) => {
            const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
            if (labelNode) {
                labelNode.scrollIntoView(true);
            }
        };
        const errorList = errors.map((err) => {
            if (!err || err.errors.length === 0) {
                return null;
            }
            const key = err.name[0];
            return (_jsxs("li", { className: styles.errorListItem, onClick: () => scrollToField(key), children: [_jsx(CloseCircleOutlined, { className: styles.errorIcon }), _jsx("div", { className: styles.errorMessage, children: err.errors[0] }), _jsx("div", { className: styles.errorField, children: fieldLabels[key] })] }, key));
        });
        return (_jsxs("span", { className: styles.errorIcon, children: [_jsx(Popover, { title: "\u8868\u5355\u6821\u9A8C\u4FE1\u606F", content: errorList, overlayClassName: styles.errorPopover, trigger: "click", getPopupContainer: (trigger) => {
                        if (trigger && trigger.parentNode) {
                            return trigger.parentNode;
                        }
                        return trigger;
                    }, children: _jsx(CloseCircleOutlined, {}) }), errorCount] }));
    };
    const onFinish = async (values) => {
        setError([]);
        try {
            await fakeSubmitForm(values);
            message.success('提交成功');
        }
        catch {
            // console.log
        }
    };
    const onFinishFailed = (errorInfo) => {
        setError(errorInfo.errorFields);
    };
    const columns = [
        {
            title: '成员姓名',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
        },
        {
            title: '工号',
            dataIndex: 'workId',
            key: 'workId',
            width: '20%',
        },
        {
            title: '所属部门',
            dataIndex: 'department',
            key: 'department',
            width: '40%',
        },
        {
            title: '操作',
            key: 'action',
            valueType: 'option',
            render: (_, record, index, action) => {
                return [
                    _jsx("a", { onClick: () => {
                            action?.startEditable(record.key);
                        }, children: "\u7F16\u8F91" }, "eidit"),
                ];
            },
        },
    ];
    return (_jsx(ProForm, { layout: "vertical", hideRequiredMark: true, submitter: {
            render: (props, dom) => {
                return (_jsxs(FooterToolbar, { children: [getErrorInfo(error), dom] }));
            },
        }, initialValues: {
            members: tableData,
        }, onFinish: onFinish, onFinishFailed: onFinishFailed, children: _jsxs(PageContainer, { content: "\u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002", children: [_jsxs(Card, { title: "\u4ED3\u5E93\u7BA1\u7406", className: styles.card, bordered: false, children: [_jsxs(Row, { gutter: 16, children: [_jsx(Col, { lg: 6, md: 12, sm: 24, children: _jsx(ProFormText, { label: fieldLabels.name, name: "name", rules: [
                                            {
                                                required: true,
                                                message: '请输入仓库名称',
                                            },
                                        ], placeholder: "\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0" }) }), _jsx(Col, { xl: {
                                        span: 6,
                                        offset: 2,
                                    }, lg: {
                                        span: 8,
                                    }, md: {
                                        span: 12,
                                    }, sm: 24, children: _jsx(ProFormText, { label: fieldLabels.url, name: "url", rules: [
                                            {
                                                required: true,
                                                message: '请选择',
                                            },
                                        ], fieldProps: {
                                            style: {
                                                width: '100%',
                                            },
                                            addonBefore: 'http://',
                                            addonAfter: '.com',
                                        }, placeholder: "\u8BF7\u8F93\u5165" }) }), _jsx(Col, { xl: {
                                        span: 8,
                                        offset: 2,
                                    }, lg: {
                                        span: 10,
                                    }, md: {
                                        span: 24,
                                    }, sm: 24, children: _jsx(ProFormSelect, { label: fieldLabels.owner, name: "owner", rules: [
                                            {
                                                required: true,
                                                message: '请选择管理员',
                                            },
                                        ], options: [
                                            {
                                                label: '付晓晓',
                                                value: 'xiao',
                                            },
                                            {
                                                label: '周毛毛',
                                                value: 'mao',
                                            },
                                        ], placeholder: "\u8BF7\u9009\u62E9\u7BA1\u7406\u5458" }) })] }), _jsxs(Row, { gutter: 16, children: [_jsx(Col, { lg: 6, md: 12, sm: 24, children: _jsx(ProFormSelect, { label: fieldLabels.approver, name: "approver", rules: [
                                            {
                                                required: true,
                                                message: '请选择审批员',
                                            },
                                        ], options: [
                                            {
                                                label: '付晓晓',
                                                value: 'xiao',
                                            },
                                            {
                                                label: '周毛毛',
                                                value: 'mao',
                                            },
                                        ], placeholder: "\u8BF7\u9009\u62E9\u5BA1\u6279\u5458" }) }), _jsx(Col, { xl: {
                                        span: 6,
                                        offset: 2,
                                    }, lg: {
                                        span: 8,
                                    }, md: {
                                        span: 12,
                                    }, sm: 24, children: _jsx(ProFormDateRangePicker, { label: fieldLabels.dateRange, name: "dateRange", fieldProps: {
                                            style: {
                                                width: '100%',
                                            },
                                        }, rules: [
                                            {
                                                required: true,
                                                message: '请选择生效日期',
                                            },
                                        ] }) }), _jsx(Col, { xl: {
                                        span: 8,
                                        offset: 2,
                                    }, lg: {
                                        span: 10,
                                    }, md: {
                                        span: 24,
                                    }, sm: 24, children: _jsx(ProFormSelect, { label: fieldLabels.type, name: "type", rules: [
                                            {
                                                required: true,
                                                message: '请选择仓库类型',
                                            },
                                        ], options: [
                                            {
                                                label: '私密',
                                                value: 'private',
                                            },
                                            {
                                                label: '公开',
                                                value: 'public',
                                            },
                                        ], placeholder: "\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B" }) })] })] }), _jsxs(Card, { title: "\u4EFB\u52A1\u7BA1\u7406", className: styles.card, bordered: false, children: [_jsxs(Row, { gutter: 16, children: [_jsx(Col, { lg: 6, md: 12, sm: 24, children: _jsx(ProFormText, { label: fieldLabels.name2, name: "name2", rules: [
                                            {
                                                required: true,
                                                message: '请输入',
                                            },
                                        ] }) }), _jsx(Col, { xl: {
                                        span: 6,
                                        offset: 2,
                                    }, lg: {
                                        span: 8,
                                    }, md: {
                                        span: 12,
                                    }, sm: 24, children: _jsx(ProFormText, { label: fieldLabels.url2, name: "url2", rules: [
                                            {
                                                required: true,
                                                message: '请选择',
                                            },
                                        ] }) }), _jsx(Col, { xl: {
                                        span: 8,
                                        offset: 2,
                                    }, lg: {
                                        span: 10,
                                    }, md: {
                                        span: 24,
                                    }, sm: 24, children: _jsx(ProFormSelect, { label: fieldLabels.owner2, name: "owner2", rules: [
                                            {
                                                required: true,
                                                message: '请选择管理员',
                                            },
                                        ], options: [
                                            {
                                                label: '付晓晓',
                                                value: 'xiao',
                                            },
                                            {
                                                label: '周毛毛',
                                                value: 'mao',
                                            },
                                        ] }) })] }), _jsxs(Row, { gutter: 16, children: [_jsx(Col, { lg: 6, md: 12, sm: 24, children: _jsx(ProFormSelect, { label: fieldLabels.approver2, name: "approver2", rules: [
                                            {
                                                required: true,
                                                message: '请选择审批员',
                                            },
                                        ], options: [
                                            {
                                                label: '付晓晓',
                                                value: 'xiao',
                                            },
                                            {
                                                label: '周毛毛',
                                                value: 'mao',
                                            },
                                        ], placeholder: "\u8BF7\u9009\u62E9\u5BA1\u6279\u5458" }) }), _jsx(Col, { xl: {
                                        span: 6,
                                        offset: 2,
                                    }, lg: {
                                        span: 8,
                                    }, md: {
                                        span: 12,
                                    }, sm: 24, children: _jsx(ProFormTimePicker, { label: fieldLabels.dateRange2, name: "dateRange2", rules: [
                                            {
                                                required: true,
                                                message: '请输入',
                                            },
                                        ], placeholder: "\u63D0\u9192\u65F6\u95F4", fieldProps: {
                                            style: {
                                                width: '100%',
                                            },
                                        } }) }), _jsx(Col, { xl: {
                                        span: 8,
                                        offset: 2,
                                    }, lg: {
                                        span: 10,
                                    }, md: {
                                        span: 24,
                                    }, sm: 24, children: _jsx(ProFormSelect, { label: fieldLabels.type2, name: "type2", rules: [
                                            {
                                                required: true,
                                                message: '请选择仓库类型',
                                            },
                                        ], options: [
                                            {
                                                label: '私密',
                                                value: 'private',
                                            },
                                            {
                                                label: '公开',
                                                value: 'public',
                                            },
                                        ], placeholder: "\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B" }) })] })] }), _jsx(Card, { title: "\u6210\u5458\u7BA1\u7406", bordered: false, children: _jsx(ProForm.Item, { name: "members", children: _jsx(EditableProTable, { recordCreatorProps: {
                                record: () => {
                                    return {
                                        key: `0${Date.now()}`,
                                    };
                                },
                            }, columns: columns, rowKey: "key" }) }) })] }) }));
};
export default AdvancedForm;
