import React from 'react';
import DemoBlock from '../../_internal/demo';
import PopupBasic from './basic';
import PopupContent from './content';
import './index.less';

export default () => {
  return (
    <div className="demo-popup">
      <DemoBlock title="基础用法">
        <PopupBasic />
      </DemoBlock>
      <DemoBlock title="嵌入内容">
        <PopupContent />
      </DemoBlock>
    </div>
  );
};
