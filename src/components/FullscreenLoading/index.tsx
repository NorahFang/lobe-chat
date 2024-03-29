import { Icon, Logo } from '@lobehub/ui';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';
import { createStyles } from 'antd-style';
export const useStyles = createStyles(({ css, token }) => ({
    logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
    `,
  }));
const FullscreenLoading = memo<{ title?: string }>(({ title }) => {
  const { styles } = useStyles();
  return (
    <Flexbox height={'100%'} style={{ userSelect: 'none' }} width={'100%'}>
      <Center flex={1} gap={12} width={'100%'}>
        <Logo extra={'启动中'} size={48} type={'combine'} className={styles.logo}/>
        <Center gap={16} horizontal>
          <Icon icon={Loader2} spin />
          {title}
        </Center>
      </Center>
    </Flexbox>
  );
});

export default FullscreenLoading;
