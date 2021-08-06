import * as React from 'react';
import { Cell, CellGroup } from 'vantr';

export default () => {
  return (
    <CellGroup>
      <Cell extra="内容" size="large">
        单元格
      </Cell>
      <Cell extra="内容" brief="描述信息" size="large">
        单元格
      </Cell>
    </CellGroup>
  );
};
