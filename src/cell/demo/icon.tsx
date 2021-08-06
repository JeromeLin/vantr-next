import * as React from 'react';
import { Icon, Cell, CellGroup } from 'vantr';
import { LocalTwo } from '@icon-park/react';

export default () => {
  return (
    <CellGroup>
      <Cell
        icon={
          <Icon size="sm">
            <LocalTwo />
          </Icon>
        }
        extra="内容"
      >
        单元格
      </Cell>
    </CellGroup>
  );
};
