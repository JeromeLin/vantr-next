import React from 'react';
import DemoBlock from '../../_internal/demo';
import LoadingType from './type';
import LoadingColor from './color';
import LoadingSize from './size';
import LoadingText from './text';
import LoadingVertical from './vertical';
import './index.less';

export default () => {
  return (
    <div className="demo-loading">
      <DemoBlock title="加载类型">
        <LoadingType />
      </DemoBlock>
      <DemoBlock title="加载尺寸">
        <LoadingSize />
      </DemoBlock>
      <DemoBlock title="加载文案">
        <LoadingText />
      </DemoBlock>
      <DemoBlock title="垂直排列">
        <LoadingVertical />
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <LoadingColor />
      </DemoBlock>
    </div>
  );
};
