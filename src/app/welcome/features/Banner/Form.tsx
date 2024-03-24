
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useGlobalStore } from '@/store/global';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useStyles } from './style';

const LoginForm = memo<{ mobile?: boolean }>(({  mobile }) => {
  const router = useRouter();
  const { styles } = useStyles();
  const [switchBackToChat, isMobile] = useGlobalStore((s) => [s.switchBackToChat, s.isMobile]);

  const onFinish = (values: any) => {
    console.log('登录信息: ', values);
  };

  return (
    <>
     <Form
      name="normal_login"
      className="login-form" 
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <div className={styles.loginHd}>账号登录</div>
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入账号！' }]}
      >
        <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账号" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码！' }]}
      >
        <Input 
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" style={{float:'right'}}>
          忘记密码
        </a>
      </Form.Item>

      <Flexbox
        className={styles.buttonGroup}
        gap={16}
        horizontal={!mobile}
        justify={'center'}
        width={'100%'}
      >
       
        <Button
          block={mobile}
          onClick={() => (isMobile ? router.push('/market') : switchBackToChat())}
          size={'large'} htmlType="submit" className={styles.primaryBtn}
          type={'primary'}
        >
          <Flexbox align={'center'} gap={4} horizontal justify={'center'}>
          登录
          </Flexbox>
        </Button>
      </Flexbox>


    </Form>
      
    </>
  );
});

export default LoginForm;