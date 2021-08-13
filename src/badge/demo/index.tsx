import * as React from 'react';
import { DemoBlock } from '../../_internal';
import DemoBasic from './basic';
import DemoMax from './max';
import DemoDynamic from './dynamic';
import DemoColor from './color';
import DemoCustom from './custom';
import DemoIndependent from './independent';
import DemoSize from './size';
import './index.less';

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <DemoBasic />
      </DemoBlock>
      <DemoBlock title="最大值">
        <DemoMax />
      </DemoBlock>
      <DemoBlock title="动态显示">
        <DemoDynamic />
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <DemoColor />
      </DemoBlock>
      <DemoBlock title="自定义徽标内容">
        <DemoCustom />
      </DemoBlock>
      <DemoBlock title="尺寸">
        <DemoSize />
      </DemoBlock>
      <DemoBlock title="独立展示">
        <DemoIndependent />
      </DemoBlock>
    </>
  );
};
