import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageContainer, ProForm, ProFormDateRangePicker, ProFormDependency, ProFormDigit, ProFormRadio, ProFormSelect, ProFormText, ProFormTextArea, } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Card, message } from 'antd';
import { fakeSubmitForm } from './service';
import useStyles from './style.style';
const BasicForm = () => {
    const { styles } = useStyles();
    const { run } = useRequest(fakeSubmitForm, {
        manual: true,
        onSuccess: () => {
            message.success('提交成功');
        },
    });
    const onFinish = async (values) => {
        run(values);
    };
    return (_jsx(PageContainer, { content: "\u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002", children: _jsx(Card, { bordered: false, children: _jsxs(ProForm, { hideRequiredMark: true, style: {
                    margin: 'auto',
                    marginTop: 8,
                    maxWidth: 600,
                }, name: "basic", layout: "vertical", initialValues: {
                    public: '1',
                }, onFinish: onFinish, children: [_jsx(ProFormText, { width: "md", label: "\u6807\u9898", name: "title", rules: [
                            {
                                required: true,
                                message: '请输入标题',
                            },
                        ], placeholder: "\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57" }), _jsx(ProFormDateRangePicker, { label: "\u8D77\u6B62\u65E5\u671F", width: "md", name: "date", rules: [
                            {
                                required: true,
                                message: '请选择起止日期',
                            },
                        ], placeholder: ['开始日期', '结束日期'] }), _jsx(ProFormTextArea, { label: "\u76EE\u6807\u63CF\u8FF0", width: "xl", name: "goal", rules: [
                            {
                                required: true,
                                message: '请输入目标描述',
                            },
                        ], placeholder: "\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807" }), _jsx(ProFormTextArea, { label: "\u8861\u91CF\u6807\u51C6", name: "standard", width: "xl", rules: [
                            {
                                required: true,
                                message: '请输入衡量标准',
                            },
                        ], placeholder: "\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6" }), _jsx(ProFormText, { width: "md", label: _jsxs("span", { children: ["\u5BA2\u6237", _jsx("em", { className: styles.optional, children: "\uFF08\u9009\u586B\uFF09" })] }), tooltip: "\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61", name: "client", placeholder: "\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7" }), _jsx(ProFormText, { width: "md", label: _jsxs("span", { children: ["\u9080\u8BC4\u4EBA", _jsx("em", { className: styles.optional, children: "\uFF08\u9009\u586B\uFF09" })] }), name: "invites", placeholder: "\u8BF7\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF7 5 \u4EBA" }), _jsx(ProFormDigit, { label: _jsxs("span", { children: ["\u6743\u91CD", _jsx("em", { className: styles.optional, children: "\uFF08\u9009\u586B\uFF09" })] }), name: "weight", placeholder: "\u8BF7\u8F93\u5165", min: 0, max: 100, width: "xs", fieldProps: {
                            formatter: (value) => `${value || 0}%`,
                            parser: (value) => Number(value ? value.replace('%', '') : '0'),
                        } }), _jsx(ProFormRadio.Group, { options: [
                            {
                                value: '1',
                                label: '公开',
                            },
                            {
                                value: '2',
                                label: '部分公开',
                            },
                            {
                                value: '3',
                                label: '不公开',
                            },
                        ], label: "\u76EE\u6807\u516C\u5F00", help: "\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB", name: "publicType" }), _jsx(ProFormDependency, { name: ['publicType'], children: ({ publicType }) => {
                            return (_jsx(ProFormSelect, { width: "md", name: "publicUsers", fieldProps: {
                                    style: {
                                        margin: '8px 0',
                                        display: publicType && publicType === '2' ? 'block' : 'none',
                                    },
                                }, options: [
                                    {
                                        value: '1',
                                        label: '同事甲',
                                    },
                                    {
                                        value: '2',
                                        label: '同事乙',
                                    },
                                    {
                                        value: '3',
                                        label: '同事丙',
                                    },
                                ] }));
                        } })] }) }) }));
};
export default BasicForm;
