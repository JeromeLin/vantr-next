import * as React from 'react';
import classnames from 'classnames';
import { BaseProps } from '../_internal';
import { ConfigContext } from '../config-provider/context';

export interface ExampleProps extends BaseProps {}

const Example: React.FC<ExampleProps> = (props) => {
  const { prefixCls: customizePrefixCls, className, style, children } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('example', customizePrefixCls);
  const classes = classnames(prefixCls, {}, className);

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default Example;
