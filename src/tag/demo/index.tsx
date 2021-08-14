import * as React from 'react';
import { CellGroup } from 'vantr';
import { DemoBlock } from '../../_internal';
import DemoBasic from './basic';
import DemoRuond from './round';
import DemoPlain from './plain';
import DemoMark from './mark';
import DemoCloseable from './closeable';
import DemoSize from './size';
import DemoColor from './color';
import './index.less';

export default () => {
  return (
    <div className="demo-tag">
      <DemoBlock title="基础用法">
        <DemoBasic />
      </DemoBlock>
      <DemoBlock title="样式风格">
        <CellGroup inset>
          <DemoRuond />
          <DemoPlain />
          <DemoMark />
          <DemoCloseable />
        </CellGroup>
      </DemoBlock>
      <DemoBlock title="标签大小">
        <DemoSize />
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <DemoColor />
      </DemoBlock>
    </div>
  );
};
