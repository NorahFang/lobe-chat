import { Logo, MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';
import { createStyles } from 'antd-style';
export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
  color: ${token.colorText};
  fill: ${token.colorText};
  `,
}));
const Header = memo(() => {
  const { styles } = useStyles();
  return <MobileNavBar center={<Logo type={'combine'} className={styles.logo}/>} />;
});

export default Header;
