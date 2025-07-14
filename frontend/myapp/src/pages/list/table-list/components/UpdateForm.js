import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ProFormDateTimePicker, ProFormRadio, ProFormSelect, ProFormText, ProFormTextArea, StepsForm, } from '@ant-design/pro-components';
import { Modal } from 'antd';
const UpdateForm = (props) => {
    return (_jsxs(StepsForm, { stepsProps: {
            size: 'small',
        }, stepsFormRender: (dom, submitter) => {
            return (_jsx(Modal, { width: 640, bodyStyle: {
                    padding: '32px 40px 48px',
                }, destroyOnClose: true, title: "\u89C4\u5219\u914D\u7F6E", open: props.updateModalVisible, footer: submitter, onCancel: () => {
                    props.onCancel();
                }, children: dom }));
        }, onFinish: props.onSubmit, children: [_jsxs(StepsForm.StepForm, { initialValues: {
                    name: props.values.name,
                    desc: props.values.desc,
                }, title: "\u57FA\u672C\u4FE1\u606F", children: [_jsx(ProFormText, { name: "name", label: "\u89C4\u5219\u540D\u79F0", width: "md", rules: [
                            {
                                required: true,
                                message: '请输入规则名称！',
                            },
                        ] }), _jsx(ProFormTextArea, { name: "desc", width: "md", label: "\u89C4\u5219\u63CF\u8FF0", placeholder: "\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26", rules: [
                            {
                                required: true,
                                message: '请输入至少五个字符的规则描述！',
                                min: 5,
                            },
                        ] })] }), _jsxs(StepsForm.StepForm, { initialValues: {
                    target: '0',
                    template: '0',
                }, title: "\u914D\u7F6E\u89C4\u5219\u5C5E\u6027", children: [_jsx(ProFormSelect, { name: "target", width: "md", label: "\u76D1\u63A7\u5BF9\u8C61", valueEnum: {
                            0: '表一',
                            1: '表二',
                        } }), _jsx(ProFormSelect, { name: "template", width: "md", label: "\u89C4\u5219\u6A21\u677F", valueEnum: {
                            0: '规则模板一',
                            1: '规则模板二',
                        } }), _jsx(ProFormRadio.Group, { name: "type", label: "\u89C4\u5219\u7C7B\u578B", options: [
                            {
                                value: '0',
                                label: '强',
                            },
                            {
                                value: '1',
                                label: '弱',
                            },
                        ] })] }), _jsxs(StepsForm.StepForm, { initialValues: {
                    type: '1',
                    frequency: 'month',
                }, title: "\u8BBE\u5B9A\u8C03\u5EA6\u5468\u671F", children: [_jsx(ProFormDateTimePicker, { name: "time", width: "md", label: "\u5F00\u59CB\u65F6\u95F4", rules: [
                            {
                                required: true,
                                message: '请选择开始时间！',
                            },
                        ] }), _jsx(ProFormSelect, { name: "frequency", label: "\u76D1\u63A7\u5BF9\u8C61", width: "md", valueEnum: {
                            month: '月',
                            week: '周',
                        } })] })] }));
};
export default UpdateForm;
