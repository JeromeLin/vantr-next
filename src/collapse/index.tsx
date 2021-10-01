import * as React from 'react';
import classnames from 'classnames';
import { BaseProps } from '../_internal';
import { ConfigContext } from '../config-provider/context';
import { useControllableValue } from 'src/hooks';

export interface CollapseProps extends BaseProps {
  defaultActiveKey?: React.Key | React.Key[] | null;
  activeKey?: React.Key | React.Key[] | null;
  /**
   * 显示外边框
   * @default true
   */
  border?: boolean;
  /**
   * 开启手风琴模式
   * @default false
   */
  accordion?: boolean;
  /** 切换面板时触发 */
  onChange?: () => void;
}

const Collapse: React.FC<CollapseProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    border = true,
    accordion = false,
    children,
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('collapse', customizePrefixCls);
  const classes = classnames(prefixCls, {}, className);

  const [activeKey, setActiveKey] = useControllableValue<
    React.Key | React.Key[] | null
  >(props, {
    valuePropName: 'activeKey',
    defaultValuePropName: 'defaultActiveKey',
    defaultValue: [],
    trigger: 'onChange',
  });

  const activeKeyList =
    activeKey === null
      ? []
      : Array.isArray(activeKey)
      ? activeKey
      : [activeKey];

  return (
    <div
      role={accordion ? 'tablist' : undefined}
      className={classes}
      style={style}
    >
      {children}
    </div>
  );
};

export default Collapse;
