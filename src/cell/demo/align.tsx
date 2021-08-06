import * as React from 'react';
import { Cell, CellGroup } from 'vantr';

export default () => {
  return (
    <CellGroup>
      <Cell extra="内容" brief="描述信息" align="top">
        单元格
      </Cell>
      <Cell extra="内容" brief="描述信息">
        单元格
      </Cell>
      <Cell extra="内容" brief="描述信息" align="bottom">
        单元格
      </Cell>
    </CellGroup>
  );
};
