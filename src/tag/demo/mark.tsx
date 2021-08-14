import * as React from 'react';
import { Tag, Cell } from 'vantr';

export default () => {
  return (
    <Cell
      extra={
        <Tag type="primary" mark>
          标签
        </Tag>
      }
    >
      标记样式
    </Cell>
  );
};
