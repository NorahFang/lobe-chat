'use client';

import { memo } from 'react';

//import Hero from './Hero';
import LoginForm from './Form';
import { useStyles } from './style';
import { useTheme } from 'antd-style';

const Banner = memo<{ mobile?: boolean }>(({ mobile }) => {
  const { styles } = useStyles();
  const theme = useTheme();
  return (
    <>
      
      {/* <div className={styles.container}>
        <Hero mobile={mobile} width={mobile ? 640 : 1024} />
      </div> */}
      <div className={styles.formBox} style={{ borderColor: theme.colorFillTertiary }}>
      <LoginForm mobile={mobile} />
      </div>
    </>
  );
});

export default Banner;
