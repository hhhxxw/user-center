import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PlusOutlined } from '@ant-design/icons';
import { FooterToolbar, ModalForm, PageContainer, ProDescriptions, ProFormText, ProFormTextArea, ProTable, } from '@ant-design/pro-components';
import { Button, Drawer, Input, message } from 'antd';
import { useRef, useState } from 'react';
import UpdateForm from './components/UpdateForm';
import { addRule, removeRule, rule, updateRule } from './service';
/**
 * 添加节点
 *
 * @param fields
 */
const handleAdd = async (fields) => {
    const hide = message.loading('正在添加');
    try {
        await addRule({ ...fields });
        hide();
        message.success('添加成功');
        return true;
    }
    catch (error) {
        hide();
        message.error('添加失败请重试！');
        return false;
    }
};
/**
 * 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields, currentRow) => {
    const hide = message.loading('正在配置');
    try {
        await updateRule({
            ...currentRow,
            ...fields,
        });
        hide();
        message.success('配置成功');
        return true;
    }
    catch (error) {
        hide();
        message.error('配置失败请重试！');
        return false;
    }
};
/**
 * 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows) => {
    const hide = message.loading('正在删除');
    if (!selectedRows)
        return true;
    try {
        await removeRule({
            key: selectedRows.map((row) => row.key),
        });
        hide();
        message.success('删除成功，即将刷新');
        return true;
    }
    catch (error) {
        hide();
        message.error('删除失败，请重试');
        return false;
    }
};
const TableList = () => {
    /** 新建窗口的弹窗 */
    const [createModalVisible, handleModalVisible] = useState(false);
    /** 分布更新窗口的弹窗 */
    const [updateModalVisible, handleUpdateModalVisible] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const actionRef = useRef();
    const [currentRow, setCurrentRow] = useState();
    const [selectedRowsState, setSelectedRows] = useState([]);
    /** 国际化配置 */
    const columns = [
        {
            title: '规则名称',
            dataIndex: 'name',
            tip: '规则名称是唯一的 key',
            render: (dom, entity) => {
                return (_jsx("a", { onClick: () => {
                        setCurrentRow(entity);
                        setShowDetail(true);
                    }, children: dom }));
            },
        },
        {
            title: '描述',
            dataIndex: 'desc',
            valueType: 'textarea',
        },
        {
            title: '服务调用次数',
            dataIndex: 'callNo',
            sorter: true,
            hideInForm: true,
            renderText: (val) => `${val}万`,
        },
        {
            title: '状态',
            dataIndex: 'status',
            hideInForm: true,
            valueEnum: {
                0: {
                    text: '关闭',
                    status: 'Default',
                },
                1: {
                    text: '运行中',
                    status: 'Processing',
                },
                2: {
                    text: '已上线',
                    status: 'Success',
                },
                3: {
                    text: '异常',
                    status: 'Error',
                },
            },
        },
        {
            title: '上次调度时间',
            sorter: true,
            dataIndex: 'updatedAt',
            valueType: 'dateTime',
            renderFormItem: (item, { defaultRender, ...rest }, form) => {
                const status = form.getFieldValue('status');
                if (`${status}` === '0') {
                    return false;
                }
                if (`${status}` === '3') {
                    return _jsx(Input, { ...rest, placeholder: "\u8BF7\u8F93\u5165\u5F02\u5E38\u539F\u56E0\uFF01" });
                }
                return defaultRender(item);
            },
        },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
                _jsx("a", { onClick: () => {
                        handleUpdateModalVisible(true);
                        setCurrentRow(record);
                    }, children: "\u914D\u7F6E" }, "config"),
                _jsx("a", { href: "https://procomponents.ant.design/", children: "\u8BA2\u9605\u8B66\u62A5" }, "subscribeAlert"),
            ],
        },
    ];
    return (_jsxs(PageContainer, { children: [_jsx(ProTable, { headerTitle: "\u67E5\u8BE2\u8868\u683C", actionRef: actionRef, rowKey: "key", search: {
                    labelWidth: 120,
                }, toolBarRender: () => [
                    _jsxs(Button, { type: "primary", onClick: () => {
                            handleModalVisible(true);
                        }, children: [_jsx(PlusOutlined, {}), " \u65B0\u5EFA"] }, "primary"),
                ], request: rule, columns: columns, rowSelection: {
                    onChange: (_, selectedRows) => {
                        setSelectedRows(selectedRows);
                    },
                } }), selectedRowsState?.length > 0 && (_jsxs(FooterToolbar, { extra: _jsxs("div", { children: ["\u5DF2\u9009\u62E9", ' ', _jsx("a", { style: {
                                fontWeight: 600,
                            }, children: selectedRowsState.length }), ' ', "\u9879 \u00A0\u00A0", _jsxs("span", { children: ["\u670D\u52A1\u8C03\u7528\u6B21\u6570\u603B\u8BA1 ", selectedRowsState.reduce((pre, item) => pre + item.callNo, 0), " \u4E07"] })] }), children: [_jsx(Button, { onClick: async () => {
                            await handleRemove(selectedRowsState);
                            setSelectedRows([]);
                            actionRef.current?.reloadAndRest?.();
                        }, children: "\u6279\u91CF\u5220\u9664" }), _jsx(Button, { type: "primary", children: "\u6279\u91CF\u5BA1\u6279" })] })), _jsxs(ModalForm, { title: "\u65B0\u5EFA\u89C4\u5219", width: "400px", open: createModalVisible, onVisibleChange: handleModalVisible, onFinish: async (value) => {
                    const success = await handleAdd(value);
                    if (success) {
                        handleModalVisible(false);
                        if (actionRef.current) {
                            actionRef.current.reload();
                        }
                    }
                }, children: [_jsx(ProFormText, { rules: [
                            {
                                required: true,
                                message: '规则名称为必填项',
                            },
                        ], width: "md", name: "name" }), _jsx(ProFormTextArea, { width: "md", name: "desc" })] }), _jsx(UpdateForm, { onSubmit: async (value) => {
                    const success = await handleUpdate(value, currentRow);
                    if (success) {
                        handleUpdateModalVisible(false);
                        setCurrentRow(undefined);
                        if (actionRef.current) {
                            actionRef.current.reload();
                        }
                    }
                }, onCancel: () => {
                    handleUpdateModalVisible(false);
                    setCurrentRow(undefined);
                }, updateModalVisible: updateModalVisible, values: currentRow || {} }), _jsx(Drawer, { width: 600, open: showDetail, onClose: () => {
                    setCurrentRow(undefined);
                    setShowDetail(false);
                }, closable: false, children: currentRow?.name && (_jsx(ProDescriptions, { column: 2, title: currentRow?.name, request: async () => ({
                        data: currentRow || {},
                    }), params: {
                        id: currentRow?.name,
                    }, columns: columns })) })] }));
};
export default TableList;
