import * as React from 'react';
import { DemoBlock } from '../../_internal';
import DemoHairline from './hairline';
import DemoAnimate from './animate';
import './index.less';

export default () => {
  return (
    <div className="demo-style">
      <DemoBlock title="1px 边框">
        <DemoHairline />
      </DemoBlock>
      <DemoBlock title="动画">
        <DemoAnimate />
      </DemoBlock>
    </div>
  );
};
