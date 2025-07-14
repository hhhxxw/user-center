import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from '@umijs/max';
import { Button, Result } from 'antd';
export default () => (_jsx(Result, { status: "403", title: "403", subTitle: "Sorry, you are not authorized to access this page.", extra: _jsx(Link, { to: "/", children: _jsx(Button, { type: "primary", children: "Back to home" }) }) }));
