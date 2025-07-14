import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from '@umijs/max';
import { Button, Result } from 'antd';
export default () => (_jsx(Result, { status: "404", title: "404", subTitle: "Sorry, the page you visited does not exist.", extra: _jsx(Link, { to: "/", children: _jsx(Button, { type: "primary", children: "Back Home" }) }) }));
