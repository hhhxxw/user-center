import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { removeRule, rule } from '@/services/ant-design-pro/api';
import { FooterToolbar, PageContainer, ProDescriptions, ProTable, } from '@ant-design/pro-components';
import { FormattedMessage, useIntl, useRequest } from '@umijs/max';
import { Button, Drawer, Input, message } from 'antd';
import { useCallback, useRef, useState } from 'react';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
const TableList = () => {
    const actionRef = useRef();
    const [showDetail, setShowDetail] = useState(false);
    const [currentRow, setCurrentRow] = useState();
    const [selectedRowsState, setSelectedRows] = useState([]);
    /**
     * @en-US International configuration
     * @zh-CN 国际化配置
     * */
    const intl = useIntl();
    const [messageApi, contextHolder] = message.useMessage();
    const { run: delRun, loading } = useRequest(removeRule, {
        manual: true,
        onSuccess: () => {
            setSelectedRows([]);
            actionRef.current?.reloadAndRest?.();
            messageApi.success('Deleted successfully and will refresh soon');
        },
        onError: () => {
            messageApi.error('Delete failed, please try again');
        },
    });
    const columns = [
        {
            title: (_jsx(FormattedMessage, { id: "pages.searchTable.updateForm.ruleName.nameLabel", defaultMessage: "Rule name" })),
            dataIndex: 'name',
            tip: 'The rule name is the unique key',
            render: (dom, entity) => {
                return (_jsx("a", { onClick: () => {
                        setCurrentRow(entity);
                        setShowDetail(true);
                    }, children: dom }));
            },
        },
        {
            title: _jsx(FormattedMessage, { id: "pages.searchTable.titleDesc", defaultMessage: "Description" }),
            dataIndex: 'desc',
            valueType: 'textarea',
        },
        {
            title: (_jsx(FormattedMessage, { id: "pages.searchTable.titleCallNo", defaultMessage: "Number of service calls" })),
            dataIndex: 'callNo',
            sorter: true,
            hideInForm: true,
            renderText: (val) => `${val}${intl.formatMessage({
                id: 'pages.searchTable.tenThousand',
                defaultMessage: ' 万 ',
            })}`,
        },
        {
            title: _jsx(FormattedMessage, { id: "pages.searchTable.titleStatus", defaultMessage: "Status" }),
            dataIndex: 'status',
            hideInForm: true,
            valueEnum: {
                0: {
                    text: (_jsx(FormattedMessage, { id: "pages.searchTable.nameStatus.default", defaultMessage: "Shut down" })),
                    status: 'Default',
                },
                1: {
                    text: (_jsx(FormattedMessage, { id: "pages.searchTable.nameStatus.running", defaultMessage: "Running" })),
                    status: 'Processing',
                },
                2: {
                    text: (_jsx(FormattedMessage, { id: "pages.searchTable.nameStatus.online", defaultMessage: "Online" })),
                    status: 'Success',
                },
                3: {
                    text: (_jsx(FormattedMessage, { id: "pages.searchTable.nameStatus.abnormal", defaultMessage: "Abnormal" })),
                    status: 'Error',
                },
            },
        },
        {
            title: (_jsx(FormattedMessage, { id: "pages.searchTable.titleUpdatedAt", defaultMessage: "Last scheduled time" })),
            sorter: true,
            dataIndex: 'updatedAt',
            valueType: 'dateTime',
            renderFormItem: (item, { defaultRender, ...rest }, form) => {
                const status = form.getFieldValue('status');
                if (`${status}` === '0') {
                    return false;
                }
                if (`${status}` === '3') {
                    return (_jsx(Input, { ...rest, placeholder: intl.formatMessage({
                            id: 'pages.searchTable.exception',
                            defaultMessage: 'Please enter the reason for the exception!',
                        }) }));
                }
                return defaultRender(item);
            },
        },
        {
            title: _jsx(FormattedMessage, { id: "pages.searchTable.titleOption", defaultMessage: "Operating" }),
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
                _jsx(UpdateForm, { trigger: _jsx("a", { children: _jsx(FormattedMessage, { id: "pages.searchTable.config", defaultMessage: "Configuration" }) }), onOk: actionRef.current?.reload, values: record }, "config"),
                _jsx("a", { href: "https://procomponents.ant.design/", children: _jsx(FormattedMessage, { id: "pages.searchTable.subscribeAlert", defaultMessage: "Subscribe to alerts" }) }, "subscribeAlert"),
            ],
        },
    ];
    /**
     *  Delete node
     * @zh-CN 删除节点
     *
     * @param selectedRows
     */
    const handleRemove = useCallback(async (selectedRows) => {
        if (!selectedRows?.length) {
            messageApi.warning('请选择删除项');
            return;
        }
        await delRun({
            data: {
                key: selectedRows.map((row) => row.key),
            },
        });
    }, [delRun]);
    return (_jsxs(PageContainer, { children: [contextHolder, _jsx(ProTable, { headerTitle: intl.formatMessage({
                    id: 'pages.searchTable.title',
                    defaultMessage: 'Enquiry form',
                }), actionRef: actionRef, rowKey: "key", search: {
                    labelWidth: 120,
                }, toolBarRender: () => [_jsx(CreateForm, { reload: actionRef.current?.reload }, "create")], request: rule, columns: columns, rowSelection: {
                    onChange: (_, selectedRows) => {
                        setSelectedRows(selectedRows);
                    },
                } }), selectedRowsState?.length > 0 && (_jsxs(FooterToolbar, { extra: _jsxs("div", { children: [_jsx(FormattedMessage, { id: "pages.searchTable.chosen", defaultMessage: "Chosen" }), ' ', _jsx("a", { style: { fontWeight: 600 }, children: selectedRowsState.length }), ' ', _jsx(FormattedMessage, { id: "pages.searchTable.item", defaultMessage: "\u9879" }), "\u00A0\u00A0", _jsxs("span", { children: [_jsx(FormattedMessage, { id: "pages.searchTable.totalServiceCalls", defaultMessage: "Total number of service calls" }), ' ', selectedRowsState.reduce((pre, item) => pre + item.callNo, 0), ' ', _jsx(FormattedMessage, { id: "pages.searchTable.tenThousand", defaultMessage: "\u4E07" })] })] }), children: [_jsx(Button, { loading: loading, onClick: () => {
                            handleRemove(selectedRowsState);
                        }, children: _jsx(FormattedMessage, { id: "pages.searchTable.batchDeletion", defaultMessage: "Batch deletion" }) }), _jsx(Button, { type: "primary", children: _jsx(FormattedMessage, { id: "pages.searchTable.batchApproval", defaultMessage: "Batch approval" }) })] })), _jsx(Drawer, { width: 600, open: showDetail, onClose: () => {
                    setCurrentRow(undefined);
                    setShowDetail(false);
                }, closable: false, children: currentRow?.name && (_jsx(ProDescriptions, { column: 2, title: currentRow?.name, request: async () => ({
                        data: currentRow || {},
                    }), params: {
                        id: currentRow?.name,
                    }, columns: columns })) })] }));
};
export default TableList;
