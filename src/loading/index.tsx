import * as React from 'react';
import classnames from 'classnames';
import { BaseProps } from '../_internal/base-props';
import { ConfigContext } from '../config-provider/context';
import './style';

export type LoadingType = 'circular' | 'spinner';
export interface LoadingProps extends BaseProps {
  /**
   * 设置加载组件类型
   * @default circular
   */
  type?: LoadingType;
  /**
   * 设置加载组件大小
   * @default md
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * 设置加载组件颜色
   */
  color?: string;
  /**
   * 是否垂直排列图标和文字内容
   * @default false
   */
  vertical?: boolean;
}

const Loading: React.FC<LoadingProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    type = 'circular',
    size = 'md',
    color,
    vertical,
    children,
  } = props;

  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('loading', customizePrefixCls);
  const classes = classnames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: !!size,
      [`${prefixCls}-vertical`]: vertical,
    },
    className,
  );

  const SpinIcon = Array(12)
    .fill(null)
    .map((_, index) => <i key={index} className={`${prefixCls}-line`} />);

  const CircularIcon = (
    <svg className={`${prefixCls}-circular`} viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" />
    </svg>
  );

  const colorStyle: React.CSSProperties = color ? { color } : {};

  return (
    <div className={classes} style={style}>
      <span
        className={`${prefixCls}-spinner ${prefixCls}-spinner-${type}`}
        style={colorStyle}
      >
        {type === 'spinner' ? SpinIcon : CircularIcon}
      </span>
      {children && (
        <span className={`${prefixCls}-text`} style={colorStyle}>
          {children}
        </span>
      )}
    </div>
  );
};

export default Loading;
