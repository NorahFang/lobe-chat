'use client';
import { PropsWithChildren, memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

//import { Logo } from '@lobehub/ui';
import AppLayoutDesktop from '@/layout/welcome/AppLayout.desktop';

import { useStyles } from '../features/Banner/style';


const Desktop = memo<PropsWithChildren>(({ children }) => {
  const { styles } = useStyles();
  return (
    <AppLayoutDesktop>
      <Center
        className={styles.layout}
        flex={1}
        height={'100%'}
        horizontal
        style={{ position: 'relative',background:'none' }}
      >
       {/* <div className={styles.logo} >
       <Logo size={36} type={'combine'} />
       </div> */}
        <Flexbox className={styles.view} flex={1}>
          {children}
        </Flexbox>

      </Center>
    </AppLayoutDesktop>
  );
});

export default Desktop;

