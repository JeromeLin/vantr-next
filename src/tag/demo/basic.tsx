import * as React from 'react';
import { Tag, Cell, CellGroup } from 'vantr';

export default () => {
  return (
    <CellGroup inset>
      <Cell extra={<Tag type="primary">标签</Tag>}>primary 类型</Cell>
      <Cell extra={<Tag type="success">标签</Tag>}>success 类型</Cell>
      <Cell extra={<Tag type="danger">标签</Tag>}>danger 类型</Cell>
      <Cell extra={<Tag type="warning">标签</Tag>}>warning 类型</Cell>
    </CellGroup>
  );
};
