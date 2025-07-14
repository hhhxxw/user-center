import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalForm, ProFormDateTimePicker, ProFormSelect, ProFormText, ProFormTextArea, } from '@ant-design/pro-components';
import { Button, Result } from 'antd';
import useStyles from '../style.style';
const OperationModal = (props) => {
    const { styles } = useStyles();
    const { done, open, current, onDone, onSubmit, children } = props;
    if (!open) {
        return null;
    }
    return (_jsx(ModalForm, { open: open, title: done ? null : `任务${current ? '编辑' : '添加'}`, className: styles.standardListForm, width: 640, onFinish: async (values) => {
            onSubmit(values);
        }, initialValues: current, submitter: {
            render: (_, dom) => (done ? null : dom),
        }, trigger: _jsx(_Fragment, { children: children }), modalProps: {
            onCancel: () => onDone(),
            destroyOnClose: true,
            bodyStyle: done
                ? {
                    padding: '72px 0',
                }
                : {},
        }, children: !done ? (_jsxs(_Fragment, { children: [_jsx(ProFormText, { name: "title", label: "\u4EFB\u52A1\u540D\u79F0", rules: [
                        {
                            required: true,
                            message: '请输入任务名称',
                        },
                    ], placeholder: "\u8BF7\u8F93\u5165" }), _jsx(ProFormDateTimePicker, { name: "createdAt", label: "\u5F00\u59CB\u65F6\u95F4", rules: [
                        {
                            required: true,
                            message: '请选择开始时间',
                        },
                    ], fieldProps: {
                        style: {
                            width: '100%',
                        },
                    }, placeholder: "\u8BF7\u9009\u62E9" }), _jsx(ProFormSelect, { name: "owner", label: "\u4EFB\u52A1\u8D1F\u8D23\u4EBA", rules: [
                        {
                            required: true,
                            message: '请选择任务负责人',
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
                    ], placeholder: "\u8BF7\u9009\u62E9\u7BA1\u7406\u5458" }), _jsx(ProFormTextArea, { name: "subDescription", label: "\u4EA7\u54C1\u63CF\u8FF0", rules: [
                        {
                            message: '请输入至少五个字符的产品描述！',
                            min: 5,
                        },
                    ], placeholder: "\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26" })] })) : (_jsx(Result, { status: "success", title: "\u64CD\u4F5C\u6210\u529F", subTitle: "\u4E00\u7CFB\u5217\u7684\u4FE1\u606F\u63CF\u8FF0\uFF0C\u5F88\u77ED\u540C\u6837\u4E5F\u53EF\u4EE5\u5E26\u6807\u70B9\u3002", extra: _jsx(Button, { type: "primary", onClick: onDone, children: "\u77E5\u9053\u4E86" }), className: styles.formResult })) }));
};
export default OperationModal;
