import * as React from 'react';
import { Tag, Cell } from 'vantr';

export default () => {
  return (
    <Cell
      extra={
        <Tag type="primary" plain>
          标签
        </Tag>
      }
    >
      空心样式
    </Cell>
  );
};
