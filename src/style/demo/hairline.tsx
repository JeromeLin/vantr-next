import * as React from 'react';
import { Cell, CellGroup } from 'vantr';
import './hairline.less';

export default () => {
  return (
    <CellGroup inset>
      <Cell>
        <div className="vanr-hairline-top" />
      </Cell>
    </CellGroup>
  );
};
