import { Logo, MobileNavBar } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';

//import ShareAgentButton from '../../features/ShareAgentButton';
export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
  color: ${token.colorText};
  fill: ${token.colorText};
  `,
}));
const Header = memo(() => {
  const { styles } = useStyles();
  //return <MobileNavBar className={styles.logo} center={'云智助手'}  />;
  return <MobileNavBar center={<Logo type={'combine'} className={styles.logo} />} />;
  //return <MobileNavBar center={<Logo type={'text'} />} right={<ShareAgentButton mobile />} />;
});

export default Header;
