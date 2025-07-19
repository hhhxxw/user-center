import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {PLATFORM_LINK} from "@/constant";
const Footer: React.FC = () => {
  const defaultMessage = '鱼皮出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: 'https://docs.qq.com/doc',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '编程导航',
          href: PLATFORM_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />鱼皮 GitHub</>,
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
