import * as React from 'react';
import classnames from 'classnames';
import { BaseProps } from '../_internal/base-props';
import { ConfigContext } from '../config-provider/context';

export interface PopupProps extends BaseProps {
  visible?: boolean;
  overlay?: boolean;
  overlayClass?: string;
  overlayStyle?: React.CSSProperties;
  position?: 'center' | 'top' | 'right' | 'bottom' | 'left';
}

const Popup: React.FC<PopupProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    visible,
    position = 'center',
    children,
  } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('popup', customizePrefixCls);

  const classes = classnames(prefixCls, {}, className);
  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
};

export default Popup;
