import React from 'react';
import DemoBlock from '../../_internal/demo';
import PopupBasic from './basic';
import PopupPosition from './position';
import PopupClose from './close';
import PopupRound from './round';
import PopupContainer from './container';

import './index.less';

export default () => {
  return (
    <div className="demo-popup">
      <DemoBlock title="基础用法">
        <PopupBasic />
      </DemoBlock>
      <DemoBlock title="弹出位置">
        <PopupPosition />
      </DemoBlock>
      <DemoBlock title="关闭图标">
        <PopupClose />
      </DemoBlock>
      <DemoBlock title="圆角弹窗">
        <PopupRound />
      </DemoBlock>
      <DemoBlock title="指定挂载节点">
        <PopupContainer />
      </DemoBlock>
    </div>
  );
};
