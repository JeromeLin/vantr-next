import * as React from 'react';
import { Tag, Cell } from 'vantr';

export default () => {
  return (
    <Cell
      extra={
        <Tag type="primary" round>
          标签
        </Tag>
      }
    >
      圆角样式
    </Cell>
  );
};
