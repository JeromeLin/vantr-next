import * as React from 'react';
import classnames from 'classnames';
import CSSMotion from 'rc-motion';
import { BaseProps } from '../_internal/base-props';
import { preventDefault } from '../_internal/dom/event';
import { ConfigContext } from '../config-provider/context';
import './style';

export interface OverlayProps extends BaseProps {
  /**
   * 是否展示遮罩层
   */
  visible?: boolean;
  /**
   * z-index 层级
   */
  zIndex?: number;
  /**
   * 动画时长，单位秒，设置为 0 可以禁用动画
   */
  duration?: number;
  /**
   * 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
   * @default true
   */
  lockScroll?: boolean;
  /**
   * 点击时触发
   */
  onClick?: (event: React.SyntheticEvent) => void;
}

const Overlay: React.FC<OverlayProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    visible,
    zIndex,
    duration,
    lockScroll = true,
    onClick,
    children,
  } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('overlay', customizePrefixCls);

  const preventTouchMove = (event: React.TouchEvent) => {
    preventDefault(event, true);
  };

  const styles: React.CSSProperties = { ...props.style };

  if (duration) {
    styles.animationDuration = `${duration}s`;
  }

  if (zIndex) {
    styles.zIndex = zIndex;
  }

  return (
    <CSSMotion visible={visible} motionName="vanr-fade">
      {({ className, style }) => (
        <div
          ref={ref}
          className={classnames(prefixCls, className, props.className)}
          style={{ ...style, ...styles }}
          onClick={onClick}
          onTouchMove={lockScroll ? preventTouchMove : undefined}
        >
          {children}
        </div>
      )}
    </CSSMotion>
  );
};

export default Overlay;
