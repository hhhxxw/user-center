import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { addRule } from '@/services/ant-design-pro/api';
import { PlusOutlined } from '@ant-design/icons';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { FormattedMessage, useIntl, useRequest } from '@umijs/max';
import { Button, message } from 'antd';
const CreateForm = (props) => {
    const { reload } = props;
    const [messageApi, contextHolder] = message.useMessage();
    /**
     * @en-US International configuration
     * @zh-CN 国际化配置
     * */
    const intl = useIntl();
    const { run, loading } = useRequest(addRule, {
        manual: true,
        onSuccess: () => {
            messageApi.success('Added successfully');
            reload?.();
        },
        onError: () => {
            messageApi.error('Adding failed, please try again!');
        },
    });
    return (_jsxs(_Fragment, { children: [contextHolder, _jsxs(ModalForm, { title: intl.formatMessage({
                    id: 'pages.searchTable.createForm.newRule',
                    defaultMessage: 'New rule',
                }), trigger: _jsx(Button, { type: "primary", icon: _jsx(PlusOutlined, {}), children: _jsx(FormattedMessage, { id: "pages.searchTable.new", defaultMessage: "New" }) }), width: "400px", modalProps: { okButtonProps: { loading } }, onFinish: async (value) => {
                    await run({ data: value });
                    return true;
                }, children: [_jsx(ProFormText, { rules: [
                            {
                                required: true,
                                message: (_jsx(FormattedMessage, { id: "pages.searchTable.ruleName", defaultMessage: "Rule name is required" })),
                            },
                        ], width: "md", name: "name" }), _jsx(ProFormTextArea, { width: "md", name: "desc" })] })] }));
};
export default CreateForm;
