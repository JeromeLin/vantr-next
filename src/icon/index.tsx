import * as React from 'react';
import classnames from 'classnames';
import { IconProvider, DEFAULT_ICON_CONFIGS } from '@icon-park/react';
import { BaseProps } from '../_internal/base-props';
import { ConfigContext } from '../config-provider/context';
import './style';

export interface IconProps extends BaseProps {
  /**
   * 图标尺寸
   * @default md
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * 描边宽度
   * @default 4
   */
  strokeWidth?: number;
  /**
   * 描边端点类型
   * @default round
   */
  strokeLinecap?: 'butt' | 'round' | 'square';
  /**
   * 描边连接线类型
   * @default round
   */
  strokeLinejoin?: 'miter' | 'round' | 'bevel';
  /**
   * 默认主题
   * @default outline
   */
  theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color';
  /**
   * 填充色
   */
  fill?: string | string[];
}

const Icon: React.FC<IconProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    size = 'md',
    children,
    ...rest
  } = props;

  const { iconConfig = DEFAULT_ICON_CONFIGS, getPrefixCls } =
    React.useContext(ConfigContext);
  const prefix = getPrefixCls();
  const prefixCls = getPrefixCls('icon', customizePrefixCls);

  const classes = classnames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: !!size,
    },
    className,
  );

  const icon = React.cloneElement(
    React.Children.only(children) as React.ReactElement,
    {
      ...rest,
      strokeWidth: 3,
      size: null,
      className: classes,
    },
  );

  return (
    <IconProvider
      value={{
        ...iconConfig,
        prefix,
      }}
    >
      {icon}
    </IconProvider>
  );
};

export default Icon;
