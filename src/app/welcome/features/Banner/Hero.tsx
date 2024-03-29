
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import { Logo } from '@lobehub/ui';

import { genSize, useStyles } from './style';

const Hero = memo<{ mobile?: boolean; width: number }>(({ width, mobile }) => {
  const size: any = {
    base: genSize(width / 3.5, 240),
    desc: genSize(width / 50, 14),
    logo: genSize(width / 2.5, 180),
    title: genSize(width / 20, 32),
  };

  size.marginTop = mobile ? -size.logo / 9 : -size.logo / 3;
  size.marginBottom = mobile ? size.logo / 9 : size.logo / 4;

  const { styles } = useStyles(size.base);

  const { t } = useTranslation('welcome');

  return (
    <>
      <Flexbox
        style={{
          height: size.mainlogo,
        }}
      >
         <div className={styles.mainlogo} style={mobile ? { display: 'none' }: {} } >
            <Logo  size={40} type={'combine'} className={styles.logo}/>
          </div>
      </Flexbox>
      <div className={styles.title} style={{ fontSize: size.title }}>
        <strong style={mobile ? { fontSize: '1.2em' } : {}}>云智助手</strong>
        {mobile ? <br /> : ' '}
        {t('slogan.title')}
      </div>


      
      
    </>
  );
});

export default Hero;
