import { Form, ItemGroup } from '@lobehub/ui';
import { Form as AFrom, Input, Button} from 'antd';
import { UserCog } from 'lucide-react';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useGlobalStore } from '@/store/global';
import { settingsSelectors } from '@/store/global/selectors';
import AvatarWithUpload from '@/features/AvatarWithUpload';

import { FORM_STYLE } from '@/const/layoutTokens';


const UserInfo = memo(() => {
  const { t } = useTranslation('setting');
  const [form] = AFrom.useForm();


  const settings = useGlobalStore(settingsSelectors.currentSettings);
  const [setSettings] = useGlobalStore((s) => [s.setSettings,]);


  const onFinish = (values: any) => {
    console.log('表单信息: ', values);
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
    return [info];
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
   /> 
 );
});

export default UserInfo;
