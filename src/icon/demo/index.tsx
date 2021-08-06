import React from 'react';
import DemoBlock from '../../_internal/demo';
import IconBasic from './basic';
import IconSize from './size';
import IconColor from './color';
import './index.less';

export default () => {
  return (
    <div className="demo-icon">
      <DemoBlock title="基础用法">
        <IconBasic />
      </DemoBlock>
      <DemoBlock title="图标尺寸">
        <IconSize />
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <IconColor />
      </DemoBlock>
    </div>
  );
};
