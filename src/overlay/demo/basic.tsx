import React from 'react';
import { Cell, CellGroup, Overlay } from 'vantr';

export default () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <CellGroup inset>
        <Cell onClick={() => setVisible(true)} arrow>
          显示遮罩层
        </Cell>
      </CellGroup>
      <Overlay visible={visible} onClick={() => setVisible(false)} />
    </>
  );
};
