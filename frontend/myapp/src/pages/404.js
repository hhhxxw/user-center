import { jsx as _jsx } from "react/jsx-runtime";
import { history, useIntl } from '@umijs/max';
import { Button, Result } from 'antd';
const NoFoundPage = () => (_jsx(Result, { status: "404", title: "404", subTitle: useIntl().formatMessage({ id: 'pages.404.subTitle' }), extra: _jsx(Button, { type: "primary", onClick: () => history.push('/'), children: useIntl().formatMessage({ id: 'pages.404.buttonText' }) }) }));
export default NoFoundPage;
