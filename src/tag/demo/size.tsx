import * as React from 'react';
import { Tag, Cell, CellGroup } from 'vantr';

export default () => {
  return (
    <CellGroup inset>
      <Cell
        extra={
          <Tag type="primary" size="sm">
            标签
          </Tag>
        }
      >
        小号标签
      </Cell>
      <Cell extra={<Tag type="primary">标签</Tag>}>中号标签</Cell>
      <Cell
        extra={
          <Tag type="primary" size="lg">
            标签
          </Tag>
        }
      >
        大号标签
      </Cell>
    </CellGroup>
  );
};
