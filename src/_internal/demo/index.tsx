import * as React from 'react';
import { BaseProps } from '../types';
import './index.less';
export interface DemoBlockProps extends BaseProps {
  title?: string;
}

const prefixCls = 'demo-block';

const DemoBlock: React.FC<DemoBlockProps> = (props) => {
  const { title, children } = props;
  return (
    <div className={prefixCls}>
      {title && <div className={`${prefixCls}-title`}>{title}</div>}
      <div className={`${prefixCls}-content`}>{children}</div>
    </div>
  );
};

export default DemoBlock;
