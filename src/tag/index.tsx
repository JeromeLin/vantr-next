import * as React from 'react';
import { useMemo } from 'react';
import classnames from 'classnames';
import CSSMotion from 'rc-motion';
import { Close } from '@icon-park/react';
import Icon from '../icon';
import { BaseProps } from '../_internal';
import { ConfigContext } from '../config-provider/context';
import './style';

export interface TagProps extends BaseProps {
  /**
   * 标签类型
   * @default default
   */
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  /**
   * 是否展示标签
   * @default true
   */
  visible?: boolean;
  /**
   * 标签大小
   */
  size?: 'lg' | 'sm';
  /**
   * 标记样式
   * @default false
   */
  mark?: boolean;
  /**
   * 标签的颜色
   */
  color?: string;
  /**
   * 是否为空心样式
   * @default false
   */
  plain?: boolean;
  /**
   * 圆角标签
   * @default false
   */
  round?: boolean;
  /**
   * 文本颜色，优先级高于 color 属性
   * @default white
   */
  textColor?: string;
  /**
   * 是否为可关闭标签
   * @default false
   */
  closeable?: boolean;
  /**
   * 关闭标签时触发
   */
  onClose?: (event: React.SyntheticEvent) => void;
}

const Tag: React.FC<TagProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    type = 'default',
    mark,
    color,
    plain,
    round,
    size,
    visible,
    textColor,
    closeable,
    onClose,
    children,
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefix = getPrefixCls();
  const prefixCls = getPrefixCls('tag', customizePrefixCls);

  const styles = useMemo(() => {
    if (plain) {
      return {
        color: textColor || color,
        borderColor: color,
      };
    }
    return {
      color: textColor,
      background: color,
    };
  }, [props.style, color, textColor]);

  const handleClose = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    onClose?.(event);
  };

  return (
    <CSSMotion
      visible={visible}
      motionName={closeable ? `${prefix}-fade` : undefined}
      motionAppear={false}
    >
      {({ className, style }) => (
        <div
          className={classnames(
            prefixCls,
            {
              [`${prefixCls}-${type}`]: !!type,
              [`${prefixCls}-${size}`]: !!size,
              [`${prefixCls}-mark`]: mark,
              [`${prefixCls}-plain`]: plain,
              [`${prefixCls}-round`]: round,
            },
            className,
            props.className,
          )}
          style={{ ...style, ...props.style, ...styles }}
        >
          {children}
          {closeable && (
            <Icon className={`${prefixCls}-close`} onClick={handleClose}>
              <Close />
            </Icon>
          )}
        </div>
      )}
    </CSSMotion>
  );
};

export default Tag;
