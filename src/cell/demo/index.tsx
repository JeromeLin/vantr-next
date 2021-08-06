import React from 'react';
import DemoBlock from '../../_internal/demo';
import CellBasic from './basic';
import CellInset from './inset';
import CellSize from './size';
import CellIcon from './icon';
import CellArrow from './arrow';
import CellGroup from './group';
import CellAlign from './align';
import './index.less';

export default () => {
  return (
    <div className="demo-cell">
      <DemoBlock title="基础使用">
        <CellBasic />
      </DemoBlock>
      <DemoBlock title="卡片风格">
        <CellInset />
      </DemoBlock>
      <DemoBlock title="单元格大小">
        <CellSize />
      </DemoBlock>
      <DemoBlock title="展示图标">
        <CellIcon />
      </DemoBlock>
      <DemoBlock title="展示箭头">
        <CellArrow />
      </DemoBlock>
      <DemoBlock title="分组标题">
        <CellGroup />
      </DemoBlock>
      <DemoBlock title="垂直对其方式">
        <CellAlign />
      </DemoBlock>
    </div>
  );
};
