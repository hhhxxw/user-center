import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { updateRule } from '@/services/ant-design-pro/api';
import { ProFormDateTimePicker, ProFormRadio, ProFormSelect, ProFormText, ProFormTextArea, StepsForm, } from '@ant-design/pro-components';
import { FormattedMessage, useIntl, useRequest } from '@umijs/max';
import { message, Modal } from 'antd';
import { cloneElement, useCallback, useState } from 'react';
const UpdateForm = (props) => {
    const { onOk, values, trigger } = props;
    const intl = useIntl();
    const [open, setOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const { run } = useRequest(updateRule, {
        manual: true,
        onSuccess: () => {
            messageApi.success('Configuration is successful');
            onOk?.();
        },
        onError: () => {
            messageApi.error('Configuration failed, please try again!');
        },
    });
    const onCancel = useCallback(() => {
        setOpen(false);
    }, []);
    const onOpen = useCallback(() => {
        setOpen(true);
    }, []);
    const onFinish = useCallback(async (values) => {
        await run({ data: values });
        onCancel();
    }, [onCancel, run]);
    return (_jsxs(_Fragment, { children: [contextHolder, trigger
                ? cloneElement(trigger, {
                    onClick: onOpen,
                })
                : null, _jsxs(StepsForm, { stepsProps: {
                    size: 'small',
                }, stepsFormRender: (dom, submitter) => {
                    return (_jsx(Modal, { width: 640, bodyStyle: { padding: '32px 40px 48px' }, destroyOnClose: true, title: intl.formatMessage({
                            id: 'pages.searchTable.updateForm.ruleConfig',
                            defaultMessage: '规则配置',
                        }), open: open, footer: submitter, onCancel: onCancel, children: dom }));
                }, onFinish: onFinish, children: [_jsxs(StepsForm.StepForm, { initialValues: values, title: intl.formatMessage({
                            id: 'pages.searchTable.updateForm.basicConfig',
                            defaultMessage: '基本信息',
                        }), children: [_jsx(ProFormText, { name: "name", label: intl.formatMessage({
                                    id: 'pages.searchTable.updateForm.ruleName.nameLabel',
                                    defaultMessage: '规则名称',
                                }), width: "md", rules: [
                                    {
                                        required: true,
                                        message: (_jsx(FormattedMessage, { id: "pages.searchTable.updateForm.ruleName.nameRules", defaultMessage: "\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0\uFF01" })),
                                    },
                                ] }), _jsx(ProFormTextArea, { name: "desc", width: "md", label: intl.formatMessage({
                                    id: 'pages.searchTable.updateForm.ruleDesc.descLabel',
                                    defaultMessage: '规则描述',
                                }), placeholder: intl.formatMessage({
                                    id: 'pages.searchTable.updateForm.ruleDesc.descPlaceholder',
                                    defaultMessage: '请输入至少五个字符',
                                }), rules: [
                                    {
                                        required: true,
                                        message: (_jsx(FormattedMessage, { id: "pages.searchTable.updateForm.ruleDesc.descRules", defaultMessage: "\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u89C4\u5219\u63CF\u8FF0\uFF01" })),
                                        min: 5,
                                    },
                                ] })] }), _jsxs(StepsForm.StepForm, { initialValues: {
                            target: '0',
                            template: '0',
                        }, title: intl.formatMessage({
                            id: 'pages.searchTable.updateForm.ruleProps.title',
                            defaultMessage: '配置规则属性',
                        }), children: [_jsx(ProFormSelect, { name: "target", width: "md", label: intl.formatMessage({
                                    id: 'pages.searchTable.updateForm.object',
                                    defaultMessage: '监控对象',
                                }), valueEnum: {
                                    0: '表一',
                                    1: '表二',
                                } }), _jsx(ProFormSelect, { name: "template", width: "md", label: intl.formatMessage({
                                    id: 'pages.searchTable.updateForm.ruleProps.templateLabel',
                                    defaultMessage: '规则模板',
                                }), valueEnum: {
                                    0: '规则模板一',
                                    1: '规则模板二',
                                } }), _jsx(ProFormRadio.Group, { name: "type", label: intl.formatMessage({
                                    id: 'pages.searchTable.updateForm.ruleProps.typeLabel',
                                    defaultMessage: '规则类型',
                                }), options: [
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
                        }, title: intl.formatMessage({
                            id: 'pages.searchTable.updateForm.schedulingPeriod.title',
                            defaultMessage: '设定调度周期',
                        }), children: [_jsx(ProFormDateTimePicker, { name: "time", width: "md", label: intl.formatMessage({
                                    id: 'pages.searchTable.updateForm.schedulingPeriod.timeLabel',
                                    defaultMessage: '开始时间',
                                }), rules: [
                                    {
                                        required: true,
                                        message: (_jsx(FormattedMessage, { id: "pages.searchTable.updateForm.schedulingPeriod.timeRules", defaultMessage: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01" })),
                                    },
                                ] }), _jsx(ProFormSelect, { name: "frequency", label: intl.formatMessage({
                                    id: 'pages.searchTable.updateForm.object',
                                    defaultMessage: '监控对象',
                                }), width: "md", valueEnum: {
                                    month: '月',
                                    week: '周',
                                } })] })] })] }));
};
export default UpdateForm;
