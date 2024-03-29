import { useTheme } from 'antd-style';
import { ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { createStyles } from 'antd-style';
import { imageUrl } from '@/const/url';

import { useIsPWA } from '@/hooks/useIsPWA';
//import { SidebarTabKey } from '@/store/global/initialState';
const useStyles = createStyles(({ css,token}) => ({
  mainBox: css`
  background-size:cover;
  background-image: url(${imageUrl('loginbg.png')});
`,
}));

interface AppLayoutDesktopProps {
  children: ReactNode;
}
const AppLayoutDesktop = memo<AppLayoutDesktopProps>(({ children, 
  // sidebarKey 
}) => {
  const isPWA = useIsPWA();
  const theme = useTheme();

  const { styles } = useStyles();
  return (
    <Flexbox className={styles.mainBox}
      height={'100%'}
      horizontal
      style={{ backgroundColor: theme.colorBgContainer }}
      // style={isPWA ? { borderTop: `1px solid ${theme.colorBorder}` } : {} }
      width={'100%'}
    >
   
      {children}
    </Flexbox>
  );
});

export default AppLayoutDesktop;
