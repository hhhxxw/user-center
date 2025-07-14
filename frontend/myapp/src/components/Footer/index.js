import { jsx as _jsx } from "react/jsx-runtime";
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer = () => {
    return (_jsx(DefaultFooter, { style: {
            background: 'none',
        }, copyright: "Powered by Ant Desgin", links: [
            {
                key: 'Ant Design Pro',
                title: 'Ant Design Pro',
                href: 'https://pro.ant.design',
                blankTarget: true,
            },
            {
                key: 'github',
                title: _jsx(GithubOutlined, {}),
                href: 'https://github.com/ant-design/ant-design-pro',
                blankTarget: true,
            },
            {
                key: 'Ant Design',
                title: 'Ant Design',
                href: 'https://ant.design',
                blankTarget: true,
            },
        ] }));
};
export default Footer;
