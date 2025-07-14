import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Card, Typography } from 'antd';
const Admin = () => {
    const intl = useIntl();
    return (_jsxs(PageContainer, { content: intl.formatMessage({
            id: 'pages.admin.subPage.title',
            defaultMessage: 'This page can only be viewed by admin',
        }), children: [_jsxs(Card, { children: [_jsx(Alert, { message: intl.formatMessage({
                            id: 'pages.welcome.alertMessage',
                            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
                        }), type: "success", showIcon: true, banner: true, style: {
                            margin: -12,
                            marginBottom: 48,
                        } }), _jsxs(Typography.Title, { level: 2, style: { textAlign: 'center' }, children: [_jsx(SmileTwoTone, {}), " Ant Design Pro ", _jsx(HeartTwoTone, { twoToneColor: "#eb2f96" }), " You"] })] }), _jsxs("p", { style: { textAlign: 'center', marginTop: 24 }, children: ["Want to add more pages? Please refer to", ' ', _jsx("a", { href: "https://pro.ant.design/docs/block-cn", target: "_blank", rel: "noopener noreferrer", children: "use block" }), "\u3002"] })] }));
};
export default Admin;
