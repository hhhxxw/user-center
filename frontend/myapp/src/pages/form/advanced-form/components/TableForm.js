import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, message, Popconfirm, Table } from 'antd';
import { useState } from 'react';
import useStyles from '../style.style';
const TableForm = ({ value, onChange }) => {
    const { styles } = useStyles();
    const [clickedCancel, setClickedCancel] = useState(false);
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [cacheOriginData, setCacheOriginData] = useState({});
    const [data, setData] = useState(value);
    const getRowByKey = (key, newData) => (newData || data)?.filter((item) => item.key === key)[0];
    const toggleEditable = (e, key) => {
        e.preventDefault();
        const newData = data?.map((item) => ({
            ...item,
        }));
        const target = getRowByKey(key, newData);
        if (target) {
            // 进入编辑状态时保存原始数据
            if (!target.editable) {
                cacheOriginData[key] = {
                    ...target,
                };
                setCacheOriginData(cacheOriginData);
            }
            target.editable = !target.editable;
            setData(newData);
        }
    };
    const newMember = () => {
        const newData = data?.map((item) => ({
            ...item,
        })) || [];
        newData.push({
            key: `NEW_TEMP_ID_${index}`,
            workId: '',
            name: '',
            department: '',
            editable: true,
            isNew: true,
        });
        setIndex(index + 1);
        setData(newData);
    };
    const remove = (key) => {
        const newData = data?.filter((item) => item.key !== key);
        setData(newData);
        if (onChange) {
            onChange(newData);
        }
    };
    const handleFieldChange = (e, fieldName, key) => {
        const newData = [...data];
        const target = getRowByKey(key, newData);
        if (target && target[fieldName]) {
            target[fieldName] = e.target.value;
            setData(newData);
        }
    };
    const saveRow = (e, key) => {
        e.persist();
        setLoading(true);
        setTimeout(() => {
            if (clickedCancel) {
                setClickedCancel(false);
                return;
            }
            const target = getRowByKey(key) || {};
            if (!target.workId || !target.name || !target.department) {
                message.error('请填写完整成员信息。');
                e.target.focus();
                setLoading(false);
                return;
            }
            delete target.isNew;
            toggleEditable(e, key);
            if (onChange) {
                onChange(data);
            }
            setLoading(false);
        }, 500);
    };
    const handleKeyPress = (e, key) => {
        if (e.key === 'Enter') {
            saveRow(e, key);
        }
    };
    const cancel = (e, key) => {
        setClickedCancel(true);
        e.preventDefault();
        const newData = [...data];
        // 编辑前的原始数据
        let cacheData = [];
        cacheData = newData.map((item) => {
            if (item.key === key) {
                if (cacheOriginData[key]) {
                    const originItem = {
                        ...item,
                        ...cacheOriginData[key],
                        editable: false,
                    };
                    delete cacheOriginData[key];
                    setCacheOriginData(cacheOriginData);
                    return originItem;
                }
            }
            return item;
        });
        setData(cacheData);
        setClickedCancel(false);
    };
    const columns = [
        {
            title: '成员姓名',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            render: (text, record) => {
                if (record.editable) {
                    return (_jsx(Input, { value: text, autoFocus: true, onChange: (e) => handleFieldChange(e, 'name', record.key), onKeyPress: (e) => handleKeyPress(e, record.key), placeholder: "\u6210\u5458\u59D3\u540D" }));
                }
                return text;
            },
        },
        {
            title: '工号',
            dataIndex: 'workId',
            key: 'workId',
            width: '20%',
            render: (text, record) => {
                if (record.editable) {
                    return (_jsx(Input, { value: text, onChange: (e) => handleFieldChange(e, 'workId', record.key), onKeyPress: (e) => handleKeyPress(e, record.key), placeholder: "\u5DE5\u53F7" }));
                }
                return text;
            },
        },
        {
            title: '所属部门',
            dataIndex: 'department',
            key: 'department',
            width: '40%',
            render: (text, record) => {
                if (record.editable) {
                    return (_jsx(Input, { value: text, onChange: (e) => handleFieldChange(e, 'department', record.key), onKeyPress: (e) => handleKeyPress(e, record.key), placeholder: "\u6240\u5C5E\u90E8\u95E8" }));
                }
                return text;
            },
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                if (!!record.editable && loading) {
                    return null;
                }
                if (record.editable) {
                    if (record.isNew) {
                        return (_jsxs("span", { children: [_jsx("a", { onClick: (e) => saveRow(e, record.key), children: "\u6DFB\u52A0" }), _jsx(Divider, { type: "vertical" }), _jsx(Popconfirm, { title: "\u662F\u5426\u8981\u5220\u9664\u6B64\u884C\uFF1F", onConfirm: () => remove(record.key), children: _jsx("a", { children: "\u5220\u9664" }) })] }));
                    }
                    return (_jsxs("span", { children: [_jsx("a", { onClick: (e) => saveRow(e, record.key), children: "\u4FDD\u5B58" }), _jsx(Divider, { type: "vertical" }), _jsx("a", { onClick: (e) => cancel(e, record.key), children: "\u53D6\u6D88" })] }));
                }
                return (_jsxs("span", { children: [_jsx("a", { onClick: (e) => toggleEditable(e, record.key), children: "\u7F16\u8F91" }), _jsx(Divider, { type: "vertical" }), _jsx(Popconfirm, { title: "\u662F\u5426\u8981\u5220\u9664\u6B64\u884C\uFF1F", onConfirm: () => remove(record.key), children: _jsx("a", { children: "\u5220\u9664" }) })] }));
            },
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(Table, { loading: loading, columns: columns, dataSource: data, pagination: false, rowClassName: (record) => (record.editable ? styles.editable : '') }), _jsxs(Button, { style: {
                    width: '100%',
                    marginTop: 16,
                    marginBottom: 8,
                }, type: "dashed", onClick: newMember, children: [_jsx(PlusOutlined, {}), "\u65B0\u589E\u6210\u5458"] })] }));
};
export default TableForm;
