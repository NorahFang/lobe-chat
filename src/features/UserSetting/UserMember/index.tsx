import { Form, ItemGroup } from '@lobehub/ui';
import { Form as AFrom, Button} from 'antd';
import { useResponsive } from 'antd-style';
import { UserCircle } from 'lucide-react';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { FORM_STYLE } from '@/const/layoutTokens';


const UserMember = memo(() => {
  const { mobile } = useResponsive();

  const { t } = useTranslation('setting');
  const [form] = AFrom.useForm();

  const exitLogin = () => {
    console.log('退出登录')
  };

  const formItems = useMemo(() => {
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
             <span style={{ padding:'0 10px 0 0'}}>xxxxx套餐</span>
            <Button htmlType="button"  >修改套餐</Button>
          </div>
          ),
          label: t('UserMember.package.title'),
          minWidth: undefined,
        },
        {
          children: '0',
          desc:t('UserMember.tokens.desc'),
          label: t('UserMember.tokens.title'),
          minWidth: undefined,
        },
        
        {
          children: '0',
          desc:t('UserMember.askGPT3.desc'),
          label: t('UserMember.askGPT3.title'),
          minWidth: undefined,
        },
        {
          children: '0',
          desc:t('UserMember.askGPT4.desc'),
          label: t('UserMember.askGPT4.title'),
          minWidth: undefined,
        },
      
      ],
      icon: UserCircle,
      title: t('UserMember.title'),
    };
    return [ member];
  }, [
  ]);
  return (
    <Form style={{marginBottom:20}}
     form={form} 
     items={formItems} 
     {...FORM_STYLE}
     footer={
      <>
        <Button htmlType="button"  onClick={exitLogin} style={mobile ? { margin: '10px',width:'100%'} : {margin: '0px',width:'100%'}}>退出登录</Button>
      </>
    }
   /> 
 );
});

export default UserMember;
