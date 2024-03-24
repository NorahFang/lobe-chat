'use client';

import { useTheme } from 'antd-style';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {  Flexbox } from 'react-layout-kit';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css,token}) => ({
  footer: css`
  position:absolute;
  bottom:40px;
  text-align:center;
`,
}));
const Footer = memo(() => {
  const { styles } = useStyles();
  const theme = useTheme();
  const { t } = useTranslation('common');

  return (
    <Flexbox align={'center'} horizontal justify={'center'} className={styles.footer} >
      <span style={{ color: theme.colorTextHeading }}>
        ©{new Date().getFullYear()} 云智助手
      </span>
    </Flexbox>
  );
});

export default Footer;
