import * as React from 'react';
import classnames from 'classnames';
import CSSMotion from 'rc-motion';
import { BaseProps } from '../_internal/base-props';
import { ConfigContext } from '../config-provider/context';

export interface OverlayProps extends BaseProps {
  visible?: boolean;
  zIndex?: number;
  duration?: number;
}

const Overlay: React.FC<OverlayProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    visible,
    children,
  } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('overlay', customizePrefixCls);

  const classes = classnames(prefixCls, {}, className);

  return (
    <CSSMotion visible={visible} motionName="fade">
      {({ className, style }) => (
        <div ref={ref} className={classes} style={style}>
          {children}
        </div>
      )}
    </CSSMotion>
  );
};

export default Overlay;
