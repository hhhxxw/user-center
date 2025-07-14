import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { PageContainer, ProForm, ProFormDigit, ProFormSelect, ProFormText, StepsForm, } from '@ant-design/pro-components';
import { Alert, Button, Card, Descriptions, Divider, Result, Statistic } from 'antd';
import { useRef, useState } from 'react';
import useStyles from './style.style';
const StepDescriptions = ({ stepData, bordered }) => {
    const { payAccount, receiverAccount, receiverName, amount } = stepData;
    return (_jsxs(Descriptions, { column: 1, bordered: bordered, children: [_jsxs(Descriptions.Item, { label: "\u4ED8\u6B3E\u8D26\u6237", children: [" ", payAccount] }), _jsxs(Descriptions.Item, { label: "\u6536\u6B3E\u8D26\u6237", children: [" ", receiverAccount] }), _jsxs(Descriptions.Item, { label: "\u6536\u6B3E\u4EBA\u59D3\u540D", children: [" ", receiverName] }), _jsx(Descriptions.Item, { label: "\u8F6C\u8D26\u91D1\u989D", children: _jsx(Statistic, { value: amount, suffix: _jsx("span", { style: {
                            fontSize: 14,
                        }, children: "\u5143" }), precision: 2 }) })] }));
};
const StepResult = (props) => {
    const { styles } = useStyles();
    return (_jsx(Result, { status: "success", title: "\u64CD\u4F5C\u6210\u529F", subTitle: "\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26", extra: _jsxs(_Fragment, { children: [_jsx(Button, { type: "primary", onClick: props.onFinish, children: "\u518D\u8F6C\u4E00\u7B14" }), _jsx(Button, { children: "\u67E5\u770B\u8D26\u5355" })] }), className: styles.result, children: props.children }));
};
const StepForm = () => {
    const { styles } = useStyles();
    const [stepData, setStepData] = useState({
        payAccount: 'ant-design@alipay.com',
        receiverAccount: 'test@example.com',
        receiverName: 'Alex',
        amount: '500',
        receiverMode: 'alipay',
    });
    const [current, setCurrent] = useState(0);
    const formRef = useRef();
    return (_jsx(PageContainer, { content: "\u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002", children: _jsxs(Card, { bordered: false, children: [_jsxs(StepsForm, { current: current, onCurrentChange: setCurrent, submitter: {
                        render: (props, dom) => {
                            if (props.step === 2) {
                                return null;
                            }
                            return dom;
                        },
                    }, children: [_jsxs(StepsForm.StepForm, { formRef: formRef, title: "\u586B\u5199\u8F6C\u8D26\u4FE1\u606F", initialValues: stepData, onFinish: async (values) => {
                                setStepData(values);
                                return true;
                            }, children: [_jsx(ProFormSelect, { label: "\u4ED8\u6B3E\u8D26\u6237", width: "md", name: "payAccount", rules: [
                                        {
                                            required: true,
                                            message: '请选择付款账户',
                                        },
                                    ], valueEnum: {
                                        'ant-design@alipay.com': 'ant-design@alipay.com',
                                    } }), _jsxs(ProForm.Group, { title: "\u6536\u6B3E\u8D26\u6237", size: 8, children: [_jsx(ProFormSelect, { name: "receiverMode", rules: [
                                                {
                                                    required: true,
                                                    message: '请选择付款账户',
                                                },
                                            ], valueEnum: {
                                                alipay: '支付宝',
                                                bank: '银行账户',
                                            } }), _jsx(ProFormText, { name: "receiverAccount", rules: [
                                                {
                                                    required: true,
                                                    message: '请输入收款人账户',
                                                },
                                                {
                                                    type: 'email',
                                                    message: '账户名应为邮箱格式',
                                                },
                                            ], placeholder: "test@example.com" })] }), _jsx(ProFormText, { label: "\u6536\u6B3E\u4EBA\u59D3\u540D", width: "md", name: "receiverName", rules: [
                                        {
                                            required: true,
                                            message: '请输入收款人姓名',
                                        },
                                    ], placeholder: "\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D" }), _jsx(ProFormDigit, { label: "\u8F6C\u8D26\u91D1\u989D", name: "amount", width: "md", rules: [
                                        {
                                            required: true,
                                            message: '请输入转账金额',
                                        },
                                        {
                                            pattern: /^(\d+)((?:\.\d+)?)$/,
                                            message: '请输入合法金额数字',
                                        },
                                    ], placeholder: "\u8BF7\u8F93\u5165\u91D1\u989D", fieldProps: {
                                        prefix: '￥',
                                    } })] }), _jsx(StepsForm.StepForm, { title: "\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F", children: _jsxs("div", { className: styles.result, children: [_jsx(Alert, { closable: true, showIcon: true, message: "\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002", style: {
                                            marginBottom: 24,
                                        } }), _jsx(StepDescriptions, { stepData: stepData, bordered: true }), _jsx(Divider, { style: {
                                            margin: '24px 0',
                                        } }), _jsx(ProFormText.Password, { label: "\u652F\u4ED8\u5BC6\u7801", width: "md", name: "password", required: false, rules: [
                                            {
                                                required: true,
                                                message: '需要支付密码才能进行支付',
                                            },
                                        ] })] }) }), _jsx(StepsForm.StepForm, { title: "\u5B8C\u6210", children: _jsx(StepResult, { onFinish: async () => {
                                    setCurrent(0);
                                    formRef.current?.resetFields();
                                }, children: _jsx(StepDescriptions, { stepData: stepData }) }) })] }), _jsx(Divider, { style: {
                        margin: '40px 0 24px',
                    } }), _jsxs("div", { children: [_jsx("h3", { children: "\u8BF4\u660E" }), _jsx("h4", { children: "\u8F6C\u8D26\u5230\u652F\u4ED8\u5B9D\u8D26\u6237" }), _jsx("p", { children: "\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002" }), _jsx("h4", { children: "\u8F6C\u8D26\u5230\u94F6\u884C\u5361" }), _jsx("p", { children: "\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002" })] })] }) }));
};
export default StepForm;
