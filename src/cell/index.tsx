import * as React from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import { ConfigContext } from '../config-provider/context';
import { BaseProps } from '../_internal/base-props';
import './style';
import { Down, Left, Right, Up } from '@icon-park/react';

export interface CellProps extends BaseProps {
  /** 设置右侧内容 */
  extra?: React.ReactNode;
  /** 设置左侧下方辅助说明 */
  brief?: React.ReactNode;
  /** 设置左侧图标 */
  icon?: React.ReactNode;
  /**
   * 子元素垂直对齐
   * @default middle
   */
  align?: 'top' | 'middle' | 'bottom';
  /** 单元格大小 */
  size?: 'large';
  /**
   * 是否显示内边框
   * @default true
   */
  border?: boolean;
  /**
   * 箭头方向
   * @type 'up' | 'down' | 'left' | 'right'
   * @default right
   */
  arrow?: 'up' | 'down' | 'left' | 'right' | true;
  /**
   * 开启点击反馈
   * @default false
   */
  clickable?: boolean;
  /**
   * 点击单元格时触发
   */
  onClick?: (event: React.SyntheticEvent) => void;
}

const Cell: React.FC<CellProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    icon,
    extra,
    brief,
    align = 'middle',
    size,
    border = true,
    arrow,
    clickable,
    onClick,
    children,
  } = props;

  const { getPrefixCls } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('cell', customizePrefixCls);

  const classes = classnames(
    prefixCls,
    {
      [`${prefixCls}-large`]: size === 'large',
      [`${prefixCls}-clickable`]: clickable ?? !!onClick,
      [`${prefixCls}-${align}`]: true,
      [`${prefixCls}-border`]: border,
    },
    className,
  );

  const renderArrow = () => {
    let element: React.ReactNode;
    switch (arrow) {
      case 'up':
        element = <Up />;
        break;
      case true:
      case 'right':
        element = <Right />;
        break;
      case 'down':
        element = <Down />;
        break;
      case 'left':
        element = <Left />;
        break;
    }

    if (element) return <Icon className={`${prefixCls}-arrow`}>{element}</Icon>;
  };

  return (
    <div
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      className={classes}
      style={style}
      onClick={onClick}
    >
      {icon && <div className={`${prefixCls}-icon`}>{icon}</div>}
      {children && (
        <div className={`${prefixCls}-content`}>
          {children}
          {brief && <div className={`${prefixCls}-brief`}>{brief}</div>}
        </div>
      )}
      {extra && (
        <div
          className={classnames(`${prefixCls}-extra`, {
            [`${prefixCls}-alone`]: React.Children.count(children) > 0,
          })}
        >
          {extra}
        </div>
      )}
      {renderArrow()}
    </div>
  );
};

export default Cell;
