import { Cell, CellGroup, Popup } from 'vantr';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <CellGroup inset>
        <Cell onClick={() => setVisible(true)} arrow>
          显示遮罩层
        </Cell>
      </CellGroup>
      <Popup visible={visible} />
    </>
  );
};
