import * as React from 'react';
import classnames from 'classnames';
import { Check, Attention } from '@icon-park/react';
import { BaseProps, GetContainer } from '../_internal';
import Popup from '../popup';
import Loading, { LoadingType } from '../loading';
import { ConfigContext } from '../config-provider';
import Icon from '../icon';
import './style';

export interface ToastProps extends BaseProps {
  /**
   * 提示类型
   * @default info
   */
  type?: 'info' | 'loading' | 'success' | 'fail';
  /**
   * 显示位置
   * @default center
   */
  position?: 'top' | 'middle' | 'center';
  /**
   * 显示轻提示
   * @default false
   */
  visible?: boolean;
  /**
   * 显示背景遮罩层
   * @default false
   */
  overlay?: boolean;
  /**
   * 提示内容
   */
  message?: React.ReactNode;
  /**
   * 自定义图标
   */
  icon?: React.ReactNode;
  /**
   * 加载图标类型
   * @default circular
   */
  loadingType?: LoadingType;
  /**
   * 展示时长(ms)，值为 0 时，toast 不会消失
   * @default 2000
   */
  duration?: number;
  /**
   * 禁止背景点击
   * @default false
   */
  forbidClick?: Boolean;
  /** 自定义遮罩层类名 */
  overlayClassName?: string;
  /** 自定义遮罩层样式 */
  overlayStyle?: React.CSSProperties;
  /**
   * 是否在点击后关闭
   * @default false
   */
  closeOnClick?: boolean;
  /**
   * 是否在点击遮罩层后关闭
   * @default false
   */
  closeOnClickOverlay?: boolean;
  /**
   * 指定挂载节点
   */
  container?: GetContainer;
  /**
   * 关闭时的回调函数
   */
  onClose?: () => void;
  /**
   * 完全展示后的回调函数
   */
  onOpened?: () => void;
  /**
   * 完全关闭后的回调函数
   */
  onClosed?: () => void;
}

export const Toast: React.FC<ToastProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    type = 'info',
    position = 'middle',
    message,
    icon,
    loadingType,
    visible = false,
    overlay = true,
    overlayClassName,
    overlayStyle,
    closeOnClickOverlay,
    container,
    onClose,
    onOpened,
    onClosed,
  } = props;
  const timer = React.useRef<NodeJS.Timeout>();
  const clickable = React.useRef(false);

  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('toast', customizePrefixCls);
  const classes = classnames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: !icon,
      [`${prefixCls}-${position}`]: position !== 'center',
    },
    className,
  );

  const clear = () => {
    timer.current && clearTimeout(timer.current);
    onClosed?.();
  };

  const getCustomIcon = () => {
    switch (type) {
      case 'success':
        return <Check />;
      case 'fail':
        return <Attention />;
      default:
        return icon;
    }
  };

  const renderIcon = () => {
    const custom = getCustomIcon();
    if (custom) {
      return <Icon className={`${prefixCls}-icon`}>{custom}</Icon>;
    }

    if (type === 'loading') {
      return <Loading className={`${prefixCls}-loading`} type={loadingType} />;
    }
  };

  return (
    <Popup
      className={classes}
      style={style}
      visible={visible}
      overlay={overlay}
      overlayClassName={overlayClassName}
      overlayStyle={overlayStyle}
      closeOnClickOverlay={closeOnClickOverlay}
      lockScroll={false}
      onClosed={clear}
      container={container}
      onClose={onClose}
      onOpened={onOpened}
    >
      {renderIcon()}
      {message && <div className={`${prefixCls}-message`}>{message}</div>}
    </Popup>
  );
};
