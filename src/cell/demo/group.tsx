import * as React from 'react';
import { Cell, CellGroup } from 'vantr';

export default () => {
  return (
    <>
      <CellGroup title="分组 1">
        <Cell extra="内容">单元格</Cell>
      </CellGroup>
      <CellGroup title="分组 2">
        <Cell extra="内容">单元格</Cell>
      </CellGroup>
    </>
  );
};
