import * as React from 'react';
import { BaseProps } from '../base-props';
import './index.less';

export interface DemoBlockProps extends BaseProps {
  title?: string;
}

const DemoBlock: React.FC<DemoBlockProps> = (props) => {
  const { title, children } = props;
  return (
    <div className="demo-block">
      {title && <div className="demo-block-title">{title}</div>}
      <div className="demo-block-content">{children}</div>
    </div>
  );
};

export default DemoBlock;
