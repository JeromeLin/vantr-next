import { Cell, CellGroup, Popup } from 'vantr';
import React from 'react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <CellGroup inset>
        <Cell onClick={() => setVisible(true)} arrow>
          展示弹出层
        </Cell>
      </CellGroup>
      <Popup visible={visible} />
    </>
  );
};
