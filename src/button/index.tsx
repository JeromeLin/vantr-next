import * as React from 'react';
import classnames from 'classnames';
import type { BaseProps } from '../_internal/base-props';
import { ConfigContext } from '../config-provider/context';
import './style/index';

export interface ButtonProps extends BaseProps {
  /**
   * 设置按钮类型
   * @description.en-US Can be set to `default` `primary` `success` `warning` `danger`
   * @default default
   */
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  /**
   * 设置按钮大小
   * @description.en-US Set the size of button
   * @default normal
   */
  size?: 'nomral' | 'large' | 'small' | 'mini';
  /**
   * 设置按钮形状
   * @description.en-US Can be set button shape
   */
  shape?: 'round' | 'circle';
  /**
   * 朴素按钮
   */
  plain?: boolean;
  /**
   * 设置按钮的图标组件
   * @description.en-US Set the icon component of button
   */
  icon?: React.ReactNode;
  /**
   * 设置按钮的图标显示位置
   * @description.en-US Set the icon display of the button
   * @default left
   */
  iconPosition?: 'left' | 'right';
  /**
   * 按钮颜色, 支持传入 `linear-gradient` 渐变色
   * @description.en-US Button color, support `linear-gradient` gradient color
   */
  color?: string;
  /**
   * 是否为块级元素
   * @description.en-US Option to fit button width to its parent width
   * @default false
   */
  block?: boolean;
  /**
   * 设置按钮载入状态
   * @description.en-US Set the loading status of button
   */
  loading?: boolean;
  /**
   * 设置按钮加载状态显示文本
   * @description.en-US Set button loading status display text
   */
  loadingText?: string;
  /**
   * 设置按钮加载状态显示图标类型
   * @description.en-US Set button loading status display icon type
   * @default circular
   */
  loadingType?: 'circular';
  /**
   * 按钮失效状态
   * @description.en-US Disabled state of button
   */
  disabled?: boolean;
  /**
   * 原生 button 标签的 type 属性
   * @description.en-US Set the original html type of button, see: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type)
   * @default button
   */
  htmlType?: React.ButtonHTMLAttributes<Element>['type'];
  /**
   * 按钮点击事件
   * @description.en-US Button click event
   */
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    type = 'default',
    size = 'normal',
    shape,
    icon,
    iconPosition = 'left',
    plain,
    color,
    block,
    loading,
    loadingText,
    loadingType,
    disabled,
    htmlType = 'button',
    onClick,
    children,
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('button', customizePrefixCls);
  const classes = classnames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-${size}`]: true,
      [`${prefixCls}-${shape}`]: !!shape,
      [`${prefixCls}-plain`]: plain,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-disabled`]: disabled,
    },
    className,
  );

  const styles = React.useMemo(() => {
    const s: React.CSSProperties = { ...style };

    if (!color) return s;

    s.color = plain ? color : 'white';

    if (!plain) {
      s.background = color;
    }

    if (color.includes('gradient')) {
      s.border = 0;
    } else {
      s.borderColor = color;
    }

    return s;
  }, [style]);

  const handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    if (loading) event.preventDefault();
    if (disabled) return;

    onClick?.(event);
  };

  const renderIcon = React.useCallback(() => {
    if (loading) {
      return <div className={`${prefixCls}-icon-loading`}>{icon}</div>;
    }
    if (icon) {
      return <div className={`${prefixCls}-icon`}>{icon}</div>;
    }
  }, [loading, icon]);

  const renderText = React.useCallback(() => {
    const text = loading ? loadingText : children;
    if (text) {
      return <span className={`${prefixCls}-text`}>{text}</span>;
    }
  }, [prefixCls, loading, loadingText, children]);

  return (
    <button
      role="button"
      type={htmlType}
      className={classes}
      style={styles}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={handleClick}
    >
      <div className={`${prefixCls}-content`}>
        {iconPosition === 'left' && renderIcon()}
        {renderText()}
        {iconPosition === 'right' && renderIcon()}
      </div>
    </button>
  );
};

export default Button;
