'use client';

import { Logo } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Flex } from 'antd';
import { memo } from 'react';
//import { Flexbox } from 'react-layout-kit';

import Banner from '@/app/welcome/features/Banner';

const useStyles = createStyles(({ css,token}) => ({
  logo: css`
  position:absolute;
  top:40px;
  `,
}));
const Showcase = memo(() => {
  const { styles } = useStyles();
  return (
    <Flex>
      <Flex  style={{  flex: '1' }}>
        <Logo size={36} type={'combine'} className={styles.logo} />
      </Flex>
      <Flex  align="center"  vertical
        style={{  position: 'relative' }}
        >
          <Banner />
    </Flex>

    </Flex>
  //    <Flexbox
  //    flex={1}
  //    justify={'flex-end'}
  //    style={{ height: '100%', position: 'relative', width: '100%' }}
  //  >
  //    <Banner />
  //  </Flexbox>
  );
});

export default Showcase;

