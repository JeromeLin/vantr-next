import React from 'react';
import { Cell, CellGroup, Popup } from 'vantr';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <CellGroup inset>
        <Cell onClick={() => setVisible(true)} arrow>
          圆角弹窗
        </Cell>
      </CellGroup>
      <Popup
        visible={visible}
        onClose={() => setVisible(false)}
        style={{ height: '30%' }}
        position="bottom"
        round
      />
    </>
  );
};
