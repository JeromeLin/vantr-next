import React from 'react';
import { Cell, CellGroup, Overlay } from 'vantr';
import './content.less';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <CellGroup inset>
        <Cell onClick={() => setVisible(true)} arrow>
          嵌入内容
        </Cell>
      </CellGroup>
      <Overlay visible={visible} onClick={() => setVisible(false)}>
        <div className="demo-overlay-wrapper">
          <div className="demo-overlay-block" />
        </div>
      </Overlay>
    </>
  );
};
