import React from 'react';
import DemoBlock from '../../_internal/demo';
import ButtonType from './type';
import ButtonPlain from './plain';
import ButtonHairline from './hairline';
import ButtonDisabled from './disabled';
import ButtonLoading from './loading';
import ButtonShape from './shape';
import ButtonIcon from './icon';
import ButtonSize from './size';
import ButtonBlock from './block';
import ButtonColor from './color';
import './index.less';

export default () => {
  return (
    <div className="demo-button">
      <DemoBlock title="按钮类型">
        <ButtonType />
      </DemoBlock>
      <DemoBlock title="朴素按钮">
        <ButtonPlain />
      </DemoBlock>
      <DemoBlock title="细边框按钮">
        <ButtonHairline />
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <ButtonDisabled />
      </DemoBlock>
      <DemoBlock title="加载状态">
        <ButtonLoading />
      </DemoBlock>
      <DemoBlock title="按钮形状">
        <ButtonShape />
      </DemoBlock>
      <DemoBlock title="图标按钮">
        <ButtonIcon />
      </DemoBlock>
      <DemoBlock title="按钮尺寸">
        <ButtonSize />
      </DemoBlock>
      <DemoBlock title="块级元素">
        <ButtonBlock />
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <ButtonColor />
      </DemoBlock>
    </div>
  );
};
