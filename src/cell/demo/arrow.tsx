import * as React from 'react';
import { Cell, CellGroup } from 'vantr';

export default () => {
  return (
    <CellGroup>
      <Cell arrow clickable>
        单元格
      </Cell>
      <Cell extra="内容" arrow clickable>
        单元格
      </Cell>
      <Cell extra="内容" arrow="down" clickable>
        单元格
      </Cell>
    </CellGroup>
  );
};
