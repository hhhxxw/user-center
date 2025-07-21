import Footer from '@/components/Footer';
import {register} from '@/services/ant-design-pro/api';

import {LockOutlined, UserOutlined,} from '@ant-design/icons';
import {LoginForm, ProFormText,} from '@ant-design/pro-components';
import { message, Tabs} from 'antd';
import React, {useState} from 'react';
import {history, useModel} from 'umi';
import styles from './index.less';
import { SYSTM_LOGO} from "@/constant";

// const LoginMessage: React.FC<{
//   content: string;
// }> = ({ content }) => (
//   <Alert
//     style={{
//       marginBottom: 24,
//     }}
//     message={content}
//     type="error"
//     showIcon
//   />
// );
const Register: React.FC = () => {
  // const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo,
      }));
    }
  };
  // 提交表单
  const handleSubmit = async (values: API.RegisterParams) => {
    const {userPassword, checkPassword} = values;
    // 校验
    if(userPassword != checkPassword){
      message.error("两次密码输入不一致");
      return;
    }
    try {
      // // 登录
      // const user = await login({
      //   ...values,
      //   type,
      // });
      // 注册
      // const user = await login(values);
      const id = await register(values);
      if (id > 0) {
        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        const { query } = history.location;
        // const { redirect } = query as {
        //   redirect: string;
        // };
        history.push({
          pathname: '/user/login',
          query,
        });
        return;
      }else{
        throw new Error(`register error id = ${id}`);
      }
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };
  // const { status, type: loginType } = userLoginState;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: '注册'
            }
          }}
          logo={<img alt="logo" src={SYSTM_LOGO} />}
          title="编程导航知识星球"
          // subTitle=<a href="https://pro.ant.design/">最好的编程学习知识圈子</a>
          initialValues={{
            autoLogin: true,
          }}
          // actions={[
          //   '其他登录方式 :',
          //   <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.icon} />,
          //   <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={styles.icon} />,
          //   <WeiboCircleOutlined key="WeiboCircleOutlined" className={styles.icon} />,
          // ]}
          onFinish={async (values) => {
            await handleSubmit(values as API.RegisterParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'账户密码登录'} />
            {/*<Tabs.TabPane key="mobile" tab={'手机号登录'} />*/}
          </Tabs>

          {/*{status === 'error' && loginType === 'account' && (*/}
          {/*  <LoginMessage content={'错误的账号和密码'} />*/}
          {/*)}*/}
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入账号'}
                rules={[
                  {
                    required: true,
                    message: '账号是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '密码长度不能小于 8 位！',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请确认密码'}
                rules={[
                  {
                    required: true,
                    message: '确认密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '密码长度不能小于 8 位！',
                  },
                ]}
              />
            </>
          )}

          {/*{status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}*/}
          {/*<div*/}
          {/*  style={{*/}
          {/*    marginBottom: 24,*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <ProFormCheckbox noStyle name="autoLogin">*/}
          {/*    自动登录*/}
          {/*  </ProFormCheckbox>*/}
          {/*  <a*/}
          {/*    style={{*/}
          {/*      float: 'right',*/}
          {/*    }}*/}
          {/*    href={PLATFORM_LINK}*/}
          {/*    target="_blank" rel="noreferrer"*/}
          {/*  >*/}
          {/*    忘记密码联系鱼皮*/}
          {/*  </a>*/}
          {/*</div>*/}
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
