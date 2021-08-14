import * as React from 'react';
import { Tag, Cell, CellGroup } from 'vantr';

export default () => {
  return (
    <CellGroup inset>
      <Cell extra={<Tag color="#7232dd">标签</Tag>}>背景颜色</Cell>
      <Cell
        extra={
          <Tag color="#ffe1e1" textColor="#ad0000">
            标签
          </Tag>
        }
      >
        文字颜色
      </Cell>
      <Cell
        extra={
          <Tag color="#7232dd" plain>
            标签
          </Tag>
        }
      >
        空心颜色
      </Cell>
    </CellGroup>
  );
};
