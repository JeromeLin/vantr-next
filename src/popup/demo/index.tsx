import React from 'react';
import DemoBlock from '../../_internal/demo';
import PopupBasic from './basic';

import './index.less';

export default () => {
  return (
    <div className="demo-popup">
      <DemoBlock title="基础用法">
        <PopupBasic />
      </DemoBlock>
    </div>
  );
};
