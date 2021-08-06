import * as React from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../config-provider/context';
import { BaseProps } from '../_internal/base-props';
import './style';

export interface CellGroupProps extends BaseProps {
  /** 分组标题 */
  title?: React.ReactNode;
  /**
   * 展示为圆角卡片风格
   * @default false
   */
  inset?: boolean;
  /**
   * 显示外边框
   * @default false
   */
  border?: boolean;
}

const CellGroup: React.FC<CellGroupProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    title,
    inset,
    border,
    children,
    ...rest
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);

  const prefix = getPrefixCls();
  const prefixCls = getPrefixCls('cell-group', customizePrefixCls);

  const classes = classnames(
    prefixCls,
    {
      [`${prefixCls}-inset`]: inset,
      [`${prefix}-hairline-top-bottom`]: border && !inset,
    },
    className,
  );

  return (
    <>
      {title && (
        <div
          className={classnames(`${prefixCls}-title`, {
            [`${prefixCls}-inset`]: inset,
          })}
        >
          {title}
        </div>
      )}
      <div className={classes} style={style} {...rest}>
        {children}
      </div>
    </>
  );
};

export default CellGroup;
