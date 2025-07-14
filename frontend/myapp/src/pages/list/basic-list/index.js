import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Avatar, Button, Card, Col, Dropdown, Input, List, Modal, Progress, Radio, Row, } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import OperationModal from './components/OperationModal';
import { addFakeList, queryFakeList, removeFakeList, updateFakeList } from './service';
import useStyles from './style.style';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Search } = Input;
const Info = ({ title, value, bordered }) => {
    const { styles } = useStyles();
    return (_jsxs("div", { className: styles.headerInfo, children: [_jsx("span", { children: title }), _jsx("p", { children: value }), bordered && _jsx("em", {})] }));
};
const ListContent = ({ data: { owner, createdAt, percent, status }, }) => {
    const { styles } = useStyles();
    return (_jsxs("div", { children: [_jsxs("div", { className: styles.listContentItem, children: [_jsx("span", { children: "Owner" }), _jsx("p", { children: owner })] }), _jsxs("div", { className: styles.listContentItem, children: [_jsx("span", { children: "\u5F00\u59CB\u65F6\u95F4" }), _jsx("p", { children: dayjs(createdAt).format('YYYY-MM-DD HH:mm') })] }), _jsx("div", { className: styles.listContentItem, children: _jsx(Progress, { percent: percent, status: status, strokeWidth: 6, style: {
                        width: 180,
                    } }) })] }));
};
export const BasicList = () => {
    const { styles } = useStyles();
    const [done, setDone] = useState(false);
    const [open, setVisible] = useState(false);
    const [current, setCurrent] = useState(undefined);
    const { data: listData, loading, mutate, } = useRequest(() => {
        return queryFakeList({
            count: 50,
        });
    });
    const { run: postRun } = useRequest((method, params) => {
        if (method === 'remove') {
            return removeFakeList(params);
        }
        if (method === 'update') {
            return updateFakeList(params);
        }
        return addFakeList(params);
    }, {
        manual: true,
        onSuccess: (result) => {
            mutate(result);
        },
    });
    const list = listData?.list || [];
    const paginationProps = {
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize: 5,
        total: list.length,
    };
    const showEditModal = (item) => {
        setVisible(true);
        setCurrent(item);
    };
    const deleteItem = (id) => {
        postRun('remove', {
            id,
        });
    };
    const editAndDelete = (key, currentItem) => {
        if (key === 'edit')
            showEditModal(currentItem);
        else if (key === 'delete') {
            Modal.confirm({
                title: '删除任务',
                content: '确定删除该任务吗？',
                okText: '确认',
                cancelText: '取消',
                onOk: () => deleteItem(currentItem.id),
            });
        }
    };
    const extraContent = (_jsxs("div", { children: [_jsxs(RadioGroup, { defaultValue: "all", children: [_jsx(RadioButton, { value: "all", children: "\u5168\u90E8" }), _jsx(RadioButton, { value: "progress", children: "\u8FDB\u884C\u4E2D" }), _jsx(RadioButton, { value: "waiting", children: "\u7B49\u5F85\u4E2D" })] }), _jsx(Search, { className: styles.extraContentSearch, placeholder: "\u8BF7\u8F93\u5165", onSearch: () => ({}) })] }));
    const MoreBtn = ({ item }) => (_jsx(Dropdown, { menu: {
            onClick: ({ key }) => editAndDelete(key, item),
            items: [
                {
                    key: 'edit',
                    label: '编辑',
                },
                {
                    key: 'delete',
                    label: '删除',
                },
            ],
        }, children: _jsxs("a", { children: ["\u66F4\u591A ", _jsx(DownOutlined, {})] }) }));
    const handleDone = () => {
        setDone(false);
        setVisible(false);
        setCurrent({});
    };
    const handleSubmit = (values) => {
        setDone(true);
        const method = values?.id ? 'update' : 'add';
        postRun(method, values);
    };
    return (_jsxs("div", { children: [_jsx(PageContainer, { children: _jsxs("div", { className: styles.standardList, children: [_jsx(Card, { bordered: false, children: _jsxs(Row, { children: [_jsx(Col, { sm: 8, xs: 24, children: _jsx(Info, { title: "\u6211\u7684\u5F85\u529E", value: "8\u4E2A\u4EFB\u52A1", bordered: true }) }), _jsx(Col, { sm: 8, xs: 24, children: _jsx(Info, { title: "\u672C\u5468\u4EFB\u52A1\u5E73\u5747\u5904\u7406\u65F6\u95F4", value: "32\u5206\u949F", bordered: true }) }), _jsx(Col, { sm: 8, xs: 24, children: _jsx(Info, { title: "\u672C\u5468\u5B8C\u6210\u4EFB\u52A1\u6570", value: "24\u4E2A\u4EFB\u52A1" }) })] }) }), _jsx(Card, { className: styles.listCard, bordered: false, title: "\u57FA\u672C\u5217\u8868", style: {
                                marginTop: 24,
                            }, bodyStyle: {
                                padding: '0 32px 40px 32px',
                            }, extra: extraContent, children: _jsx(List, { size: "large", rowKey: "id", loading: loading, pagination: paginationProps, dataSource: list, renderItem: (item) => (_jsxs(List.Item, { actions: [
                                        _jsx("a", { onClick: (e) => {
                                                e.preventDefault();
                                                showEditModal(item);
                                            }, children: "\u7F16\u8F91" }, "edit"),
                                        _jsx(MoreBtn, { item: item }, "more"),
                                    ], children: [_jsx(List.Item.Meta, { avatar: _jsx(Avatar, { src: item.logo, shape: "square", size: "large" }), title: _jsx("a", { href: item.href, children: item.title }), description: item.subDescription }), _jsx(ListContent, { data: item })] })) }) })] }) }), _jsxs(Button, { type: "dashed", onClick: () => {
                    setVisible(true);
                }, style: {
                    width: '100%',
                    marginBottom: 8,
                }, children: [_jsx(PlusOutlined, {}), "\u6DFB\u52A0"] }), _jsx(OperationModal, { done: done, open: open, current: current, onDone: handleDone, onSubmit: handleSubmit })] }));
};
export default BasicList;
