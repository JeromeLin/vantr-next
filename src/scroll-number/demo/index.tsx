import * as React from 'react';
import { DemoBlock } from '../../_internal';
import DemoBasic from './basic';

export default () => {
  return (
    <div className="demo-scroll-number">
      <DemoBlock title="基础用法">
        <DemoBasic />
      </DemoBlock>
    </div>
  );
};
