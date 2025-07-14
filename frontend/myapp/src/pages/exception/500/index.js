import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from '@umijs/max';
import { Button, Result } from 'antd';
export default () => (_jsx(Result, { status: "500", title: "500", subTitle: "Sorry, something went wrong.", extra: _jsx(Link, { to: "/", children: _jsx(Button, { type: "primary", children: "Back Home" }) }) }));
