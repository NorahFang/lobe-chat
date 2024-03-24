import { createStyles } from 'antd-style';
import { rgba } from 'polished';

export const useStyles = createStyles(({ css, token, stylish, cx, prefixCls }) => {
  return {
    buttonGroup: css`
      .${prefixCls}-upload {
        width: 100% !important;
      }
    `,
    container: css`
      z-index: 10;

      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      margin-bottom: 24px;
    `,
    formBox: css`
    z-index: 10;
    width:400px;
    max-width:90%;
    padding: 40px;
    border:2px solid #f5f5f5;
    border-radius:20px;
    box-shadow: 0 0 30px rgba(150,150,150,0.1);
  `,
  primaryBtn: css`
  width: 100%
`,
    desc: css`
      margin-bottom:10px;
      font-weight: 400;
      color: ${rgba(token.colorText, 0.8)};
      text-align: center;
    `,
    layout: css`
      background: ${token.colorBgContainer};
    `,
    logo: css`
      // fill: ${token.colorText};
    `,
    mainlogo: css`
    margin:20px auto;
  `,
    note: css`
      z-index: 10;
      margin-top: 16px;
      color: ${token.colorTextDescription};
    `,
    skip: css`
      color: ${token.colorTextDescription};
    `,
    templateContainer: css`
      flex-wrap: wrap;
      width: 100%;
      padding: 16px;
    `,
    title: css`
      margin-bottom: 0.25em;
      font-weight: 800;
      line-height: 1.4;
      text-align: center;
    `,

    loginHd: css`
      margin-bottom: 0.85em;
      font-weight: 800;
      line-height: 1.4;
      font-size:2em;
      text-align: center;
    `,
    view: cx(
      stylish.noScrollbar,
      css`
        position: relative;

        overflow: hidden auto;

        max-width: 80%;
        padding: 32px 16px;
      `,
    ),
  };
});

export const genSize = (size: number, minSize: number) => {
  return size < minSize ? minSize : size;
};
