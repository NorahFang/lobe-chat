import { Form, ItemGroup } from '@lobehub/ui';
import { Form as AFrom, Input, Button} from 'antd';
import { UserCog,UserCircle } from 'lucide-react';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useGlobalStore } from '@/store/global';
import { settingsSelectors } from '@/store/global/selectors';
import AvatarWithUpload from '@/features/AvatarWithUpload';

import { FORM_STYLE } from '@/const/layoutTokens';


const UserConfig = memo(() => {
  const { t } = useTranslation('setting');
  const [form] = AFrom.useForm();


  const settings = useGlobalStore(settingsSelectors.currentSettings);
  const [setSettings] = useGlobalStore((s) => [s.setSettings,]);


  const onFinish = (values: any) => {
    console.log('表单信息: ', values);
  };
  const exitLogin = () => {
    console.log('退出登录')
  };

  const formItems = useMemo(() => {
    const info: ItemGroup = {
      children: [
        {
          children: <AvatarWithUpload />,
          label: t('settingAgent.avatar.title'),
          minWidth: undefined,
        },
        
        {
          children: (
            <Input
              placeholder={ t('settingUser.name.placeholder')}
            />
          ),
          label: t('settingUser.name.title'),
          name: 'title',
        },
        {
          children: (
            <Input
              placeholder={ t('settingUser.mobile.placeholder')}
            />
          ),
          label: t('settingUser.mobile.title'),
          name: 'mobile',
        },
        {
          children: (
            <Input.Password
              autoComplete={'new-password'}
              placeholder={t('settingUser.password.placeholder')}
            />
          ),
          label: t('settingUser.password.title'),
          name: 'password',
        },
        {
          children: (
            <Button type={'primary'}  htmlType="submit" >
              {t('primary.action')}
            </Button>
          ),
          minWidth: undefined,
        },
      ],
      icon: UserCog,
      title: t('settingUser.title'),
    };
    const member: ItemGroup = {
      children: [
        {
          children: t('UserMember.level.value'),
          label: t('UserMember.level.title'),
          minWidth: undefined,
        },
        {
          children: (
          <div>
             <span style={{ padding:'0 10px 0 0'}}>{t('UserMember.package.value')}</span>
            <Button htmlType="button"  >修改套餐</Button>
          </div>
          ),
          label: t('UserMember.package.title'),
          minWidth: undefined,
        },
        {
          children: t('UserMember.tokens.value'),
          desc:t('UserMember.tokens.desc'),
          label: t('UserMember.tokens.title'),
          minWidth: undefined,
        },
        {
          children: t('UserMember.askGPT3.value'),
          desc:t('UserMember.askGPT3.desc'),
          label: t('UserMember.askGPT3.title'),
          minWidth: undefined,
        },
        {
          children: t('UserMember.askGPT4.value'),
          desc:t('UserMember.askGPT4.desc'),
          label: t('UserMember.askGPT4.title'),
          minWidth: undefined,
        },
      
      ],
      icon: UserCircle,
      title: t('UserMember.title'),
    };
    return [info, member];
  }, [
  ]);

 /*  return (
     <Form
      form={form}
      items={formItems}
      onValuesChange={debounce(updateConfig, 100)}
      {...FORM_STYLE}
    /> 
  ); */
  return (
    <Form
     form={form} initialValues={settings}
     items={formItems} onValuesChange={setSettings}  onFinish={onFinish}
     {...FORM_STYLE}
     footer={
      <>
        <Button htmlType="button"  onClick={exitLogin} style={{ margin:'10px',width:'100%'}}>退出登录</Button>
      </>
    }
   /> 
 );
});

export default UserConfig;
