import { BLOG_Link } from '@/constants';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'code',
          title: '个人博客',
          href: BLOG_Link,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: BLOG_Link,
          blankTarget: true,
        },
        {
          key: 'code1',
          title: 'HXW GitHub',
          href: BLOG_Link,
          blankTarget: true,
        },
      ]}
      copyright={`${new Date().getFullYear()} HXW 版权所有`}
    />
  );
};

export default Footer;
