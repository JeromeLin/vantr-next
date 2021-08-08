import React from 'react';
import DemoBlock from '../../_internal/demo';
import PopupBasic from './basic';
import PopupPosition from './position';

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
    </div>
  );
};
