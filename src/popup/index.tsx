import * as React from 'react';
import classnames from 'classnames';
import { BaseProps } from '../_internal/base-props';
import { ConfigContext } from '../config-provider/context';
import Overlay from '../overlay';
import CSSMotion from 'rc-motion';
import './style';

export type PopupPosition = 'center' | 'top' | 'right' | 'bottom' | 'left';
export interface PopupProps extends BaseProps {
  /**
   * 显示弹出层
   * @default false
   */
  visible?: boolean;
  /**
   * 显示遮罩层
   * @default true
   */
  overlay?: boolean;
  /**
   * 自定义遮罩层样式名
   */
  overlayClassName?: string;
  /**
   * 自定义遮罩层样式
   */
  overlayStyle?: React.CSSProperties;
  /**
   * 动画时长，单位秒，设置为 0 可以禁用动画
   * @default 0.3
   */
  duration?: number;
  /**
   * 显示圆角
   * @default false
   */
  round?: boolean;
  /**
   * 锁定背景滚动
   * @default true
   */
  lockScroll?: boolean;
  /**
   * 强制渲染内容
   * @default false
   */
  forceRender?: boolean;
  /**
   * 页面回退时触发关闭
   */
  closeOnPopstate?: boolean;
  /**
   * 点击遮罩层触发关闭
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * 设置弹出位置
   * @default center
   */
  position?: PopupPosition;
  /**
   * 是否开启底部安全区适配
   * @default true
   */
  safeAreaInsetBottom?: boolean;
  /**
   * 点击弹出层时触发
   */
  onClick?: (event: React.SyntheticEvent) => void;
  /**
   * 点击遮罩层时触发
   */
  onClickOverlay?: (event: React.SyntheticEvent) => void;
  /**
   * 打开弹出层时触发
   */
  onOpen?: () => void;
  /**
   * 关闭弹出层时触发
   */
  onClose?: () => void;
  /**
   * 打开弹出层且动画结束后触发
   */
  onOpened?: () => void;
  /**
   * 关闭弹出层且动画结束后触发
   */
  onClosed?: () => void;
}

let globalZIndex = 2000;

const transitionNames = {
  center: 'vanr-fade',
  top: 'vanr-move-up',
  right: 'vanr-move-right',
  bottom: 'vanr-move-down',
  left: 'vanr-move-left',
};

const Popup: React.FC<PopupProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    visible = false,
    overlay = true,
    overlayClassName,
    overlayStyle,
    duration,
    round,
    lockScroll,
    forceRender,
    closeOnPopstate,
    closeOnClickOverlay = true,
    position = 'center',
    onClick,
    onClickOverlay,
    onOpen,
    onClose,
    onOpened,
    onClosed,
    children,
  } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  const zIndex = React.useRef<number>(++globalZIndex);
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('popup', customizePrefixCls);

  const isCenter = position === 'center';

  const handleClickOverlay = (event: React.SyntheticEvent) => {
    onClickOverlay?.(event);
    closeOnClickOverlay && onClose?.();
  };

  const styles: React.CSSProperties = {
    ...props.style,
    zIndex: zIndex.current,
  };

  if (duration) {
    const key = isCenter ? 'animationDuration' : 'transitionDuration';
    styles[key] = `${duration}s`;
  }

  const content = (
    <>
      {overlay && (
        <Overlay
          visible={visible}
          className={overlayClassName}
          style={overlayStyle}
          zIndex={zIndex.current}
          onClick={handleClickOverlay}
        />
      )}
      <CSSMotion
        visible={visible}
        motionName={transitionNames[position]}
        onEnterEnd={onOpened}
        onLeaveEnd={onClosed}
        forceRender={forceRender}
      >
        {({ className, style }) => (
          <div
            ref={ref}
            className={classnames(
              prefixCls,
              {
                [`${prefixCls}-round`]: round,
                [`${prefixCls}-${position}`]: !!position,
              },
              className,
              props.className,
            )}
            style={{ ...style, ...styles }}
            onClick={onClick}
          >
            {children}
          </div>
        )}
      </CSSMotion>
    </>
  );

  return content;
};

export default Popup;
