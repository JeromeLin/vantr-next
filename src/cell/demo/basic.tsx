import * as React from 'react';
import { Cell, CellGroup } from 'vantr';

export default () => {
  return (
    <CellGroup>
      <Cell extra="内容">单元格</Cell>
      <Cell brief="描述信息" extra="内容">
        单元格
      </Cell>
    </CellGroup>
  );
};
